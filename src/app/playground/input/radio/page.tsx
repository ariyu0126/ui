'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { Radio, SourceCodeViewer, Typography } from '@/components';

const InputRadioPlayground = () => {
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

  type SingleRadioProps = {
    name: string;
    label: string;
    value: string;
    size: 'sm' | 'md' | 'lg';
    checked: boolean;
    disabled: boolean;
    required: boolean;
    className: string;
    color: 'white' | 'dark' | 'point';
  };
  const [radioProps, setRadioProps] = useState<SingleRadioProps>({
    name: '',
    label: '',
    value: '',
    size: 'md',
    checked: false,
    disabled: false,
    required: false,
    className: '',
    color: 'white',
  });

  type RadioGroupState = {
    checked: string;
    options: { label: string; value: string }[];
    name: string;
    direction: 'row' | 'column';
    optionType: 'default' | 'button';
    disabled: boolean;
    required: boolean;
    color: 'white' | 'dark' | 'point';
    size: 'sm' | 'md' | 'lg';
  };
  const [radioGroupProps, setRadioGroupProps] = useState<RadioGroupState>({
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
  const handlePropertyChange = (property: string, value: any) => {
    setRadioProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  const handleRadioChange = (e: any) => {
    handleGroupPropertyChange('checked', e.target.value);
  };

  // code
  const sizeOption = ['sm', 'md', 'lg'];
  const colorOption = ['white', 'dark', 'point'];
  const { name, label, value, size, checked, disabled, required, className, color } = radioProps;
  const radioCode = generateCode('Radio', {
    name,
    label,
    value,
    size,
    checked,
    disabled,
    required,
    className,
    color
  });

  // group code
  const handleGroupPropertyChange = (property: string, value: any) => {
    setRadioGroupProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };
  const groupSizes = ['sm', 'md', 'lg'];
  const groupDirection = ['row', 'column'];
  const groupOptionType = ['default', 'button'];
  const groupColors = ['white', 'dark', 'point'];
  const { checked:groupChecked, options, name:groupName, direction, optionType, disabled:groupDisabled, required:groupRequired, color:groupColor, size:groupSize } = radioGroupProps;
  const radioGroupCode = generateCode('Radio.Group', {
    checked: groupChecked,
    options,
    name: groupName,
    direction,
    optionType,
    disabled: groupDisabled,
    required: groupRequired,
    color: groupColor,
    size: groupSize
  });
  return (
    <div className="playground">
      <Typography.Title>Radio</Typography.Title>
      <Typography.Title level={2}>1. Radio</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Radio 속성</Typography.Title>
        <Typography.Text>- size: sm, md, lg</Typography.Text>
        <div className="playground__inner-box">
          <Radio size="sm" checked={true} label="라디오" />
          <Radio size="md" checked={true} label="라디오" />
          <Radio size="lg" checked={true} label="라디오" />
        </div>

        <Typography.Text>- checked: true, false</Typography.Text>
        <div className="playground__inner-box">
          <Radio checked={true} label="라디오" />
        </div>

        <Typography.Text>- disabled : true, false</Typography.Text>
        <div className="playground__inner-box">
          <Radio disabled={true} label="라디오" />
        </div>

        <Typography.Text>- required : true, false</Typography.Text>
        <div className="playground__inner-box">
          <Radio required={true} label="라디오" />
        </div>

        <Typography.Text>- color : white, dark, point</Typography.Text>
        <div className="playground__inner-box">
          <Radio color="white" label="white" checked={true} />
          <Radio color="dark" label="dark" checked={true} />
          <Radio color="point" label="point" checked={true} />
        </div>
      </div>
      <div className="playground__inner">
        <Typography.Title level={3}>1-2. Radio 예시</Typography.Title>
        <ul className="playground__inner-list">
          <li>
            - checked :{' '}
            <div className="button__group">
              <button
                className={`button__tag ${radioProps.checked === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('checked', !radioProps.checked)}
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
        <div className="playground__inner-box">
          <Radio {...radioProps} onChange={(e) => handlePropertyChange('checked', e.target.checked)} />
        </div>
        <SourceCodeViewer code={radioCode} />
      </div>
      <Typography.Title level={2}>2. Radio group</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>2-1. Radio Group 속성</Typography.Title>
        <Typography.Text>- checked: value값 입력</Typography.Text>
        <Typography.Text>외부에서 value를 넘길때는 onChange 속성을 사용해야 합니다.</Typography.Text>
        <div className="playground__inner-box"><Radio.Group options={radioOptions} checked="radio1" name="radio-group3" onChange={handleRadioChange} /></div>

        <Typography.Text>- disabled : true, false</Typography.Text>
        <div className="playground__inner-box"><Radio.Group options={radioOptions} name="radio-group4" disabled={true} /></div>

        <Typography.Text>- required : true, false</Typography.Text>
        <div className="playground__inner-box"><Radio.Group options={radioOptions} name="radio-group4" required={true} /></div>

        <Typography.Text>- direction : column, row</Typography.Text>
        <div className="playground__inner-box">
          <Radio.Group options={radioOptions} checked="radio1" name="radio-group5" direction="row" />
        </div>
        <div className="playground__inner-box">
          <Radio.Group
            options={radioOptions}
            checked="radio1"
            name="radio-group6"
            direction="column"
          />
        </div>

        <Typography.Text>- optionType : default, button</Typography.Text>
        <div className="playground__inner-box">
          <Radio.Group
            options={radioOptions}
            checked="radio1"
            name="radio-group7"
            optionType="default"
          />
        </div>
        <div className="playground__inner-box">
          <Radio.Group
            options={radioOptions}
            checked="radio1"
            name="radio-group8"
            optionType="button"
          />
        </div>

        <Typography.Text>- color : white, dark, point</Typography.Text>
        <div className="playground__inner-box">
          <Radio.Group options={radioOptions} checked="radio1" name="radio-group9" color="white" />
          <Radio.Group options={radioOptions} checked="radio2" name="radio-group10" color="dark" />
          <Radio.Group options={radioOptions} checked="radio3" name="radio-group11" color="point" />
        </div>
        <div className="playground__inner-box">
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
        </div>

        <Typography.Text>- size : sm, md, lg</Typography.Text>
        <div className="playground__inner-box">
          <Radio.Group options={radioOptions} checked="radio1" name="radio-group15" size="sm" />
          <Radio.Group options={radioOptions} checked="radio2" name="radio-group16" size="md" />
          <Radio.Group options={radioOptions} checked="radio3" name="radio-group17" size="lg" />
        </div>
        <div className="playground__inner-box">
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
        </div>

        <Typography.Title level={3}>2-2. Radio Group 예시</Typography.Title>
        <ul className="playground__inner-list">
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
              {groupColors.map((val, idx) => (
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
              {groupSizes.map((val, idx) => (
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
        <div className="playground__inner-box"><Radio.Group {...radioGroupProps} onChange={(e) => handleGroupPropertyChange('checked', e.target.value)} /></div>
        <SourceCodeViewer code={radioGroupCode} />
      </div>
    </div>
  );
};

export default InputRadioPlayground;
