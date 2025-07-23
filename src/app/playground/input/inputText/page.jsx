'use client';

import { useState } from 'react';
import InputText from "@/components/inputText";
import Button from "@/components/Button";
import SourceCodeViewer from "@/components/SourceCodeViewer";
import '@/styles/pages/playground.scss';

export default function InputTextPlayground() {
    const handleValidate = () => {
        console.log(validateRef);
    }

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
    const {size, type, error, hint, required, disabled, readonly,placeholder,label,value} = inputTextProps;
    const code = `
  <InputText
    size="${size}"
    type="${type}"
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
            <div className="playground">
                <h3>1-1. Input text 속성</h3>
                <ul>
                    <li>
                        <p>- size : md, lg, full</p>
                        <InputText size="md" /><br />
                        <InputText size="lg" /><br />
                        <InputText size="full" />
                    </li>
                    <li>
                        <p>- type : text, password, number, email, tel</p>
                        <InputText /><br />
                        <InputText type="password" /><br />
                        <InputText type="number" /><br />
                        <InputText type="email" /><br />
                        <InputText type="tel" />
                    </li>
                    <li>
                        <p>- 속성 : label, placeholder</p>
                        <InputText label="라벨입니다" />
                        <InputText placeholder="플레이스홀더입니다" />
                    </li>
                </ul>
                <h3>1-2. Input text 설정</h3>
                <ul>
                    <li>
                        <p>- basic</p>
                        <InputText />
                    </li>
                    <li>
                        <p>- required</p>
                        <InputText required label="이름" />
                    </li>
                    <li>
                        <p>- disabled</p>
                        <InputText disabled value="비활성화" />
                    </li>
                    <li>
                        <p>- readonly</p>
                        <InputText readonly value="읽기만 가능" />
                    </li>
                    {/* <li>
                        <p>- error</p>
                        <InputText error="에러메시지다" />
                    </li> */}
                    <li>
                        <p>- hint</p>
                        <InputText hint="힌트다" />
                    </li>
                </ul>
                {/* <h3>1-3. Validate 테스트</h3>
                <ul>
                    <li>
                        <p>- validateRef</p>
                        <InputText label="이름" />
                        <InputText label="전화번호" type="tel" />
                        <InputText label="주소" />
                        <Button onClick={handleValidate} children="Validate" />
                    </li>
                </ul> */}
                <h3>2-1. Input text 예시</h3>
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
                            type="text"
                            value={inputTextProps.error || ''}
                            onChange={(e) => handlePropertyChange('error', e.target.value)}
                            placeholder="에러 메시지를 입력하세요"
                        />
                    </li>
                    <li>
                        - hint :{' '}
                        <input
                            type="text"
                            value={inputTextProps.hint || ''}
                            onChange={(e) => handlePropertyChange('hint', e.target.value)}
                            placeholder="힌트를 입력하세요"
                        />
                    </li>
                    <li>
                        - placeholder :{' '}
                        <input
                            type="text"
                            value={inputTextProps.placeholder || ''}
                            onChange={(e) => handlePropertyChange('placeholder', e.target.value)}
                            placeholder="플레이스홀더를 입력하세요"
                        />
                    </li>
                    <li>
                        - label :{' '}
                        <input
                            type="text"
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
                    </li>
                    <li>- readonly : 
                        <div className="button__group">
                        <button className={`button__tag ${inputTextProps.readonly === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('readonly', true)}>true</button>
                        <button className={`button__tag ${inputTextProps.readonly === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('readonly', false)}>false</button>
                        </div>
                    </li>
                    {(inputTextProps.disabled === true || inputTextProps.readonly === true) && (
                        <li>
                            - value :{' '}
                            <input
                            type="text"
                            value={inputTextProps.value || ''}
                            onChange={(e) => handlePropertyChange('value', e.target.value)}
                            label="value를 입력하세요"
                            />
                        </li>
                    )}
                </ul>
                <InputText {...inputTextProps} />
            </div>
            <SourceCodeViewer code={code} />
        </>
    )
}