'use client';

import { useId, useState } from 'react';
import type { ChangeEvent } from 'react';
import { cx } from '@/lib/cx';
import getValidationMessage from '@/lib/getValidationMessage';
import IconReset from '/public/xmark-large-svgrepo-com.svg';
import IconEye from '/public/eye-alt-svgrepo-com.svg';
import IconEyeOff from '/public/eye-slash-alt-svgrepo-com.svg';

const Input = ({
  size = 'md',
  type = 'text',
  error,
  hint,
  required = false,
  disabled = false,
  readOnly = false,
  placeholder = '',
  label = '',
  value: propValue,
  onChange,
  onReset,
  className = '',
  validate,
  min,
  max,
  errorBlur = false,
  errorTouched,
  ...rest
}: {
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password' | 'number' | 'tel';
  error?: boolean;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onReset?: () => void;
  className?: string;
  validate?: (value: any) => boolean | string;
  min?: number;
  max?: number;
  errorBlur?: boolean;
  errorTouched?: boolean;
  [key: string]: any;
}) => {
  const isControlled = propValue !== undefined;
  const [internalValue, setInternalValue] = useState('');
  const [touched, setTouched] = useState(false);
  const currentValue = isControlled ? propValue || '' : internalValue;
  const [errorMessage, setErrorMessage] = useState('');
  const [hintVisible, setHintVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;
  const isTouched = errorTouched !== undefined ? errorTouched : touched;

  const showHintMessage = hintVisible && !(error || errorMessage);
  const showErrorMessage = !hintVisible && (error || errorMessage) && (errorTouched || touched);

  const handleFocus = () => {
    if (hint) setHintVisible(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!readOnly) {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }

    if (newValue.trim() !== '') {
      setErrorMessage('');
    }
  };

  const handleReset = () => {
    setTouched(false);
    setInternalValue('');
    setErrorMessage('');
    setHintVisible(false);
    onReset?.();
  };

  const handleBlur = () => {
    setTouched(true);
    setHintVisible(false);
    if (errorBlur || !error) {
      validateValue();
      console.log('validateValue');
    }
  };

  const validateValue = () => {
    const result = getValidationMessage({
      required,
      validate,
      label,
      min,
      max,
      value: currentValue,
      type,
    });

    if (result !== true) {
      setErrorMessage(result);
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <span
      className={cx(
        'input__text',
        (error || errorMessage) && 'input__text-error',
        required && 'input__text-required',
        hint && 'input__text-hint',
        disabled && 'is-disabled',
        readOnly && 'is-readOnly',
        className,
      )}
    >
      <span className="input__text-wrapper">
        <input
          id={inputId}
          value={currentValue}
          type={type === 'password' && showPassword ? 'text' : type}
          className={`input__default size--${size}`}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-required={required}
          aria-label={label}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          aria-describedby={error || errorMessage ? errorId : hint}
          {...rest}
        />
        {!readOnly && currentValue !== '' && type !== 'number' && (
          <button className="button__reset" onClick={handleReset} aria-label="reset">
            <IconReset />
          </button>
        )}
        {!readOnly && type === 'password' && (
          <button
            className="button__eye"
            onClick={togglePasswordVisibility}
            aria-label="toggle password visibility"
          >
            {showPassword ? <IconEyeOff /> : <IconEye />}
          </button>
        )}
      </span>
      {!readOnly && showErrorMessage && (
        <p id={errorId} className="error-message" role="alert">
          {error || errorMessage || '입력값을 확인해주세요.'}
        </p>
      )}
      {!readOnly && showHintMessage && (
        <p id={hintId} className="hint-message" role="alert">
          {hint || '힌트! 입력값을 확인해주세요'}
        </p>
      )}
    </span>
  );
};

export default Input;
