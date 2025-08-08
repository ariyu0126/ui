'use client';

import { useState, useEffect } from 'react';
import { Radio } from '@/components';

type RadioOption = {
  label: React.ReactNode;
  value: string;
};

type RadioGroupProps = {
  options?: RadioOption[];
  name?: string;
  value?: string; // controlled
  checked?: string; // uncontrolled initial
  label?: string;
  direction?: 'row' | 'column';
  optionType?: 'default' | 'button';
  children?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  color?: 'white' | 'dark' | 'point';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};

const RadioGroup = ({
  options = [],
  name = '',
  value,
  checked,
  label,
  direction = 'row',
  optionType = 'default',
  children,
  disabled = false,
  required = false,
  color = 'white',
  size = 'md',
  className = '',
  onChange,
  ...rest
}: RadioGroupProps) => {
  const isControlled = value !== undefined;
  const [selectedValue, setSelectedValue] = useState(checked);
  const currentValue = isControlled ? value : selectedValue;

  useEffect(() => {
    setSelectedValue(checked);
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setSelectedValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="radio__group-container">
      <div className={`
        radio__group
        radio__group-option-${optionType}
        radio__group-direction-${direction}
        radio__group-color-${color}
        ${disabled ? 'is-disabled' : ''}
        ${className}
      `}>
        {options.map((option: RadioOption) => (
          <Radio
            key={option.value}
            label={option.label}
            value={option.value}
            name={name}
            checked={currentValue === option.value}
            disabled={disabled}
            color={color}
            size={size}
            onChange={handleChange}
            {...rest}
          />
        ))}
      </div>
      {required && !currentValue && (
        <p className="error-message" role="alert">
          필수 선택입니다.
        </p>
      )}
    </div>
  );
};

export default RadioGroup;
