'use client';

import PropTypes from 'prop-types';
import { Radio } from "@/components";
import { useState } from 'react';

const RadioGroup = ({
    defaultChecked,
    options= [],
    name='',
    direction='row',
    optionType='default',
    children,
    required=false,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(defaultChecked);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    return (
        <div className={`radio__group radio__group-option-${optionType} radio__group-direction-${direction}`}>
            {
                options.length > 0 ? (
                    options.map((option) => (
                        <Radio key={option.value} {...option} value={option.value} name={name} defaultChecked={option.value === defaultChecked} />
                    ))
                ) : (
                    children
                )
            }
            {
                required  && !selectedValue &&
                <p className="error-message" role="alert">필수 선택입니다.</p>
            }
        </div>
    )
}

RadioGroup.propTypes = {
    optionType: PropTypes.oneOf(['default', 'button']),
    direction: PropTypes.oneOf(['column', 'row']),
};

export default RadioGroup;