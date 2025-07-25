'use client';

import { useState } from 'react';
import { SourceCodeViewer } from "@/components";
import Typography from '@/components/Typography/Index'
import '@/styles/pages/playground.scss';

const TypographyPlayground = () => {
    // title props
    const [titleProps, setTitleProps] = useState({
        level: 1,
        title: '',
        titleClass: '',
        titleColor: '',
    });
    const levelOptions = [1, 2, 3, 4, 5];
    const titleColorOptions = ['black', 'white', 'gray100', 'gray300', 'gray600', 'gray800', 'blue', 'point', 'error'];
    const handlePropertyChange = (property, value) => {
        setTitleProps((prevProps) => ({
        ...prevProps,
        [property]: value,
        }));
    };
    // code
    const {level: titleLevel, title, titleClass, titleColor } = titleProps;
    const titleCode = `
        <Typography.Title
            level="${titleLevel}"
            titleClass="${titleClass}"
            titleColor="${titleColor}"
        >
            ${title}
        </Typography.Title>
    `;

    // text props
    const [textProps, setTextProps] = useState({
        weight: '400',
        text: '',
        textClass: '',
        textColor: '',
        ptag: false,
        size: 'default',
    });
    const weightOptions = ['100', '400', '700'];
    const sizeOptions = ['default', 'small', 'xsmall'];
    const textColorOptions = ['black', 'white', 'gray100', 'gray300', 'gray600', 'gray800', 'blue', 'point', 'error'];
    const handleTextPropertyChange = (property, value) => {
        const ptagOption = value === 'true' ? true : value === 'false' ? false : value;
        setTextProps((prevProps) => ({
            ...prevProps,
            [property]: value,
        }));
    };
    // code
    const {level, weight, text, textClass, textColor, ptag, size} = textProps;
    const textCode = `
        <Typography.Text
            level="${level}"
            weight="${weight}"
            textClass="${textClass}"
            textColor="${textColor}"
            ptag="${ptag}"
            size="${size}"
        >
            ${text}
        </Typography.Text>
    `;

    // code
    const typographyGroupCode = `
        <Typography
            title="${title}"
            titleColor="${titleColor}"
            titleClass="${titleClass}"
            level="1"
            text="${text}"
            textColor="${textColor}"
            weight="${weight}"
            textClass="${textClass}"
            ptag="${ptag}"
            size="${size}"
        />
    `;

    return (
        <div className="playground">
            <Typography.Title level={1}>Typography</Typography.Title>
            <Typography.Title level={2}>1. Title</Typography.Title>
            <div className="playground__inner">
                <Typography.Title level={3}>1-1. Title 속성</Typography.Title>
                <Typography.Text>- level : 1, 2, 3, 4, 5, 6</Typography.Text>
                <Typography.Title level={1} children="Heading level 1" />
                <Typography.Title level={2} children="Heading level 2" />
                <Typography.Title level={3} children="Heading level 3" />
                <Typography.Title level={4} children="Heading level 4" />
                <Typography.Title level={5} children="Heading level 5" />
                <Typography.Title level={6} children="Heading level 6" />
                <br /><br />
                <Typography.Text>- titleColor : black, white, gray100, gray300, gray600, gray800, blue, point, error</Typography.Text>
                <Typography.Title level={2} titleColor="black" children="Color black" />
                <Typography.Title level={2} titleColor="white" children="Color white" />
                <Typography.Title level={2} titleColor="gray100" children="Color gray100" />
                <Typography.Title level={2} titleColor="gray300" children="Color gray300" />
                <Typography.Title level={2} titleColor="gray600" children="Color gray600" />
                <Typography.Title level={2} titleColor="gray800" children="Color gray800" />
                <Typography.Title level={2} titleColor="blue" children="Color blue" />
                <Typography.Title level={2} titleColor="point" children="Color point" />
                <Typography.Title level={2} titleColor="error" children="Color error" />
                <br /><br />
                <Typography.Text>- title : title 내용</Typography.Text>
                <Typography.Title title="Title 속성" />

                <Typography.Title level={3}>1-2. Title 예시</Typography.Title>
                <ul>
                    <li>
                        - level :{' '}
                        <div className="button__group">
                            {
                                levelOptions.map((val, idx) => (
                                <button className={`button__tag ${titleProps.level === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('level', val)}>{val}</button>
                                ))
                            }
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
                            {
                                titleColorOptions.map((val, idx) => (
                                <button className={`button__tag ${titleProps.titleColor === val ? 'is-active' : ''}`} key={idx} onClick={() => handlePropertyChange('titleColor', val)}>{val}</button>
                                ))
                            }
                        </div>
                    </li>
                </ul>
                <Typography.Title level={titleProps.level} titleClass={titleProps.titleClass} titleColor={titleProps.titleColor}>
                    {titleProps.title}
                </Typography.Title>
                <SourceCodeViewer code={titleCode} />
            </div>


            <Typography.Title level={2} children="Text" />
            <div className="playground__inner">
                <Typography.Title level={3}>2-1. Text 속성</Typography.Title>
                <Typography.Text>- weight : 100, 400, 700</Typography.Text>
                <Typography.Text weight="100">Weight 100</Typography.Text>
                <Typography.Text weight="400">Weight 400</Typography.Text>
                <Typography.Text weight="700">Weight 700</Typography.Text>
                <br /><br />
                <Typography.Text>- textColor : black, white, gray100, gray300, gray600, gray800, blue, point, error</Typography.Text>
                <Typography.Text textColor="black">Color black</Typography.Text>
                <Typography.Text textColor="white">Color white</Typography.Text>
                <Typography.Text textColor="gray100">Color gray100</Typography.Text>
                <Typography.Text textColor="gray300">Color gray300</Typography.Text>
                <Typography.Text textColor="gray600">Color gray600</Typography.Text>
                <Typography.Text textColor="gray800">Color gray800</Typography.Text>
                <Typography.Text textColor="blue">Color blue</Typography.Text>
                <Typography.Text textColor="point">Color point</Typography.Text>
                <Typography.Text textColor="error">Color error</Typography.Text>
                <br /><br />
                <Typography.Text>- ptag : true, false</Typography.Text>
                <Typography.Text ptag={true}>Ptag true = p tag</Typography.Text>
                <Typography.Text ptag={false}>Ptag false = div tag</Typography.Text>
                <br /><br />
                <Typography.Text>- size : default, small, xsmall</Typography.Text>
                <Typography.Text size="default">Size default</Typography.Text>
                <Typography.Text size="small">Size small</Typography.Text>
                <Typography.Text size="xsmall">Size xsmall</Typography.Text>
                <br /><br />
                <Typography.Text>- text : 텍스트 내용</Typography.Text>
                <Typography.Text text="Text 내용" />

                <Typography.Title level={3}>2-2. Text 예시</Typography.Title>
                <ul>
                    <li>
                        - weight :{' '}
                        <div className="button__group">
                            {
                                weightOptions.map((val, idx) => (
                                <button className={`button__tag ${textProps.weight === val ? 'is-active' : ''}`} key={idx} onClick={() => handleTextPropertyChange('weight', val)}>{val}</button>
                                ))
                            }
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
                            {
                                textColorOptions.map((val, idx) => (
                                <button className={`button__tag ${textProps.textColor === val ? 'is-active' : ''}`} key={idx} onClick={() => handleTextPropertyChange('textColor', val)}>{val}</button>
                                ))
                            }
                        </div>
                    </li>
                    <li>
                        - ptag : {' '}                        
                        <div className="button__group">
                            <button className={`button__tag ${textProps.ptag === true ? 'is-active' : ''}`} onClick={() => handleTextPropertyChange('ptag', true)}>true</button>
                            <button className={`button__tag ${textProps.ptag === false ? 'is-active' : ''}`} onClick={() => handleTextPropertyChange('ptag', false)}>false</button>
                        </div>
                    </li>
                    <li>
                        - size :{' '}
                        <div className="button__group">
                            {
                                sizeOptions.map((val, idx) => (
                                    <button className={`button__tag ${textProps.size === val ? 'is-active' : ''}`} key={idx} onClick={() => handleTextPropertyChange('size', val)}>{val}</button>
                                ))
                            }
                        </div>
                    </li>
                </ul>
                <Typography.Text weight={textProps.weight} textClass={textProps.textClass} textColor={textProps.textColor} ptag={textProps.ptag} size={textProps.size}>
                    {textProps.text}
                </Typography.Text>
                <SourceCodeViewer code={textCode} />
            </div>

            <Typography.Title level={2} children="Text Group" />
            <div className="playground__inner">
                <Typography title="Text group title" titleColor="point" level="3" text="Text group text" textColor="gray300" weight="700" size="default" />
                <SourceCodeViewer code={typographyGroupCode} />
            </div>
        </div>
    )
}
export default TypographyPlayground;