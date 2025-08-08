'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';

type SourceCodeViewerProps = {
  code: string;
  btnText?: string;
  hidden?: boolean;
  copy?: boolean;
  className?: string;
};

const SourceCodeViewer = ({ code, btnText = '코드', hidden = true, copy = false, className = '' }: SourceCodeViewerProps) => {
  const [showCode, setShowCode] = useState(!hidden);

  return (
    <div className={`source-code-viewer ${className}`}>
      {hidden && (
        <Button
          color="dark"
          style="fill"
          size="sm"
          align="right"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? `Hide ${btnText}` : `Show ${btnText}`}
        </Button>
      )}
      {(showCode || !hidden) && (
        <>
          {copy && <button>Copy</button>}
          <pre>
            <code>{code}</code>
          </pre>
        </>
      )}
    </div>
  );
};

export default SourceCodeViewer;
