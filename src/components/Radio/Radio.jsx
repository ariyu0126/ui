'use client';

import { useId } from 'react';

const Radio = ({
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
    ...rest
}) => {
    const radioId = useId();
    const labelId = `${radioId}-label`;
    const handleChange = (e) => {
        onChange?.(e.target.value);
        required = false;
    }

    return (
        <label className={`input__radio ${className} size--${size}`}>
            <input
                type="radio"
                id={radioId}
                name={name}
                label={label}
                value={value}
                {...(checked !== undefined
                    ? { checked }
                    : defaultChecked ? { defaultChecked:true } : {})}
                disabled={disabled}
                required={required}
                aria-required={required}
                aria-label={label}
                {...rest}
                onChange = {handleChange}
            />
            <span className="radio__custom" role="radio" aria-checked={checked !== undefined ? checked : defaultChecked} aria-disabled={disabled} tabIndex="-1"/>
            {label && <span className="radio__label">{label}</span>}
            {
                required  &&
                <p id={labelId} className="error-message" role="alert">필수 선택입니다.</p>
            }
        </label>
    )
}

export default Radio;