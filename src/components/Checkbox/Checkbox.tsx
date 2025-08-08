'use client';

import { useState, useId } from 'react';

type CheckboxProps = {
  name?: string;
  label?: React.ReactNode;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean; // controlled when provided; otherwise uncontrolled
  defaultChecked?: boolean; // initial value for uncontrolled mode
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  color?: 'white' | 'dark' | 'point';
  [key: string]: any;
};

const Checkbox = ({
  name,
  label,
  value,
  size = 'md',
  checked,
  defaultChecked = false,
  disabled = false,
  required = false,
  className = '',
  onChange,
  color = 'white',
  ...rest
}: CheckboxProps) => {
  const checkboxId = useId();
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
  const currentChecked = isControlled ? (checked as boolean) : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(e);
  };

  // 경고 방지: default*는 input에 전달하지 않음(호출부에서 넘겨도 제거)
  const { defaultValue: _omitDefaultValue, defaultChecked: _omitDefaultChecked, ...restSafe } = rest || {};

  return (
    <label className={`input__checkbox ${size ? ` size--${size}` : ''} ${color ? `color--${color}` : ''} ${disabled ? 'is-disabled' : ''} ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={currentChecked}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-checked={currentChecked}
        aria-label={typeof label === 'string' ? label : undefined}
        onChange={handleChange}
        {...restSafe}
      />
      <span className="checkbox__custom" role="checkbox" aria-checked={currentChecked} aria-disabled={disabled} tabIndex={-1}/>
      {label && <span className="checkbox__label">{label}</span>}
      {
        required && !currentChecked &&
        <p id={checkboxId} className="error-message" role="alert">필수 선택입니다.</p>
      }
    </label>
  )
}

export default Checkbox;