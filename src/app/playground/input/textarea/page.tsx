'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { SourceCodeViewer, Typography, Textarea } from '@/components';

const TextareaPage = () => {
  type ResizeOption = 'both' | 'vertical' | 'horizontal' | 'none';

  const [textareaProps, setTextareaProps] = useState<{ resize: ResizeOption }>({ resize: 'none' });
  const resizeOptions = ['both', 'vertical', 'horizontal', 'none'] as const;

  const handlePropertyChange = <K extends keyof typeof textareaProps>(
    property: K,
    value: (typeof textareaProps)[K],
  ) => {
    setTextareaProps((prev) => ({ ...prev, [property]: value }));
  };

  const textareaCode = generateCode('Textarea', textareaProps);
  return (
    <div className="playground">
      <Typography.Title>Textarea</Typography.Title>
      <Typography.Title level={2}>1. Textarea 속성</Typography.Title>
      <Typography.Text>- resize: both, vertical, horizontal, none</Typography.Text>
      <div className="playground__inner-box">
        both
        <br />
        <Textarea resize="both" />
        vertical
        <br />
        <Textarea resize="vertical" />
        horizontal
        <br />
        <Textarea resize="horizontal" />
        none
        <br />
        <Textarea resize="none" />
        <Typography.Title level={2}>2. Textarea 예시</Typography.Title>
      </div>
      <ul className="playground__inner-list">
        <li>
          - resize:{' '}
          <div className="button__group">
            {resizeOptions.map((val, idx) => (
              <button
                key={idx}
                className={`button__tag ${textareaProps.resize === val ? 'is-active' : ''}`}
                onClick={() => handlePropertyChange('resize', val)}
              >
                {val}
              </button>
            ))}
          </div>
        </li>
      </ul>
      <div className="playground__inner-box">
        <Textarea {...textareaProps} />
      </div>
      <SourceCodeViewer code={textareaCode} />
    </div>
  );
};



export default TextareaPage;
