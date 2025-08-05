'use client';

import { useId } from 'react';

const Radio = ({
    name,
    label,
    value,
    size='md',
    checked,
    disabled=false,
    required=false,
    className='',
    onChange,
    color='white',
    ...rest
}) => {
    const radioId = useId();
    const labelId = `${radioId}-label`;
    const handleChange = (e) => {
        if (e.target){
            onChange?.(e);
        }
    }

    return (
        <label className={`input__radio ${className} size--${size} color--${color} ${disabled ? 'is-disabled' : ''}`}>
            <input
                type="radio"
                id={radioId}
                name={name}
                label={label}
                value={value}
                checked={checked}
                disabled={disabled}
                required={required}
                aria-required={required}
                aria-label={label}
                onChange={(e) => handleChange(e)}
                {...rest}
            />
            <span className="radio__custom" role="radio" aria-checked={checked !== undefined ? checked : false} aria-disabled={disabled} tabIndex="-1"/>
            {label && <span className="radio__label">{label}</span>}
            {
                required  &&
                <p id={labelId} className="error-message" role="alert">필수 선택입니다.</p>
            }
        </label>
    )
}

export default Radio;