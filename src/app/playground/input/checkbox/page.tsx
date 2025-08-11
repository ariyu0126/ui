'use client';

import { useState } from 'react';
import type React from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { SourceCodeViewer, Checkbox, Typography } from '@/components';

const InputCheckBoxPlayground = () => {
  const checkboxOptions = [
    {
      label: '체크박스 1',
      value: 'checkbox1',
    },
    {
      label: '체크박스 2',
      value: 'checkbox2',
    },
    {
      label: '체크박스 3',
      value: 'checkbox3',
    },
  ];

  const [checked, setChecked] = useState(true);
  const [checkedValues, setCheckedValues] = useState<string[]>(['checkbox1']);

  // 단일 Checkbox 속성
  type LocalCheckboxProps = {
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    required?: boolean;
    color?: 'white' | 'dark' | 'point';
    label?: string;
    value?: string;
    checked?: boolean;
    defaultChecked?: boolean;
  };

  const [checkboxProps, setCheckboxProps] = useState<LocalCheckboxProps>({
    disabled: false,
    required: false,
    color: 'white',
    label: '',
    value: '',
  });

  // CheckboxGroup 속성
  type LocalCheckboxGroupProps = {
    options: { label: React.ReactNode; value: string }[];
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    groupDisabled?: boolean;
    required?: boolean;
    color?: 'white' | 'dark' | 'point';
    label?: string;
    direction?: 'row' | 'column';
    optionType?: 'default' | 'button';
    className?: string;
    defaultChecked?: string[];
  };

  const [checkboxGroupProps, setCheckboxGroupProps] = useState<LocalCheckboxGroupProps>({
    options: checkboxOptions,
    disabled: false,
    groupDisabled: false,
    required: false,
    color: 'white',
    label: '',
    direction: 'row',
    optionType: 'default',
    className: '',
  });

  const handlePropertyChange = <K extends keyof LocalCheckboxProps>(property: K, value: LocalCheckboxProps[K]) => {
    setCheckboxProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  const handleGroupPropChange = <K extends keyof LocalCheckboxGroupProps>(key: K, value: LocalCheckboxGroupProps[K]) => {
    setCheckboxGroupProps(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  // 단일 Checkbox 토글 (controlled)
  const handleSingleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  // code
  const sizeOption = ['sm', 'md', 'lg'] as const;
  type SizeOption = typeof sizeOption[number];
  const colorOption = ['white', 'dark', 'point'] as const;
  type ColorOption = typeof colorOption[number];
  const { size, defaultChecked, disabled, required, color, label, value } = checkboxProps;
  const checkboxCode = generateCode('Checkbox', {
    size,
    defaultChecked,
    disabled,
    required,
    color,
    label,
    value,
  });

  const { size:groupSize, defaultChecked:groupChecked, disabled:groupDisabled, required:groupRequired, color:groupColor, direction:groupDirection, optionType:groupOptionType } = checkboxGroupProps;
  const checkboxGroupCode = generateCode('Checkbox.Group', {
    size:groupSize,
    defaultChecked:groupChecked,
    disabled:groupDisabled,
    required:groupRequired,
    color:groupColor,
    direction:groupDirection,
    optionType:groupOptionType,
  });

  return (
    <div className="playground">
      <Typography.Title>Checkbox</Typography.Title>
      <Typography.Title level={2}>1. Checkbox</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Checkbox 속성</Typography.Title>        
        <Typography.Text>- size: sm, md, lg</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox size="sm" defaultChecked={true} label="체크박스" />
          <Checkbox size="md" defaultChecked={true} label="체크박스" />
          <Checkbox size="lg" defaultChecked={true} label="체크박스" />
        </div>
        
        <Typography.Text>- defaultChecked: true, false</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox defaultChecked={true} onChange={handleSingleCheckboxChange} label="체크박스" />
          <Checkbox defaultChecked={false} onChange={handleSingleCheckboxChange} label="체크박스" />
        </div>
        
        <Typography.Text>- disabled: true, false</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox disabled={true} defaultChecked={true} label="체크박스" />
          <Checkbox disabled={false} defaultChecked={true} label="체크박스" />
        </div>
        
        <Typography.Text>- required: true, false</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox required={true} defaultChecked={false} label="체크박스" />
        </div>
        
        <Typography.Text>- color: white, dark, point</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox defaultChecked={true} label="체크박스" />
          <Checkbox defaultChecked={true} color="dark" label="체크박스" />
          <Checkbox defaultChecked={true} color="point" label="체크박스" />
        </div>
      </div>
      <div className="playground__inner">
        <Typography.Title level={3}>1-2. Checkbox 예시</Typography.Title>
        <ul>
          <li>
            - size :{' '}
            <div className="button__group">
              {sizeOption.map((val, idx) => (
                <button
                  className={`button__tag ${checkboxProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('size', val as SizeOption)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - checked : {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxProps.checked === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('checked', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${checkboxProps.checked === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('checked', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - disabled: {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxProps.disabled === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${checkboxProps.disabled === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - required: {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxProps.required === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('required', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${checkboxProps.required === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('required', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - color: {' '}
            <div className="button__group">
              {colorOption.map((val, idx) => (
                  <button
                    className={`button__tag ${checkboxProps.color === val ? 'is-active' : ''}`}
                    key={idx}
                    onClick={() => handlePropertyChange('color', val as ColorOption)}
                  >
                    {val}
                  </button>
               ))}
            </div>
          </li>
          <li>
            - value :{' '}
            <input
              value={checkboxProps.value || ''}
              onChange={(e) => handlePropertyChange('value', e.target.value)}
              placeholder="value를 입력해주세요"
            />
          </li>
          <li>
            - label :{' '}
            <input
              value={checkboxProps.label || ''}
              onChange={(e) => handlePropertyChange('label', e.target.value)}
              placeholder="label을 입력해주세요"
            />
          </li>
        </ul>
        <Checkbox {...checkboxProps} />
        <SourceCodeViewer code={checkboxCode} />
      </div>

      <Typography.Title level={2}>2. Checkbox Group</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Checkbox Group 속성</Typography.Title>
        <Typography.Text>- checked: value값 입력</Typography.Text>
        <Typography.Text>외부에서 value를 넘길때는 onChange 속성을 사용해야 합니다.</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} defaultChecked={['checkbox1', 'checkbox3']} />
        </div>

        <Typography.Text>- disabled : true, false</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} groupDisabled={true} />
        </div>

        <Typography.Text>- required : true, false</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} required={true} />
        </div>

        <Typography.Text>- direction : column, row</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} direction="row" />
        </div>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} direction="column" />
        </div>

        <Typography.Text>- optionType : default, button</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} optionType="default" />
        </div>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} optionType="button" />
        </div>

        <Typography.Text>- color : white, dark, point</Typography.Text>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} color="white" defaultChecked={['checkbox1']} />
          <Checkbox.Group options={checkboxOptions} color="dark" defaultChecked={['checkbox2']} />
          <Checkbox.Group options={checkboxOptions} color="point" defaultChecked={['checkbox3']} />
        </div>
        <div className="playground__inner-box">
          <Checkbox.Group options={checkboxOptions} optionType="button" color="white" defaultChecked={['checkbox1']} />
          <Checkbox.Group options={checkboxOptions} optionType="button" color="dark" defaultChecked={['checkbox2']} />
          <Checkbox.Group options={checkboxOptions} optionType="button" color="point" defaultChecked={['checkbox3']} />
        </div>
      </div>

      <div className="playground__inner">
        <Typography.Title level={3}>1-2. Checkbox Group 예시</Typography.Title>
        <ul>
          <li>
            - disabled: {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxGroupProps.groupDisabled === true ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('groupDisabled', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${checkboxGroupProps.groupDisabled === false ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('groupDisabled', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - required: {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxGroupProps.required === true ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('required', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${checkboxGroupProps.required === false ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('required', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - direction: {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxGroupProps.direction === 'row' ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('direction', 'row')}
              >
                row
              </button>
              <button
                className={`button__tag ${checkboxGroupProps.direction === 'column' ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('direction', 'column')}
              >
                column
              </button>
            </div>
          </li>
          <li>
            - optionType: {' '}
            <div className="button__group">
              <button
                className={`button__tag ${checkboxGroupProps.optionType === 'default' ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('optionType', 'default')}
              >
                default
              </button>
              <button
                className={`button__tag ${checkboxGroupProps.optionType === 'button' ? 'is-active' : ''}`}
                onClick={() => handleGroupPropChange('optionType', 'button')}
              >
                button
              </button>
            </div>
          </li>
          <li>
            - color: {' '}
            <div className="button__group">
              {colorOption.map((val, idx) => (
                  <button
                    className={`button__tag ${checkboxGroupProps.color === val ? 'is-active' : ''}`}
                    key={idx}
                    onClick={() => handleGroupPropChange('color', val as ColorOption)}
                  >
                    {val}
                  </button>
               ))}
            </div>
          </li>
        </ul>
        <Checkbox.Group
          {...checkboxGroupProps}
        />
        <SourceCodeViewer code={checkboxGroupCode} />
      </div>
    </div>
  )
}

export default InputCheckBoxPlayground;