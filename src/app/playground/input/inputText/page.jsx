'use client';

import { useState } from 'react';
import { Input, SourceCodeViewer } from "@/components";
import Typography from '@/components/Typography'
import '@/styles/pages/playground.scss';

const InputTextPlayground = () => {
    const [inputTextProps, setInputTextProps] = useState({
        size: 'md',
        type: 'text',
        error: null,
        hint: null,
        required: false,
        disabled: false,
        readonly: false,
        placeholder: '',
        label: '',
    });

    // button props
    const handlePropertyChange = (property, value) => {
        const requiredOption = value === 'true' ? true : value === 'false' ? false : value;
        const disabledOption = value === 'true' ? true : value === 'false' ? false : value;
        const readonlyOption = value === 'true' ? true : value === 'false' ? false : value;
        setInputTextProps((prevProps) => ({
            ...prevProps,
            [property]: value,
        }));
    };
    const sizeOption = ['md', 'lg', 'full'];
    const typeOption = ['text', 'password', 'number', 'email', 'tel'];

    // code
    const {size, error, hint, required, disabled, readonly,placeholder,label,value} = inputTextProps;
    const typeComponent = {
        text: 'Text',
        password: 'Password',
        number: 'Number',
        email: 'Email',
        tel: 'Tel',
    }
    const inputType = typeComponent[inputTextProps.type || 'text'];
    const code = `
  <Input.${inputType}
    size="${size}"
    error="${error}"
    hint="${hint}"
    placeholder="${placeholder}"
    label="${label}"
    value="${value}"
    ${readonly ? 'readonly' : ''}
    ${required ? 'required' : ''}
    ${disabled ? 'disabled' : ''}
  />
`;

    return (
        <>
            <div className="playground__inner">
                <Typography.Title level="3">1-1. Input text 속성</Typography.Title>
                <ul>
                    <li>
                        <Typography.Title level="4">- size</Typography.Title>
                        <Typography.Text>md</Typography.Text>
                        <Input.Text size="md" /><br />
                        <Typography.Text>lg</Typography.Text>
                        <Input.Text size="lg" /><br />
                        <Typography.Text>full</Typography.Text>
                        <Input.Text size="full" />
                    </li>
                    <li>
                        <Typography.Title level="4">- type</Typography.Title>
                        <Typography.Text>text</Typography.Text>
                        <Input.Text /><br />
                        <Typography.Text>password</Typography.Text>
                        <Input.Password type="password" /><br />
                        <Typography.Text>number</Typography.Text>
                        <Input.Number type="number" /><br />
                        <Typography.Text>email</Typography.Text>
                        <Input.Email type="email" placeholder="example@example.com" /><br />
                        <Typography.Text>tel</Typography.Text>
                        <Input.Tel type="tel" placeholder="010-1234-5678" />
                    </li>
                    <li>
                        <Typography.Title level="4">- 속성</Typography.Title>
                        <Typography.Text>label</Typography.Text>
                        <Input.Text label="라벨입니다" />
                        <Typography.Text>placeholder</Typography.Text>
                        <Input.Text placeholder="플레이스홀더입니다" />
                    </li>
                </ul>
                <Typography.Title level="3">1-2. Input text 설정</Typography.Title>
                <ul>
                    <li>
                        <Typography.Text>- basic</Typography.Text>
                        <Input.Text />
                    </li>
                    <li>
                        <Typography.Text>- required</Typography.Text>
                        <Input.Text required label="이름" />
                    </li>
                    <li>
                        <Typography.Text>- disabled</Typography.Text>
                        <Input.Text disabled value="비활성화" />
                    </li>
                    <li>
                        <Typography.Text>- readonly</Typography.Text>
                        <Input.Text readonly value="읽기만 가능" />
                    </li>
                    <li>
                        <Typography.Text>- error</Typography.Text>
                        <Input.Text error="에러닷" />
                    </li>
                    <li>
                        <Typography.Text children="- hint" />
                        <Input.Text hint="힌트다" />
                    </li>
                </ul>
                <Typography.Title level="3">2-1. Input text 예시</Typography.Title>
                <ul>
                    <li>
                        - size :{' '}
                        <div className="button__group">
                            {
                                sizeOption.map((val, idx) => (
                                    <button className={`button__tag ${inputTextProps.size === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('size', val)}>{val}</button>
                                ))
                            }
                        </div>
                    </li>
                    <li>
                        - type :{' '}
                        <div className="button__group">
                            {
                                typeOption.map((val, idx) => (
                                    <button className={`button__tag ${inputTextProps.type === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('type', val)}>{val}</button>
                                ))
                            }
                        </div>
                    </li>
                    <li>
                        - error :{' '}
                        <input
                            value={inputTextProps.error || ''}
                            onChange={(e) => handlePropertyChange('error', e.target.value)}
                            placeholder="에러 메시지를 입력하세요"
                        />
                    </li>
                    <li>
                        - hint :{' '}
                        <input
                            value={inputTextProps.hint || ''}
                            onChange={(e) => handlePropertyChange('hint', e.target.value)}
                            placeholder="힌트를 입력하세요"
                        />
                    </li>
                    <li>
                        - placeholder :{' '}
                        <input
                            value={inputTextProps.placeholder || ''}
                            onChange={(e) => handlePropertyChange('placeholder', e.target.value)}
                            placeholder="플레이스홀더를 입력하세요"
                        />
                    </li>
                    <li>
                        - label :{' '}
                        <input
                            value={inputTextProps.label || ''}
                            onChange={(e) => handlePropertyChange('label', e.target.value)}
                            label="label을 입력하세요"
                        />
                    </li>
                    <li>- required : 
                        <div className="button__group">
                            <button className={`button__tag ${inputTextProps.required === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('required', true)}>true</button>
                            <button className={`button__tag ${inputTextProps.required === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('required', false)}>false</button>
                        </div>
                    </li>
                    <li>- disabled : 
                        <div className="button__group">
                            <button className={`button__tag ${inputTextProps.disabled === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('disabled', true)}>true</button>
                            <button className={`button__tag ${inputTextProps.disabled === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('disabled', false)}>false</button>
                        </div>
                        {(inputTextProps.disabled === true) && (
                            <div>
                                <br />
                                - value :{' '}
                                <input
                                value={inputTextProps.value || ''}
                                onChange={(e) => handlePropertyChange('value', e.target.value)}
                                label="value를 입력하세요"
                                />
                            </div>
                        )}
                    </li>
                    <li>- readonly : 
                        <div className="button__group">
                            <button className={`button__tag ${inputTextProps.readonly === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('readonly', true)}>true</button>
                            <button className={`button__tag ${inputTextProps.readonly === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('readonly', false)}>false</button>
                        </div>
                        {(inputTextProps.readonly === true) && (
                            <div>
                                <br />
                                - value :{' '}
                                <input
                                value={inputTextProps.value || ''}
                                onChange={(e) => handlePropertyChange('value', e.target.value)}
                                label="value를 입력하세요"
                                />
                            </div>
                        )}
                    </li>
                </ul>
                <Input.Text {...inputTextProps} />
                <SourceCodeViewer code={code} />
            </div>
        </>
    )
}

export default InputTextPlayground;