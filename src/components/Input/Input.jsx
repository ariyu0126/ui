'use client';

import { useId, useState } from 'react';
import IconReset from '/public/xmark-large-svgrepo-com.svg';
import IconEye from '/public/eye-alt-svgrepo-com.svg';
import IconEyeOff from '/public/eye-slash-alt-svgrepo-com.svg';

const Input = ({
    size='md',
    type='text',
    error,
    hint,
    required=false,
    disabled=false,
    readonly=false,
    placeholder='',
    label='',
    value: propValue,
    onChange,
    className,
    validate,
}) => {
    const isControlled = propValue !== undefined;
    // const [touched, setTouched] = useState(false);
    // const [isTyping, setIsTyping] = useState(false);
    const [internalValue, setInternalValue] = useState('');
    const currentValue = isControlled ? propValue : internalValue;
    const [errorMessage, setErrorMessage] = useState('');
    const [hintVisible, setHintVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    
    const inputId = useId();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    const showHintMessage = hintVisible && !(error || errorMessage);
    // const showErrorMessage = !hintVisible && !isTyping && (touched && hasError);

    const handleFocus = () => {
        // setTouched(true);
        if (hint) setHintVisible(true);
    }

    const handleChange = (e) => {
        // setTouched(true);
        const newValue = e.target.value;

        if (!readonly) {
            if (!isControlled) {
                setInternalValue(newValue);
            }
            onChange?.(newValue);
        }

        // 입력값이 변경되면 에러 초기화
        if (newValue.trim() !== '') {
            setErrorMessage('');
        }
    }

    const handleReset = () => {
        // setTouched(false);
        setInternalValue('');
        setErrorMessage('');
        setHintVisible(false);
    }

    const handleBlur = () => {
        // setTouched(true);
        setHintVisible(false);
        validateValue();
    }

    const validateValue = () => {
        if (validate) {
            const result = validate(currentValue);
            if (result !== true) {
                setErrorMessage(result || '입력값을 확인해주세요.');
                return false;
            }
        } else if (required && currentValue.trim() === '') {
            console.log('required');
            setErrorMessage(`${label || '입력값'} 은(는) 필수 입력 사항입니다.`);
            return false;
        }

        setErrorMessage('');
        return true;
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <span className={`input__text ${(error || errorMessage) ? 'input__text-error' : ''} ${required ? 'input__text-required' : ''} ${hint ? 'input__text-hint' : ''} ${className}`}
        >
            <span className="input__text-wrapper">
                <input
                    id={inputId}
                    value={currentValue}
                    type={type === 'password' && showPassword ? 'text' : type}
                    className={`input__default size--${size}`}
                    disabled={disabled}
                    readOnly={readonly}
                    required={required}
                    aria-required={required}
                    aria-label={label}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    // aria-describedby={(error || errorMessage) ? errorId : hint}
                    aria-describedby={hint}
                />
                {
                    !readonly && currentValue !== '' && type !== 'number' &&
                    <button className="button__reset" onClick={handleReset} aria-label="reset">
                       <IconReset />
                    </button>
                }
                {
                    !readonly && type === 'password' &&
                    <button className="button__eye" onClick={togglePasswordVisibility} aria-label="toggle password visibility">
                        {showPassword ? <IconEyeOff /> : <IconEye />}
                    </button>
                }
            </span>
            {
                !readonly && (error || errorMessage) &&
                <p id={errorId} className="error-message" role="alert">{error || errorMessage || '입력값을 확인해주세요.'}</p>
            }
            {
                !readonly && showHintMessage &&
                <p id={hintId} className="hint-message" role="alert">{hint || '힌트! 입력값을 확인해주세요'}</p>
            }
            {showHintMessage}
        </span>
    )
}

export default Input;