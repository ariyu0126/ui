'use client';

import PropTypes from 'prop-types';
import { Radio } from '@/components';
import { useState, useEffect } from 'react';

const RadioGroup = ({
  options = [],
  name = '',
  checked, // checked 속성을 통해 초기 선택 상태 설정
  direction = 'row',
  optionType = 'default',
  children,
  disabled = false,
  required = false,
  color = 'white',
  size = 'md',
  className = '',
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState(checked);

  useEffect(() => {
    setSelectedValue(checked);
  }, [checked]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    rest.onChange?.(e);
  };

  return (
    <div className="radio__group-container">
      <div
        className={`radio__group radio__group-option-${optionType}
                radio__group-direction-${direction} radio__group-color--${color} ${className} ${disabled ? 'is-disabled' : ''}`}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            {...option}
            value={option.value}
            name={name}
            checked={selectedValue === option.value}
            disabled={disabled}
            color={color}
            size={size}
            onChange={handleChange}
          />
        ))}
      </div>
      {required && !selectedValue && (
        <p className="error-message" role="alert">
          필수 선택입니다.
        </p>
      )}
    </div>
  );
};

RadioGroup.propTypes = {
  optionType: PropTypes.oneOf(['default', 'button']),
  direction: PropTypes.oneOf(['column', 'row']),
};

export default RadioGroup;
