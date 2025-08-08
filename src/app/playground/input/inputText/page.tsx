'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { Input, Button, SourceCodeViewer, Typography } from '@/components';

const InputTextPlayground = () => {
  const [errorTextProps, setErrorTextProps] = useState({
    size: 'md',
    type: 'text',
    error: null,
    hint: null,
    required: false,
    disabled: false,
    readOnly: false,
    placeholder: '',
    label: '',
    className: '',
    validate: null,
    min: '',
    max: '',
    errorBlur: false,
    errorTouched: false,
  });

  const [inputTextProps, setInputTextProps] = useState({
    size: 'md',
    type: 'text',
    error: null,
    hint: null,
    required: false,
    disabled: false,
    readOnly: false,
    placeholder: '',
    label: '',
    className: '',
    validate: null,
    min: '',
    max: '',
    errorBlur: false,
    errorTouched: false,
  });

  // button props
  const handlePropertyChange = (property, value) => {
    setInputTextProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };
  const handleReset = () => {
    handlePropertyChange('value', '');
  };
  const sizeOption = ['md', 'lg', 'full'];
  const typeOption = ['text', 'password', 'number', 'email', 'tel'];

  // code
  const {
    size,
    error,
    hint,
    required,
    disabled,
    readOnly,
    placeholder,
    label,
    value,
    min,
    max,
    errorBlur,
    errorTouched,
  } = inputTextProps;
  const typeComponent = {
    text: 'Text',
    password: 'Password',
    number: 'Number',
    email: 'Email',
    tel: 'Tel',
  };
  const inputType = typeComponent[inputTextProps.type || 'text'];
  const inputCode = generateCode(`Input.${inputType}`, {
    size,
    error,
    hint,
    required,
    disabled,
    readOnly,
    placeholder,
    label,
    value,
    min,
    max,
    errorBlur,
    errorTouched,
  });
  return (
    <div className="playground">
      <Typography.Title>Input text</Typography.Title>
      <Typography.Title level={2}>1. Input text 속성</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>- size</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>md</Typography.Text>
          <Input.Text size="md" />
          <br />
          <Typography.Text>lg</Typography.Text>
          <Input.Text size="lg" />
          <br />
          <Typography.Text>full</Typography.Text>
          <Input.Text size="full" />
        </div>
            
        <Typography.Title level={3}>- type</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>text</Typography.Text>
          <Input.Text />
          <br />
          <Typography.Text>password</Typography.Text>
          <Input.Password type="password" />
          <br />
          <Typography.Text>number</Typography.Text>
          <Input.Number type="number" />
          <br />
          <Typography.Text>email</Typography.Text>
          <Input.Email type="email" placeholder="example@example.com" />
          <br />
          <Typography.Text>tel</Typography.Text>
          <Input.Tel type="tel" placeholder="010-1234-5678" />
        </div>

        <Typography.Title level={3}>- 속성</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>label</Typography.Text>
          <Input.Text label="라벨입니다" />
          <Typography.Text>placeholder</Typography.Text>
          <Input.Text placeholder="플레이스홀더입니다" />
        </div>
      </div>

      <Typography.Title level={2}>2. Input text 설정</Typography.Title>
      <div className="playground__inner">
        <Typography.Text>- basic</Typography.Text>
        <div className="playground__inner-box"><Input.Text /></div>
            
        <Typography.Text>- required</Typography.Text>
        <div className="playground__inner-box"><Input.Text required label="이름" /></div>

        <Typography.Text>- disabled</Typography.Text>
        <div className="playground__inner-box"><Input.Text disabled={true} value="비활성화" /></div>

        <Typography.Text>- readOnly</Typography.Text>
        <div className="playground__inner-box"><Input.Text readOnly value="읽기만 가능" /></div>
        
        <Typography.Text>- errorBlur=true : blur할때 error 메시지 표시</Typography.Text>
        <div className="playground__inner-box"><Input.Text error="에러닷" errorBlur /></div>
        
        <Typography.Text>- errorBlur=false : click할때 error 메시지 표시</Typography.Text>
        <div className="playground__inner-box">
          <Input.Text {...errorTextProps} />
          <Button
            onClick={() => {
              setErrorTextProps((prevProps) => ({
                ...prevProps,
                error: '에러닷',
                errorBlur: true,
                errorTouched: true,
              }));
            }}
          >
            click
          </Button>
        </div>
        
        <Typography.Text>- hint</Typography.Text>
        <div className="playground__inner-box"><Input.Text hint="힌트다" /></div>

        <Typography.Text>- min/max (min:3, max: 5, 숫자)</Typography.Text>
        <div className="playground__inner-box"><Input.Number min="3" max="5" /></div>   
      </div>

      <Typography.Title level={2}>3. Input text 예시</Typography.Title>
      <div className="playground__inner">
        <ul>
          <li>
            - size :{' '}
            <div className="button__group">
              {sizeOption.map((val, idx) => (
                <button
                  className={`button__tag ${inputTextProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('size', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - type :{' '}
            <div className="button__group">
              {typeOption.map((val, idx) => (
                <button
                  className={`button__tag ${inputTextProps.type === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('type', val)}
                >
                  {val}
                </button>
              ))}
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
            - required :
            <div className="button__group">
              <button
                className={`button__tag ${inputTextProps.required === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('required', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${inputTextProps.required === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('required', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - disabled :
            <div className="button__group">
              <button
                className={`button__tag ${inputTextProps.disabled === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${inputTextProps.disabled === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', false)}
              >
                false
              </button>
            </div>
            {inputTextProps.disabled === true && (
              <div>
                <br />- value :{' '}
                <input
                  value={inputTextProps.value || ''}
                  onChange={(e) => handlePropertyChange('value', e.target.value)}
                  label="value를 입력하세요"
                />
              </div>
            )}
          </li>
          <li>
            - readOnly :
            <div className="button__group">
              <button
                className={`button__tag ${inputTextProps.readOnly === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('readOnly', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${inputTextProps.readOnly === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('readOnly', false)}
              >
                false
              </button>
            </div>
            {inputTextProps.readOnly === true && (
              <div>
                <br />- value :{' '}
                <input
                  value={inputTextProps.value || ''}
                  onChange={(e) => handlePropertyChange('value', e.target.value)}
                  label="value를 입력하세요"
                />
              </div>
            )}
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
          <li>
            - min :{' '}
            <input
              value={inputTextProps.min || ''}
              onChange={(e) => handlePropertyChange('min', e.target.value)}
            />
          </li>
          <li>
            - max :{' '}
            <input
              value={inputTextProps.max || ''}
              onChange={(e) => handlePropertyChange('max', e.target.value)}
            />
          </li>
        </ul>
        {/* <pre>{JSON.stringify(inputTextProps)}</pre> */}
        <Input.Text
          {...inputTextProps}
          onChange={(e) => handlePropertyChange('value', e?.target?.value ?? e)}
          onReset={handleReset}
        />
        <SourceCodeViewer code={inputCode} />
      </div>
    </div>
  );
};

export default InputTextPlayground;
