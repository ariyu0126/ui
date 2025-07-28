'use client';

import { useState } from 'react';
import { Button, SourceCodeViewer } from "@/components";
import Typography from '@/components/Typography'
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
  }
  const alignGroupOption = ['left', 'center', 'right', 'down', 'full'];


  // code
  const {size, color, style, icon, align, disabled, children} = buttonProps;
  const code = `
    <Button size="${size}" color="${color}" style="${style}" icon="${icon}" align="${align}" disabled="${disabled}"
  children="${children}" />
  `;
  const codeGroup = `
  <div className="button__group button__group-${buttonGroupProps.alignGroup}">
      ${code}${code}
  </div>
  `;

  return (
    <>
      <div className="playground">
        <Typography.Title>Button</Typography.Title>
        <Typography.Title level="2">1-1. Button 속성</Typography.Title>
        <div className="playground__inner">
          <ul>
            <li>
              <Typography.Text>- size : sm, md, lg, full</Typography.Text>
              <Button size="sm" children="sm" />
              <Button size="md" children="md" />
              <Button size="lg" children="lg" />
              <Button size="full" children="full" />
            </li>
            <li>
              <Typography.Text>- icon : search, new, down, null</Typography.Text>
              <div className="button__group">
                <Button icon="search" children="search" />
                <Button icon="new" children="new" />
                <Button icon="down" children="down" />
              </div>
            </li>
            <li>
              <Typography.Text>- align : left, right</Typography.Text>
              <div className="button__group">
                <Button icon="search" align="left" children="left" />
                <Button icon="search" align="right" children="right" />
              </div>
            </li>
            <li>
              <Typography.Text>- color : white, dark, point</Typography.Text>
              <div className="button__group">
                <Button color="white" children="white" />
                <Button color="dark" children="dark" />
                <Button color="point" children="point" />
              </div>
            </li>
            <li>
              <Typography.Text>- disabled : true, false</Typography.Text>
              <Button disabled children="disabled" />
            </li>
            <li>
              <Typography.Text>- style : fill, solid</Typography.Text>
              <div className="button__group">
                <Button color="dark" style="fill" children="fill" />
                <Button color="dark" style="solid" children="solid" />
              </div>
            </li>
          </ul>
        </div>
        <Typography.Title level="2">1-2. Button group 속성</Typography.Title>
        <div className="playground__inner">
          <ul>
            <li>- align group : left, center, right, down</li>
          </ul>
        </div>

        <Typography.Title level="2">2-1. Button 예시</Typography.Title>
        <div className="playground__inner">
          <Typography.Title level="3">기본 버튼</Typography.Title>
          <ul>
            <li>
              - size :{' '}
              <div className="button__group">
                {
                  sizeOption.map((val, idx) => (
                    <button className={`button__tag ${buttonProps.size === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('size', val)}>{val}</button>
                  ))
                }
              </div>
            </li>
            <li>- icon : {' '}
              <div className="button__group">
                {
                  iconOption.map((val, idx) => (
                    <button className={`button__tag ${buttonProps.icon === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('icon', val)}>{val}</button>
                  ))
                }
              </div>
            </li>
            <li>- align : {' '}
              <div className="button__group">
                {
                  alignOption.map((val, idx) => (
                    <button className={`button__tag ${buttonProps.align === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('align', val)}>{val}</button>
                  ))
                }
              </div>
            </li>
            <li>- color : {' '}
              <div className="button__group">
                {
                  colorOption.map((val, idx) => (
                    <button className={`button__tag ${buttonProps.color === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('color', val)}>{val}</button>
                  ))
                }
              </div>
            </li>
            <li>- disabled :
              <div className="button__group">
                <button className={`button__tag ${buttonProps.disabled === true ? 'is-active' : ''}`} onClick={() => handlePropertyChange('disabled', true)}>true</button>
                <button className={`button__tag ${buttonProps.disabled === false ? 'is-active' : ''}`} onClick={() => handlePropertyChange('disabled', false)}>false</button>
              </div>
            </li>
            <li>
              - style: {' '}
              <div className="button__group">
                {
                  styleOption.map((val, idx) => (
                    <button className={`button__tag ${buttonProps.style === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('style', val)}>{val}</button>
                  ))
                }
              </div>
            </li>
          </ul>
          <Button {...buttonProps} />
          <SourceCodeViewer code={code} />
          <br /><br />

          <Typography.Title level="3">2-2.버튼 그룹</Typography.Title>
          <ul>
            <li>- alignGroup : {''}
              <div className="button__group">
                {
                  alignGroupOption.map((val, idx) => (
                    <a href="#none" className={`button__tag ${buttonGroupProps.alignGroupOption === val ? 'is-active' : ''}`} key={idx} onClick={() => handleAlignChange(val)}>{val}</a>
                  ))
                }
              </div>
            </li>
          </ul>
          <div className={`button__group button__group-${buttonGroupProps.alignGroup}`}>
            <Button {...buttonProps} />
            <Button {...buttonProps} />
          </div>
          <SourceCodeViewer code={codeGroup} />        
        </div>
      </div>
    </>
  );
}

export default ButtonPlayground;