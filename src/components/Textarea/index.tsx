'use client';

import type React from 'react';
import { useRef } from 'react';
import { cx } from '@/lib/cx';

const Textarea = ({
  resize = 'none',
  className = '',
  ...rest
}: {
  resize?: 'both' | 'none' | 'horizontal' | 'vertical';
  className?: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className="textarea">
      <textarea
        ref={textareaRef}
        className={cx('textarea__input', className)}
        style={{ resize: resize }}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
