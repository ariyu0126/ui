'use client';

import { useState } from 'react';
import Button from './Button/Button';

type SourceCodeViewerProps = {
  code: string;
  btnText?: string;
  hidden?: boolean;
  copy?: boolean;
  className?: string;
};

const SourceCodeViewer = ({
  code,
  btnText = '코드',
  hidden = true,
  copy = false,
  className = '',
}: SourceCodeViewerProps) => {
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
          aria-pressed={showCode}
        >
          {showCode ? `Hide ${btnText}` : `Show ${btnText}`}
        </Button>
      )}
      {(showCode || !hidden) && (
        <>
          {copy && (
            <button type="button" aria-label="Copy code">
              Copy
            </button>
          )}
          <pre role="region" aria-label="Source code">
            <code>{code}</code>
          </pre>
        </>
      )}
    </div>
  );
};

export default SourceCodeViewer;
