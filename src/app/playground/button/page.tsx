'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { Button, SourceCodeViewer, Typography } from '@/components';
import '@/styles/pages/playground.scss';

const ButtonPlayground = () => {
  const [buttonProps, setButtonProps] = useState({
    size: 'md',
    icon: null,
    align: null,
    color: 'white',
    style: 'fill',
    disabled: false,
    children: '버튼',
  });

  // button props
  const handlePropertyChange = (property, value) => {
    const parsedValue = value === 'true' ? true : value === 'false' ? false : value;
    setButtonProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  const sizeOption = ['sm', 'md', 'lg', 'full'];
  const iconOption = ['search', 'new', 'down', 'null'];
  const alignOption = ['left', 'right'];
  const colorOption = ['white', 'dark', 'point'];
  const styleOption = ['fill', 'solid'];

  // button group props
  const [buttonGroupProps, setButtonGroupProps] = useState({
    alignGroup: 'left',
  });
  const handleAlignChange = (value) => {
    setButtonGroupProps(() => ({
      alignGroup: value,
    }));
  };
  const alignGroupOption = ['left', 'center', 'right', 'down', 'full'];

  // code
  const { size, color, style, icon, align, disabled, children } = buttonProps;
  const buttonCode = generateCode('Button', {
    size,
    color,
    style,
    icon,
    align,
    disabled,
  }, children);
  const buttonGroupCode = `
  <div className="button__group button__group-${buttonGroupProps.alignGroup}">
      ${buttonCode}${buttonCode}
  </div>
  `;

  return (
    <div className="playground">
      <Typography.Title>Button</Typography.Title>
      <Typography.Title level={2}>1. Button</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Button 속성</Typography.Title>
        <ul>
          <li>
            <Typography.Text>- size : sm, md, lg, full</Typography.Text>
            <Button size="sm">sm</Button>
            <Button size="md">md</Button>
            <Button size="lg">lg</Button>
            <Button size="full">full</Button>
          </li>
          <li>
            <Typography.Text>- icon : search, new, down, null</Typography.Text>
            <div className="button__group">
              <Button icon="search">search</Button>
              <Button icon="new">new</Button>
              <Button icon="down">down</Button>
            </div>
          </li>
          <li>
            <Typography.Text>- align : left, right</Typography.Text>
            <div className="button__group">
              <Button icon="search" align="left">
                left
              </Button>
              <Button icon="search" align="right">
                right
              </Button>
            </div>
          </li>
          <li>
            <Typography.Text>- color : white, dark, point</Typography.Text>
            <div className="button__group">
              <Button color="white">white</Button>
              <Button color="dark">dark</Button>
              <Button color="point">point</Button>
            </div>
          </li>
          <li>
            <Typography.Text>- disabled : true, false</Typography.Text>
            <Button disabled={true}>disabled</Button>
          </li>
          <li>
            <Typography.Text>- style : fill, solid</Typography.Text>
            <div className="button__group">
              <Button color="dark" style="fill">
                fill
              </Button>
              <Button color="dark" style="solid">
                solid
              </Button>
            </div>
          </li>
        </ul>
        <Typography.Title level={3}>1-2. Button 예시</Typography.Title>
        <ul>
          <li>
            - size :{' '}
            <div className="button__group">
              {sizeOption.map((val, idx) => (
                <button
                  className={`button__tag ${buttonProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('size', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - icon :{' '}
            <div className="button__group">
              {iconOption.map((val, idx) => (
                <button
                  className={`button__tag ${buttonProps.icon === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('icon', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - align :{' '}
            <div className="button__group">
              {alignOption.map((val, idx) => (
                <button
                  className={`button__tag ${buttonProps.align === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('align', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - color :{' '}
            <div className="button__group">
              {colorOption.map((val, idx) => (
                <button
                  className={`button__tag ${buttonProps.color === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('color', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - disabled :
            <div className="button__group">
              <button
                className={`button__tag ${buttonProps.disabled === true ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${buttonProps.disabled === false ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('disabled', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - style:{' '}
            <div className="button__group">
              {styleOption.map((val, idx) => (
                <button
                  className={`button__tag ${buttonProps.style === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('style', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
        </ul>
        <Button {...buttonProps} />
        <SourceCodeViewer code={buttonCode} />
      </div>
      <Typography.Title level={2}>2. Button group</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>2-1. Button group 속성</Typography.Title>
        <ul>
          <li>
            - align group : left, center, right, down, full
            <br />
            <Button.Group alignGroup="left">
              <Button {...buttonProps} />
              <Button {...buttonProps} />
            </Button.Group>
            <Button.Group alignGroup="center">
              <Button {...buttonProps} />
              <Button {...buttonProps} />
            </Button.Group>
            <Button.Group alignGroup="right">
              <Button {...buttonProps} />
              <Button {...buttonProps} />
            </Button.Group>
            <Button.Group alignGroup="down">
              <Button {...buttonProps} />
              <Button {...buttonProps} />
            </Button.Group>
            <Button.Group alignGroup="full">
              <Button {...buttonProps} />
              <Button {...buttonProps} />
            </Button.Group>
          </li>
        </ul>

        <Typography.Title level={3}>2-2. Button group 예시</Typography.Title>
        <ul>
          <li>
            - alignGroup : {''}
            <div className="button__group">
              {alignGroupOption.map((val, idx) => (
                <a
                  href="#none"
                  className={`button__tag ${buttonGroupProps.alignGroupOption === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleAlignChange(val)}
                >
                  {val}
                </a>
              ))}
            </div>
          </li>
        </ul>
        <Button.Group alignGroup={buttonGroupProps.alignGroup}>
          <Button {...buttonProps} />
          <Button {...buttonProps} />
        </Button.Group>
        <SourceCodeViewer code={buttonGroupCode} />
      </div>
    </div>
  );
};

export default ButtonPlayground;
