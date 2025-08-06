'use client';

import { useState } from 'react';
import { Radio, SourceCodeViewer, Typography } from '@/components';

const InputRadioPlayground = () => {
  const [radioValue, setRadioValue] = useState('');

  // radio group
  const radioOptions = [
    {
      label: '라디오 1',
      value: 'radio1',
    },
    {
      label: '라디오 2',
      value: 'radio2',
    },
    {
      label: '라디오 3',
      value: 'radio3',
    },
  ];

  const [radioProps, setRadioProps] = useState({
    name: '',
    label: '',
    value: '',
    size: 'md',
    checked: '',
    disabled: false,
    required: false,
    className: '',
    color: 'white',
  });

  const [radioGroupProps, setRadioGroupProps] = useState({
    checked: '',
    options: radioOptions,
    name: 'radio-group',
    direction: 'row',
    optionType: 'default',
    disabled: false,
    required: false,
    color: 'white',
    size: 'md',
  });

  // button props
  const handlePropertyChange = (property, value) => {
    setRadioProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  // code
  const sizeOption = ['sm', 'md', 'lg'];
  const colorOption = ['white', 'dark', 'point'];
  const { name, label, value, size, checked, disabled, required, className, color } = radioProps;
  const code = `
    <Radio
      name="${name}"
      label="${label}"
      value="${value}"
      size="${size}"
      color="${color}"
      checked="${checked}"
      disabled=${disabled ? 'true' : 'false'}
      required=${required ? 'true' : 'false'}
      className="${className}"
    />
  `;

  // group code
  const handleGroupPropertyChange = (property, value) => {
    setRadioGroupProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };
  const groupSize = ['sm', 'md', 'lg'];
  const groupDirection = ['row', 'column'];
  const groupOptionType = ['default', 'button'];
  const groupColor = ['white', 'dark', 'point'];
  const groupCode = `
        <Radio.Group
            options={radioOptions}
            checked="${radioGroupProps.checked}"
            name="radio-group"
            direction="${radioGroupProps.direction}"
            optionType="${radioGroupProps.optionType}"
            disabled=${radioGroupProps.disabled ? 'true' : 'false'}
            required=${radioGroupProps.required ? 'true' : 'false'}
            color="${radioGroupProps.color}"
            size="${radioGroupProps.size}"
        />
    `;
  return (
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
            <Typography.Text>- disabled : true, false</Typography.Text>
            <Radio disabled={true} label="라디오" />
          </li>
          <li>
            <Typography.Text>- required : true, false</Typography.Text>
            <Radio required={true} label="라디오" />
          </li>
          <li>
            <Typography.Text>- color : white, dark, point</Typography.Text>
            <Radio color="white" label="white" checked={true} />
            <Radio color="dark" label="dark" checked={true} />
            <Radio color="point" label="point" checked={true} />
          </li>
        </ul>
        <Typography.Title level={3}>1-2. Input Radio 예시</Typography.Title>
        <ul>
          <li>
            - checked :{' '}
            <div className="button__group">
              <button
                className={`button__tag ${radioProps.checked === 'radio1' ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('checked', true)}
              >
                radio1
              </button>
            </div>
          </li>
          <li>
            - size :{' '}
            <div className="button__group">
              {sizeOption.map((val, idx) => (
                <button
                  className={`button__tag ${radioProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('size', val)}
                >
                  {val}
                </button>
              ))}
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
          <li>
            - disabled :
            <div className="button__group">
              <button
                className={`button__tag ${radioProps.disabled === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${radioProps.disabled === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - required :
            <div className="button__group">
              <button
                className={`button__tag ${radioProps.required === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('required', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${radioProps.required === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('required', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - color :{' '}
            <div className="button__group">
              {colorOption.map((val, idx) => (
                <button
                  className={`button__tag ${radioProps.color === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('color', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
        </ul>
        <Radio {...radioProps} onChange={(e) => handlePropertyChange('checked', e.target.checked)} />
        <SourceCodeViewer code={code} />
      </div>
      <Typography.Title level={2}>2. Input Radio group</Typography.Title>
      <div className="playground__inner">
        {/* <Typography.Title level={3}>2-1. Input Radio Group 사용방식</Typography.Title>
                <Typography.Text>- options: 배열 형태로 사용</Typography.Text>
                <Radio.Group options={radioOptions} checked="radio1" name="radio-group1" />
                <br />
                <Typography.Text>- children: 컴포넌트 형태로 사용</Typography.Text>
                <Radio.Group checked="radio1" >
                    <Radio label="라디오 1" value="radio1" name="radio-group2" />
                    <Radio label="라디오 2" value="radio2" name="radio-group2" />
                    <Radio label="라디오 3" value="radio3" name="radio-group2" />
                </Radio.Group> */}
        <Typography.Title level={3}>2-1. Input Radio Group 속성</Typography.Title>
        <Typography.Text>- checked: value값 입력</Typography.Text>
        <Typography.Text>외부에서 value를 넘길때는 onChange 속성을 사용해야 합니다.</Typography.Text>
        <Radio.Group options={radioOptions} checked="radio1" name="radio-group3" onChange={handleRadioChange} />
        <Typography.Text>- required : true, false</Typography.Text>
        <Radio.Group options={radioOptions} name="radio-group4" required={true} />
        <Typography.Text>- direction : column, row</Typography.Text>
        <Radio.Group options={radioOptions} checked="radio1" name="radio-group5" direction="row" />
        <Radio.Group
          options={radioOptions}
          checked="radio1"
          name="radio-group6"
          direction="column"
        />
        <Typography.Text>- optionType : default, button</Typography.Text>
        <Radio.Group
          options={radioOptions}
          checked="radio1"
          name="radio-group7"
          optionType="default"
        />
        <Radio.Group
          options={radioOptions}
          checked="radio1"
          name="radio-group8"
          optionType="button"
        />
        <Typography.Text>- color : white, dark, point</Typography.Text>
        <Radio.Group options={radioOptions} checked="radio1" name="radio-group9" color="white" />
        <Radio.Group options={radioOptions} checked="radio2" name="radio-group10" color="dark" />
        <Radio.Group options={radioOptions} checked="radio3" name="radio-group11" color="point" />
        <Radio.Group
          options={radioOptions}
          checked="radio1"
          name="radio-group12"
          optionType="button"
          color="white"
        />
        <Radio.Group
          options={radioOptions}
          checked="radio2"
          name="radio-group13"
          optionType="button"
          color="dark"
        />
        <Radio.Group
          options={radioOptions}
          checked="radio3"
          name="radio-group14"
          optionType="button"
          color="point"
        />
        <Typography.Text>- size : sm, md, lg</Typography.Text>
        <Radio.Group options={radioOptions} checked="radio1" name="radio-group15" size="sm" />
        <Radio.Group options={radioOptions} checked="radio2" name="radio-group16" size="md" />
        <Radio.Group options={radioOptions} checked="radio3" name="radio-group17" size="lg" />
        <Radio.Group
          options={radioOptions}
          checked="radio1"
          name="radio-group18"
          optionType="button"
          size="sm"
        />
        <Radio.Group
          options={radioOptions}
          checked="radio2"
          name="radio-group19"
          optionType="button"
          size="md"
        />
        <Radio.Group
          options={radioOptions}
          checked="radio3"
          name="radio-group20"
          optionType="button"
          size="lg"
        />

        <Typography.Title level={3}>2-2. Input Radio Group 예시</Typography.Title>
        <ul>
          <li>
            - checked :
            <div className="button__group">
              {radioOptions.map((val, idx) => (
                <button
                  className={`button__tag ${radioGroupProps.checked === val.value ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleGroupPropertyChange('checked', val.value)}
                >
                  {val.value}
                </button>
              ))}
            </div>
          </li>
          <li>
            - disabled :
            <div className="button__group">
              <button
                className={`button__tag ${radioGroupProps.disabled === true ? 'is-active' : ''}`}
                onClick={() => handleGroupPropertyChange('disabled', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${radioGroupProps.disabled === false ? 'is-active' : ''}`}
                onClick={() => handleGroupPropertyChange('disabled', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - required :
            <div className="button__group">
              <button
                className={`button__tag ${radioGroupProps.required === true ? 'is-active' : ''}`}
                onClick={() => handleGroupPropertyChange('required', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${radioGroupProps.required === false ? 'is-active' : ''}`}
                onClick={() => handleGroupPropertyChange('required', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - direction :{' '}
            <div className="button__group">
              {groupDirection.map((val, idx) => (
                <button
                  className={`button__tag ${radioGroupProps.direction === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleGroupPropertyChange('direction', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - optionType :{' '}
            <div className="button__group">
              {groupOptionType.map((val, idx) => (
                <button
                  className={`button__tag ${radioGroupProps.optionType === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleGroupPropertyChange('optionType', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - color :{' '}
            <div className="button__group">
              {groupColor.map((val, idx) => (
                <button
                  className={`button__tag ${radioGroupProps.color === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleGroupPropertyChange('color', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - size :{' '}
            <div className="button__group">
              {groupSize.map((val, idx) => (
                <button
                  className={`button__tag ${radioGroupProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleGroupPropertyChange('size', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
        </ul>
        <Radio.Group {...radioGroupProps} onChange={(e) => handleGroupPropertyChange('checked', e.target.value)} />
        <SourceCodeViewer code={groupCode} />
      </div>
    </div>
  );
};

export default InputRadioPlayground;
