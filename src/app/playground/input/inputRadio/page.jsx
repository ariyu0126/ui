'use client';

import { useState } from 'react';
import { Radio, SourceCodeViewer, Typography } from "@/components";

const InputRadioPlayground = () => {
    const [radioProps, setRadioProps] = useState({
        name: '',
        label: '',
        value: '',
        size: 'md',
        checked: false,
        defaultChecked: false,
        disabled: false,
        required: false,
        className: '',
    })

    // button props
    const handlePropertyChange = (property, value) => {
        // const requiredOption = value === 'true' ? true : value === 'false' ? false : value;
        // const disabledOption = value === 'true' ? true : value === 'false' ? false : value;
        // const readonlyOption = value === 'true' ? true : value === 'false' ? false : value;
        // const errorBlurOption = value === 'true' ? true : value === 'false' ? false : value;
        // const errorTouchedOption = value === 'true' ? true : value === 'false' ? false : value;
        setRadioProps((prevProps) => ({
            ...prevProps,
            [property]: value,
        }));
    };

    // radio group
    const radioOptions = [{
        label: '라디오 1',
        value: 'radio1',
    }, {
        label: '라디오 2',
        value: 'radio2',
    }, {
        label: '라디오 3',
        value: 'radio3',
    }];

    // code
    const sizeOption = ['sm', 'md', 'lg'];
    const [selected, setSelected] = useState('');
    const {name, label, value, size, checked, defaultChecked, disabled, required, className} = radioProps;
    const code = `
        <Radio
            name="${name}"
            label="${label}"
            value="${value}"
            size="${size}"
            ${selected === value ? `checked={true}` : defaultChecked ? `defaultChecked={true}` : ''}
            disabled=${disabled ? 'true' : 'false'}
            required=${required ? 'true' : 'false'}
            className="${className}"
            onChange={() => setChecked('checked')}
        />
    `;
    return(
        <div className="playground">
            <Typography.Title>Input Radio</Typography.Title>
            <Typography.Title level={2}>1. Input Radio</Typography.Title>
            <div className="playground__inner">
                <Typography.Title level={3}>1-1. Input Radio 속성</Typography.Title>
                <ul>
                    <li>
                        <Typography.Text>- size: sm, md, lg</Typography.Text>
                        <Radio size="sm" checked={true} label="라디오" />
                        <Radio size="md" checked={true} label="라디오" />
                        <Radio size="lg" checked={true} label="라디오" />
                    </li>
                    <li>
                        <Typography.Text>- checked: true, false</Typography.Text>
                        <Radio checked={true} label="라디오" />
                    </li>
                    <li>
                        <Typography.Text>- defaultChecked: true, false</Typography.Text>
                        <Radio defaultChecked={true} label="라디오 1" />
                    </li>
                    <li>
                        <Typography.Text>- disabled : true, false</Typography.Text>
                        <Radio disabled={true} label="라디오" />
                    </li>
                    <li>
                        <Typography.Text>- required : true, false</Typography.Text>
                        <Radio required={true} label="라디오" />
                    </li>
                </ul>
                <Typography.Title level={3}>1-2. Input Radio 예시</Typography.Title>
                <ul>
                    <li>
                        - size :{' '}
                        <div className="button__group">
                            {
                                sizeOption.map((val, idx) => (
                                    <button className={`button__tag ${radioProps.size === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('size', val)}>{val}</button>
                                ))
                            }
                        </div>
                    </li>
                    <li>
                        - name :{' '}
                        <input
                            value={radioProps.name || ''}
                            onChange={(e) => handlePropertyChange('name', e.target.value)}
                            placeholder="name을 입력해주세요"
                        />
                    </li>
                    <li>
                        - label :{' '}
                        <input
                            value={radioProps.label || ''}
                            onChange={(e) => handlePropertyChange('label', e.target.value)}
                            placeholder="label을 입력해주세요"
                        />
                    </li>
                    <li>
                        - value :{' '}
                        <input
                            value={radioProps.value || ''}
                            onChange={(e) => handlePropertyChange('value', e.target.value)}
                            placeholder="value를 입력해주세요"
                        />
                    </li>
                    <li>- disabled : 
                        <div className="button__group">
                            <button className={`button__tag ${radioProps.disabled === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('disabled', true)}>true</button>
                            <button className={`button__tag ${radioProps.disabled === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('disabled', false)}>false</button>
                        </div>
                    </li>
                    <li>- required : 
                        <div className="button__group">
                            <button className={`button__tag ${radioProps.required === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('required', true)}>true</button>
                            <button className={`button__tag ${radioProps.required === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('required', false)}>false</button>
                        </div>
                    </li>
                </ul>
                <Radio {...radioProps} checked={selected === radioProps.value} />
                <SourceCodeViewer code={code} />
            </div>
            <Typography.Title level={2}>2. Input Radio group</Typography.Title>
            <div className="playground__inner">
                <Typography.Title level={3}>2-1. Input Radio Group 사용방식</Typography.Title>
                <Typography.Text>- options: 배열 형태로 사용</Typography.Text>
                <Radio.Group options={radioOptions} defaultChecked="radio1" name="radio-group" /><br />
                <Typography.Text>- children: 컴포넌트 형태로 사용</Typography.Text>
                <Radio.Group name="radio-group2">
                    <Radio label="라디오 1" value="radio1" defaultChecked={true} />
                    <Radio label="라디오 2" value="radio2" />
                    <Radio label="라디오 3" value="radio3" />
                </Radio.Group>
                <Typography.Title level={3}>2-2. Input Radio Group 속성</Typography.Title>
                <ul>
                    <li>
                        <Typography.Text>- options</Typography.Text>
                        <Radio.Group options={radioOptions} defaultChecked="radio1" name="radio-group" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InputRadioPlayground;