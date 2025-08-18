'use client';

import { useEffect, useMemo, useRef, useState, useId } from 'react';
import { cx } from '../../lib/cx';
import { Icon } from '../Icon';

const Select = ({
  options,
  size = 'md',
  color = 'white',
  minWidth,
  maxWidth,
  disabledValues,
  defaultSelected,
  className = '',
}: {
  options: {
    value: string;
    name: string;
    disabled?: boolean;
  }[];
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'dark' | 'point';
  minWidth?: string;
  maxWidth?: string;
  disabledValues?: boolean;
  defaultSelected?: { value: string };
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectTop, setSelectTop] = useState(true);
  const [selected, setSelected] = useState<{ value: string; name: string } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listboxId = useId();

  const currentLabel = useMemo(() => {
    if (selected) return selected.name;
    return options && options.length > 0 ? options[0].name : '';
  }, [options, selected]);

  useEffect(() => {
    if (!defaultSelected) return;
    const target = options.find((opt) => opt.value === defaultSelected.value);
    if (!target) return;
    if (target.disabled || disabledValues) return;
    setSelected({ value: target.value, name: target.name });
  }, [defaultSelected, defaultSelected?.value, options, disabledValues]);

  const handleSelect = (
    option: { value: string; name: string; disabled?: boolean },
    index: number,
  ) => {
    const isDisabled = Boolean(option.disabled || disabledValues);
    if (isDisabled) return;
    setSelected(option);
    setIsOpen(false);
  };

  const labelClickSelect = () => {
    if (disabledValues) return;
    setIsOpen((prev) => !prev);
    const root = containerRef.current;
    if (!root) return;
    const labelEl = root.querySelector<HTMLElement>('.selectbox__label');
    if (!labelEl) return;

    const { top } = labelEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    setSelectTop(top > viewportHeight / 2);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // close when clicking outside the select container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const root = containerRef.current;
      if (!root) return;
      const target = event.target as Node | null;
      if (target && !root.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, []);

  const labelStyle = {
    ['--selectbox-min-width' as any]: minWidth,
    ['--selectbox-max-width' as any]: maxWidth,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={cx(
        'selectbox',
        'no-drag',
        isOpen && 'is-open',
        `size--${size}`,
        `color--${color}`,
        disabledValues && 'is-disabled',
        className,
        selectTop && 'selectbox__top',
      )}
      style={labelStyle}
    >
      <div className="selectbox__label" onClick={() => labelClickSelect()}>
        <span className="label">{currentLabel}</span>
        <span className="icon">
          <Icon.arrowDown />
        </span>
      </div>
      {isOpen && (
        <div className={`selectbox__input`}>
          <ul>
            {options.map((option, index) => {
              const isDisabled = Boolean(option.disabled || disabledValues);
              return (
                <li
                  key={option.value}
                  role="option"
                  className={isDisabled ? 'is-disabled' : ''}
                  tabIndex={isDisabled ? -1 : 0}
                  aria-selected={option.value === selected?.value}
                  aria-disabled={isDisabled}
                  onClick={() => handleSelect(option, index)}
                  // onKeyDown={(e) => handleKeyDown(e, option, index)}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
