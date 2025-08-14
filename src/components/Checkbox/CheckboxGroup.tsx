'use client';

import { useId, useState } from 'react';
import { cx } from '@/lib/cx';
import Checkbox from './Checkbox';

type CheckboxOption = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

type CheckboxGroupProps = {
  options?: CheckboxOption[];
  name?: string;
  value?: string[]; // controlled
  defaultChecked?: string[];
  label?: React.ReactNode;
  direction?: 'row' | 'column';
  optionType?: 'default' | 'button';
  disabled?: boolean;
  groupDisabled?: boolean;
  required?: boolean;
  color?: 'white' | 'dark' | 'point';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onChange?: (next: string[]) => void;
  [key: string]: any;
};

const CheckboxGroup = ({
  options = [],
  name = '',
  value,
  defaultChecked = [],
  label,
  direction = 'row',
  optionType = 'default',
  disabled = false,
  groupDisabled = false,
  required = false,
  color = 'white',
  size = 'md',
  className = '',
  onChange,
  ...rest
}: CheckboxGroupProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string[]>(defaultChecked);
  const currentValue = isControlled ? value! : internalValue;
  const isInvalid = required && currentValue.length === 0;
  const errorId = useId();

  const handleChange = (optionValue: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked
      ? currentValue.includes(optionValue)
        ? currentValue
        : [...currentValue, optionValue]
      : currentValue.filter((v) => v !== optionValue);

    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div className="checkbox__group-container">
      <div
        className={cx(
          'checkbox__group',
          optionType && `checkbox__group-option-${optionType}`,
          direction && `checkbox__group-direction-${direction}`,
          color && `checkbox__group-color-${color}`,
          groupDisabled && 'is-disabled',
          className,
        )}
        role="group"
        aria-describedby={isInvalid ? errorId : undefined}
      >
        {options.map((option: CheckboxOption) => (
          <Checkbox
            key={option.value}
            label={option.label}
            value={option.value}
            name={name}
            checked={currentValue.includes(option.value)}
            disabled={option.disabled ?? groupDisabled ?? disabled}
            color={color}
            size={size}
            onChange={handleChange(option.value)}
            {...rest}
          />
        ))}
      </div>
      {isInvalid && (
        <p id={errorId} className="error-message" role="alert">
          필수 선택입니다.
        </p>
      )}
    </div>
  );
};

export default CheckboxGroup;
