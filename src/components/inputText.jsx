
import { useId, useState } from 'react';
import IconReset from '/public/xmark-large-svgrepo-com.svg';

export default function InputText({
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
    // validateRef,
    // validateOnBlur = true,
    // validateOnSubmit = false,
}) {
    const isControlled = propValue !== undefined;
    const [touched, setTouched] = useState(false);
    const [internalValue, setInternalValue] = useState('');
    const currentValue = isControlled ? propValue : internalValue;
    const [errorMessage, setErrorMessage] = useState('');
    const [hintVisible, setHintVisible] = useState(false);
    
    const inputId = useId();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    const hasError = error || errorMessage;
    const showHintMessage = hintVisible && !hasError;
    const showErrorMessage = touched && hasError && !hintVisible; // 힌트가 사라질 때 에러 메시지 표시

    const handleFocus = () => {
        setTouched(true);
        if (hint) setHintVisible(true);
    }

    const handleChange = (e) => {
        setTouched(true);
        const newValue = e.target.value;

        if (!readonly) {
            if (!isControlled) {
                setInternalValue(newValue);
            }
            onChange?.(newValue);
        }

        // 입력값이 변경되면 에러 메시지를 초기화
        if (newValue.trim() !== '') {
            setErrorMessage('');
        }
    }

    const handleReset = () => {
        setInternalValue('');
        setErrorMessage('');
        setHintVisible(false);
    }

    const handleBlur = () => {
        setTouched(true);
        setHintVisible(false);
        validate();
    }

    const validate = () => {
        // if (hasError && !currentValue) {
        //     setErrorMessage(`${label || '입력값'}을(를) 입력해주세요.`);
        //     return false;
        // }

        if (required && currentValue.trim() === '') {
            setErrorMessage(`${label || '입력값'} 은(는) 필수 입력 사항입니다.`);
            return false;
        }

        if (type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(currentValue)) {
                setErrorMessage('이메일 형식이 올바르지 않습니다.');
                return false;
            }
        }

        if (type === 'number') {
            if (isNaN(currentValue)) {
                setErrorMessage('숫자만 입력해주세요.');
                return false;
            }
        }

        if (type === 'tel') {
            const telRegex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
            if (!telRegex.test(currentValue)) {
                setErrorMessage('전화번호 형식이 올바르지 않습니다.');
                return false;
            }
        }

        setErrorMessage('');
        return true;
    }

    // if (validateRef) {
    //     validateRef.current = () => {
    //         if (validateOnSubmit) {
    //             validate();
    //         }
    //     };
    // }

    return (
        <span className={`input__text ${error || errorMessage ? 'input__text-error' : ''} ${required ? 'input__text-required' : ''} ${hint ? 'input__text-hint' : ''}`}
        >
            <span className="input__text-wrapper">
                <input
                    id={inputId}
                    type={type}
                    value={currentValue}
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
                    aria-describedby={hasError ? errorId : hint}
                />
                {
                    !readonly && currentValue !== '' && type !== 'number' &&
                    <button className="button__reset" onClick={handleReset} aria-label="reset">
                       <IconReset />
                    </button>
                }
            </span>
            {!readonly && showErrorMessage && <p id={errorId} className="error-message" role="alert">{error || errorMessage || '입력값을 확인해주세요.'}</p>}
            {!readonly && showHintMessage && <p id={hintId} className="hint-message" role="alert">{hint || '힌트! 입력값을 확인해주세요'}</p>}
        </span>
    )
}