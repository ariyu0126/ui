'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { SourceCodeViewer, Selectbox, Typography } from '@/components';
import '@/styles/pages/playground.scss';

const SelectPage = () => {
  const options = [
    {
      value: 'select01',
      name: '셀렉트 1',
      disabled: false,
    },
    {
      value: 'select02',
      name: '셀렉트 2',
      disabled: true,
    },
    {
      value: 'select03',
      name: '셀렉트 30셀렉트 3셀렉트 3셀렉트 3셀렉트 3셀렉트 3셀렉트 3',
      disabled: false,
    },
    {
      value: 'select04',
      name: '셀렉트 4',
      disabled: false,
    },
    {
      value: 'select05',
      name: '셀렉트 5',
      disabled: false,
    },
    {
      value: 'select06',
      name: '셀렉트 6',
      disabled: false,
    }
  ]

  type LocalSelectProps = {
    options: { value: string; name: string; disabled?: boolean }[];
    size?: 'sm' | 'md' | 'lg';
    color?: 'white' | 'dark' | 'point';
    minWidth?: string;
    maxWidth?: string;
    disabledValues?: boolean;
    defaultSelected?: { value: string; };
    className?: string;
  };

  const [selectProps, setSelectProps] = useState<LocalSelectProps>({
    options: options,
    size: 'md',
    color: 'white',
    minWidth: '',
    maxWidth: '',
    disabledValues: false,
    defaultSelected: undefined,
    className: '',
  });

  const handlePropertyChange = <K extends keyof LocalSelectProps>(property: K, value: LocalSelectProps[K]) => {
    setSelectProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  const sizeOption = ['sm', 'md', 'lg'] as const;
  type SizeOption = typeof sizeOption[number];
  const colorOption = ['white', 'dark', 'point'] as const;
  type ColorOption = typeof colorOption[number];
  const { size, color, minWidth, maxWidth, disabledValues, defaultSelected } = selectProps;
  const selectCode = generateCode('Select', {
    size,
    color,
    minWidth,
    maxWidth,
    disabledValues,
    defaultSelected,
  });

  return (
    <div className="playground">
      <Typography.Title>Selectbox</Typography.Title>
      <Typography.Title level={2}>1. Selectbox 속성</Typography.Title>
      <div className="playground__inner">
        <Typography.Text>- size: sm, md, lg</Typography.Text>
        <div className="playground__inner-box">
          <Selectbox options={options} size="sm"/><br />
          <Selectbox options={options} size="md"/><br />
          <Selectbox options={options} size="lg"/>
        </div>
        <Typography.Text>- color: white, dark, point</Typography.Text>
        <div className="playground__inner-box">
          <Selectbox options={options} color="white"/><br />
          <Selectbox options={options} color="dark"/><br />
          <Selectbox options={options} color="point"/>
        </div>
        <Typography.Text>- minWidth, maxWidth</Typography.Text>
        <div className="playground__inner-box">
          <Typography.Text>minWidth : 100%</Typography.Text>
          <Selectbox options={options} minWidth="100%"/><br /><br />
          <Typography.Text>maxWidth : 100%</Typography.Text>
          <Selectbox options={options} maxWidth="100%"/><br /><br />
          <Typography.Text>minWidth : 200px, maxWidth: 300px</Typography.Text>
          <Selectbox options={options} minWidth="200px"maxWidth="300px"/>
        </div>
        <Typography.Text>- disabled: true, false</Typography.Text>
        <div className="playground__inner-box">
          <Selectbox options={options} disabledValues={true}/>
        </div>
        <Typography.Text>- defaultSelected</Typography.Text>
        <div className="playground__inner-box">
          <Selectbox options={options} defaultSelected={{value: 'select03'}} />
        </div>
      </div>

      <Typography.Title level={2}>1-2. Selectbox 예시</Typography.Title>
      <ul className="playground__inner-list">
        <li>
          - size:{' '}
          <div className="button__group">
            {sizeOption.map((val, idx) => (
              <button
                key={idx}
                className={`button__tag ${selectProps.size === val ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('size', val)}
              >
                {val}
              </button>
            ))}
          </div>
        </li>
        <li>
          - color:{' '}
          <div className="button__group">
            {colorOption.map((val, idx) => (
              <button
                key={idx}
                className={`button__tag ${selectProps.color === val ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('color', val)}
              >
                {val}
              </button>
            ))}
          </div>
        </li>
        <li>
          - minWidth / maxWidth:{' '}
          <div className="button__group">
            <input
              value={selectProps.minWidth || ''}
              onChange={(e) => handlePropertyChange('minWidth', e.target.value)}
              style={{width: '100px'}}
            />{' '}/{' '}
            <input
              value={selectProps.maxWidth || ''}
              onChange={(e) => handlePropertyChange('maxWidth', e.target.value)}
              style={{width: '100px'}}
            />
          </div>
        </li>
        <li>
          - disabledValues:{' '}
          <div className="button__group">
            <button
              className={`button__tag ${selectProps.disabledValues === true ? 'is-active' : ''}`}
              onClick={() => handlePropertyChange('disabledValues', true)}
            >
              true
            </button>
            <button
              className={`button__tag ${selectProps.disabledValues === false ? 'is-active' : ''}`}
              onClick={() => handlePropertyChange('disabledValues', false)}
            >
              false
            </button>
          </div>
        </li>
        <li>
          - defaultSelected:{' '}
          <div className="button__group">
            {options.map((val, idx) => (
              <button
                key={idx}
                className={`button__tag ${selectProps.defaultSelected === val ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('defaultSelected', val)}
                disabled={val.disabled}
              >
                {val.name}
              </button>
            ))}
          </div>
        </li>
      </ul>
      <div className="playground__inner-box">
        <Selectbox {...selectProps} />
      </div>
      <SourceCodeViewer code={selectCode} />
    </div>
  );
};

export default SelectPage;