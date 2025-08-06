'use client';

import { useId, useState, useEffect } from 'react';

const Checkbox = ({
  name,
  label,
  value,
  size='md',
  checked,
  defaultChecked=false,
  disabled=false,
  required=false,
  className='',
  onChange,
  color='white',
  ...rest
}) => {
  const checkboxId = useId();
  const labelId = `${checkboxId}-label`;
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : isChecked;

  const handleChange = (e) => {
    const nextChecked = e.target.checked;

    if (!isControlled) {
      setIsChecked(nextChecked);
    }
    onChange?.(e);   
    console.log(nextChecked)
  }
  
  return (
    <label className={`input__checkbox ${className} size--${size} color--${color} ${disabled ? 'is-disabled' : ''}`}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        label={label}
        value={value}
        checked={currentChecked}
        disabled={disabled}
        required={required}
        aria-required={required}
        aria-checked={currentChecked}
        aria-label={label}
        onChange={handleChange}
        {...rest}
      />
      <span className="checkbox__custom" role="checkbox" aria-checked={currentChecked} aria-disabled={disabled} tabIndex="-1"/>
      {label && <span className="checkbox__label">{label}</span>}
      {
        required  &&
        <p id={labelId} className="error-message" role="alert">필수 선택입니다.</p>
      }
    </label>
  )
}

export default Checkbox;