'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { SourceCodeViewer } from '@/components';
import Typography from '@/components/Typography';
import '@/styles/pages/playground.scss';

const TypographyPlayground = () => {
  // title
  const [titleProps, setTitleProps] = useState({
    level: 1,
    title: '',
    titleClass: '',
    titleColor: '',
  });
  const levelOptions = [1, 2, 3, 4, 5];
  const titleColorOptions = [
    'black',
    'white',
    'gray100',
    'gray300',
    'gray600',
    'gray800',
    'blue',
    'point',
    'error',
  ];
  const handlePropertyChange = (property, value) => {
    setTitleProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };
  const { level: titleLevel, title, titleClass, titleColor } = titleProps;
  const titleCode = generateCode('Typography.Title', {
    level: titleLevel,
    titleClass,
    titleColor,
  });

  // text
  const [textProps, setTextProps] = useState({
    weight: '400',
    text: '',
    textClass: '',
    textColor: '',
    ptag: false,
    size: 'default',
    ellipsis: '',
  });
  const weightOptions = ['100', '400', '700'];
  const sizeOptions = ['default', 'small', 'xsmall'];
  const textColorOptions = [
    'black',
    'white',
    'gray100',
    'gray300',
    'gray600',
    'gray800',
    'blue',
    'point',
    'error',
  ];
  const handleTextPropertyChange = (property, value) => {
    const ptagOption = value === 'true' ? true : value === 'false' ? false : value;
    setTextProps((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };
  const { level, weight, text, textClass, textColor, ptag, size, ellipsis } = textProps;
  const textCode = generateCode('Typography.Text', {
    level,
    weight,
    textClass,
    textColor,
    ptag,
    size,
    ellipsis
  });

  // group
  const typographyGroupCode = generateCode('Typography', {
    title,
    titleColor,
    titleClass,
    level: 1,
    text,
    textColor,
    weight,
    textClass,
    ptag,
    size,
    ellipsis    
  }, 'Typography');

  return (
    <div className="playground">
      <Typography.Title>Typography</Typography.Title>
      <Typography.Title level={2}>1. Title</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Title 속성</Typography.Title>
        <Typography.Text>- level : 1, 2, 3, 4, 5, 6</Typography.Text>
        <div className="playground__inner-box">
          <Typography.Title level={1}>Heading level 1</Typography.Title>
          <Typography.Title level={2}>Heading level 2</Typography.Title>
          <Typography.Title level={3}>Heading level 3</Typography.Title>
          <Typography.Title level={4}>Heading level 4</Typography.Title>
          <Typography.Title level={5}>Heading level 5</Typography.Title>
          <Typography.Title level={6}>Heading level 6</Typography.Title>
        </div>
        
        <Typography.Text>
          - titleColor : black, white, gray100, gray300, gray600, gray800, blue, point, error
        </Typography.Text>
        <div className="playground__inner-box">
          <Typography.Title level={2} titleColor="black">
            Color black
          </Typography.Title>
          <Typography.Title level={2} titleColor="white">
            Color white
          </Typography.Title>
          <Typography.Title level={2} titleColor="gray100">
            Color gray100
          </Typography.Title>
          <Typography.Title level={2} titleColor="gray300">
            Color gray300
          </Typography.Title>
          <Typography.Title level={2} titleColor="gray600">
            Color gray600
          </Typography.Title>
          <Typography.Title level={2} titleColor="gray800">
            Color gray800
          </Typography.Title>
          <Typography.Title level={2} titleColor="blue">
            Color blue
          </Typography.Title>
          <Typography.Title level={2} titleColor="point">
            Color point
          </Typography.Title>
          <Typography.Title level={2} titleColor="error">
            Color error
          </Typography.Title>
        </div>
        <Typography.Text>- title : title 내용</Typography.Text>
        <div className="playground__inner-box"><Typography.Title title="Title 속성" /></div>

        <Typography.Title level={3}>1-2. Title 예시</Typography.Title>
        <ul className="playground__inner-list">
          <li>
            - level :{' '}
            <div className="button__group">
              {levelOptions.map((val, idx) => (
                <button
                  className={`button__tag ${titleProps.level === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('level', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - title :{' '}
            <input
              type="text"
              value={titleProps.title || ''}
              onChange={(e) => handlePropertyChange('title', e.target.value)}
              placeholder="타이틀을 입력하세요"
            />
          </li>
          <li>
            - titleClass :{' '}
            <input
              type="text"
              value={titleProps.titleClass || ''}
              onChange={(e) => handlePropertyChange('titleClass', e.target.value)}
              placeholder="타이틀 클래스를 입력하세요"
            />
          </li>
          <li>
            - color :{' '}
            <div className="button__group">
              {titleColorOptions.map((val, idx) => (
                <button
                  className={`button__tag ${titleProps.titleColor === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handlePropertyChange('titleColor', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
        </ul>
        <div className="playground__inner-box">
          <Typography.Title
            level={titleProps.level}
            titleClass={titleProps.titleClass}
            titleColor={titleProps.titleColor}
          >
            {titleProps.title}
          </Typography.Title>
        </div>
        <SourceCodeViewer code={titleCode} />
      </div>

      <Typography.Title level={2}>Text</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>2-1. Text 속성</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>- weight : 100, 400, 700</Typography.Text>
          <Typography.Text weight="100">Weight 100</Typography.Text>
          <Typography.Text weight="400">Weight 400</Typography.Text>
          <Typography.Text weight="700">Weight 700</Typography.Text>
        </div>
        <Typography.Text>
          - textColor : black, white, gray100, gray300, gray600, gray800, blue, point, error
        </Typography.Text>
        <div className="playground__inner-box">
          <Typography.Text textColor="black">Color black</Typography.Text>
          <Typography.Text textColor="white">Color white</Typography.Text>
          <Typography.Text textColor="gray100">Color gray100</Typography.Text>
          <Typography.Text textColor="gray300">Color gray300</Typography.Text>
          <Typography.Text textColor="gray600">Color gray600</Typography.Text>
          <Typography.Text textColor="gray800">Color gray800</Typography.Text>
          <Typography.Text textColor="blue">Color blue</Typography.Text>
          <Typography.Text textColor="point">Color point</Typography.Text>
          <Typography.Text textColor="error">Color error</Typography.Text>
        </div>
        <Typography.Text>- ptag : true, false</Typography.Text>
        <div className="playground__inner-box">
          <Typography.Text ptag={true}>Ptag true = p tag</Typography.Text>
          <Typography.Text ptag={false}>Ptag false = div tag</Typography.Text>
        </div>
        <Typography.Text>- size : default, small, xsmall</Typography.Text>
        <div className="playground__inner-box">
          <Typography.Text size="default">Size default</Typography.Text>
          <Typography.Text size="small">Size small</Typography.Text>
          <Typography.Text size="xsmall">Size xsmall</Typography.Text>
        </div>
        <Typography.Text>- text : 텍스트 내용</Typography.Text>
        <div className="playground__inner-box"><Typography.Text text="Text 내용" /></div>
        <Typography.Text>- ellipsis : 말줄임</Typography.Text>
        <div className="playground__inner-box">
          <Typography.Text ellipsis={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </Typography.Text>
          <hr />
          <Typography.Text ellipsis={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </Typography.Text>
          <hr />
          <Typography.Text ellipsis={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </Typography.Text>
        </div>

        <Typography.Title level={3}>2-2. Text 예시</Typography.Title>
        <ul className="playground__inner-list">
          <li>
            - weight :{' '}
            <div className="button__group">
              {weightOptions.map((val, idx) => (
                <button
                  className={`button__tag ${textProps.weight === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleTextPropertyChange('weight', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - text :{' '}
            <input
              type="text"
              value={textProps.text || ''}
              onChange={(e) => handleTextPropertyChange('text', e.target.value)}
              placeholder="텍스트를 입력하세요"
            />
          </li>
          <li>
            - textClass :{' '}
            <input
              type="text"
              value={textProps.textClass || ''}
              onChange={(e) => handleTextPropertyChange('textClass', e.target.value)}
              placeholder="텍스트 클래스를 입력하세요"
            />
          </li>
          <li>
            - color :{' '}
            <div className="button__group">
              {textColorOptions.map((val, idx) => (
                <button
                  className={`button__tag ${textProps.textColor === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleTextPropertyChange('textColor', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - ptag :{' '}
            <div className="button__group">
              <button
                className={`button__tag ${textProps.ptag === true ? 'is-active' : ''}`}
                onClick={() => handleTextPropertyChange('ptag', true)}
              >
                true
              </button>
              <button
                className={`button__tag ${textProps.ptag === false ? 'is-active' : ''}`}
                onClick={() => handleTextPropertyChange('ptag', false)}
              >
                false
              </button>
            </div>
          </li>
          <li>
            - size :{' '}
            <div className="button__group">
              {sizeOptions.map((val, idx) => (
                <button
                  className={`button__tag ${textProps.size === val ? 'is-active' : ''}`}
                  key={idx}
                  onClick={() => handleTextPropertyChange('size', val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </li>
          <li>
            - ellipsis :{' '}
            <input
              type="number"
              min="2"
              max="5"
              value={textProps.ellipsis || ''}
              onChange={(e) => handleTextPropertyChange('ellipsis', e.target.value)}
            />
          </li>
        </ul>
        <div className="playground__inner-box">
          <Typography.Text
            weight={textProps.weight}
            textClass={textProps.textClass}
            textColor={textProps.textColor}
            ptag={textProps.ptag}
            size={textProps.size}
            ellipsis={textProps.ellipsis}
          >
            {textProps.text}
          </Typography.Text>
        </div>
        <SourceCodeViewer code={textCode} />
      </div>

      <Typography.Title level={2}>Text Group</Typography.Title>
      <div className="playground__inner">
        <Typography
          level={titleProps.level}
          title={titleProps.title}
          titleClass={titleProps.titleClass}
          titleColor={titleProps.titleColor}
          weight={textProps.weight}
          text={textProps.text}
          textColor={textProps.textColor}
          ptag={textProps.ptag}
          size={textProps.size}
          ellipsis={textProps.ellipsis}
        />
        <SourceCodeViewer code={typographyGroupCode} />
      </div>
    </div>
  );
};
export default TypographyPlayground;
