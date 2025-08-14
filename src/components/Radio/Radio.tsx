'use client';

import { useId } from 'react';
import { cx } from '@/lib/cx';

type RadioProps = {
  name?: string;
  label?: React.ReactNode;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  color?: 'white' | 'dark' | 'point';
  [key: string]: any;
};

const Radio = ({
  name,
  label,
  value,
  size = 'md',
  checked,
  disabled = false,
  required = false,
  className = '',
  onChange,
  color = 'white',
  ...rest
}: RadioProps) => {
  const radioId = useId();
  const labelId = `${radioId}-label`;
  const isChecked = !!checked;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      onChange?.(e);
    }
  };

  return (
    <label
      className={cx(
        'input__radio',
        `size--${size}`,
        `color--${color}`,
        disabled && 'is-disabled',
        className,
      )}
    >
      <input
        type="radio"
        id={radioId}
        name={name}
        value={value}
        {...(checked !== undefined ? { checked } : {})}
        disabled={disabled}
        required={required}
        aria-label={typeof label === 'string' ? label : undefined}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
      <span
        className="radio__custom"
        role="radio"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={-1}
      />
      {label && <span className="radio__label">{label}</span>}
      {required && !isChecked && (
        <p id={labelId} className="error-message" role="alert">
          필수 선택입니다.
        </p>
      )}
    </label>
  );
};

export default Radio;
