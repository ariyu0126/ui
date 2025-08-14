'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { Button, SourceCodeViewer, Typography } from '@/components';
import '@/styles/pages/playground.scss';

const ButtonPlayground = () => {
  type LocalButtonProps = {
    size: 'sm' | 'md' | 'lg';
    style: 'fill' | 'line' | 'text';
    icon: 'search' | 'new' | 'down' | 'null';
    align: 'left' | 'center' | 'right';
    color: 'white' | 'dark' | 'point';
    disabled: boolean;
    children: string;
  };

  const [buttonProps, setButtonProps] = useState<LocalButtonProps>({
    size: 'md',
    icon: 'null',
    align: 'left',
    color: 'white',
    style: 'fill',
    disabled: false,
    children: '버튼',
  });

  // button props
  const handlePropertyChange = <K extends keyof LocalButtonProps>(property: K, value: LocalButtonProps[K]) => {
    setButtonProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  const sizeOption = ['sm', 'md', 'lg'] as const;
  type SizeOption = typeof sizeOption[number];
  const iconOption = ['search', 'new', 'down', 'null'] as const;
  type IconOption = typeof iconOption[number];
  const alignOption = ['left', 'right'] as const;
  type AlignOption = typeof alignOption[number];
  const colorOption = ['white', 'dark', 'point'] as const;
  type ColorOption = typeof colorOption[number];
  const styleOption = ['fill', 'line', 'text'] as const;
  type StyleOption = typeof styleOption[number];

  // button group props
  type LocalButtonGroupProps = { alignGroup: 'left' | 'center' | 'right' | 'down' | 'full' };
  const [buttonGroupProps, setButtonGroupProps] = useState<LocalButtonGroupProps>({ alignGroup: 'left' });
  const handleAlignChange = (value: LocalButtonGroupProps['alignGroup']) => {
    setButtonGroupProps(() => ({ alignGroup: value }));
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
        <Typography.Text>- size : sm, md, lg, full</Typography.Text>
        <div className="playground__inner-box">
          <Button size="sm">sm</Button>
          <Button size="md">md</Button>
          <Button size="lg">lg</Button>
        </div>

        <Typography.Text>- icon : search, new, down, null</Typography.Text>
        <div className="playground__inner-box">
          <div className="button__group">
            <Button icon="search">search</Button>
            <Button icon="new">new</Button>
            <Button icon="down">down</Button>
          </div>
        </div>

        <Typography.Text>- align : left, right</Typography.Text>
        <div className="playground__inner-box">
          <div className="button__group">
            <Button icon="search" align="left">
              left
            </Button>
            <Button icon="search" align="right">
              right
            </Button>
          </div>
        </div>

        <Typography.Text>- color : white, dark, point</Typography.Text>
        <div className="playground__inner-box">
          <div className="button__group">
            <Button color="white">white</Button>
            <Button color="dark">dark</Button>
            <Button color="point">point</Button>
          </div>
        </div>

        <Typography.Text>- disabled : true, false</Typography.Text>
        <div className="playground__inner-box">
          <Button disabled={true}>disabled</Button>
        </div>

        <Typography.Text>- style : fill, line, text</Typography.Text>
        <div className="playground__inner-box">
          <div className="button__group">
            <Button color="dark" style="fill">
              fill
            </Button>
            <Button color="dark" style="line">
              line
            </Button>
            <Button color="dark" style="text">
              text
            </Button>
          </div>
        </div>

        <Typography.Title level={3}>1-2. Button 예시</Typography.Title>
        <ul className="playground__inner-list">
          <li>
            - size :{' '}
            <div className="button__group">
              {sizeOption.map((val, idx) => (
                <button
                  className={`button__tag ${buttonProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('size', val as SizeOption)}
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
                  onClick={() => handlePropertyChange('icon', val as IconOption)}
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
                  onClick={() => handlePropertyChange('align', val as AlignOption)}
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
                  onClick={() => handlePropertyChange('color', val as ColorOption)}
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
                  onClick={() => handlePropertyChange('style', val as StyleOption)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
        </ul>
        <div className="playground__inner-box">
          <Button {...buttonProps} />
        </div>
        <SourceCodeViewer code={buttonCode} />
      </div>
      <Typography.Title level={2}>2. Button group</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>2-1. Button group 속성</Typography.Title>
        <Typography.Text>- align group : left, center, right, down, full</Typography.Text>
        <div className="playground__inner-box">
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
        </div>

        <Typography.Title level={3}>2-2. Button group 예시</Typography.Title>
        <ul className="playground__inner-list">
          <li>
            - alignGroup :{' '}
            <div className="button__group">
              {alignGroupOption.map((val, idx) => (
                <a
                  href="#none"
                  className={`button__tag ${buttonGroupProps.alignGroup === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleAlignChange(val as LocalButtonGroupProps['alignGroup'])}
                >
                  {val}
                </a>
              ))}
            </div>
          </li>
        </ul>
        <div className="playground__inner-box">
          <Button.Group alignGroup={buttonGroupProps.alignGroup}>
            <Button {...buttonProps} />
            <Button {...buttonProps} />
          </Button.Group>
        </div>
        <SourceCodeViewer code={buttonGroupCode} />
      </div>
    </div>
  );
};

export default ButtonPlayground;
