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
  copy = true,
  className = '',
}: SourceCodeViewerProps) => {
  const [showCode, setShowCode] = useState(!hidden);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

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
        <pre role="region" aria-label="Source code">
          <div className="source-code-viewer__content">
            <code>{code}</code>
            {copy && (
              <Button
                color="point"
                style="line"
                size="sm"
                onClick={handleCopy}
                aria-label="Copy code"
                className="source-code-viewer__copy-btn"
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            )}
          </div>
        </pre>
      )}
    </div>
  );
};

export default SourceCodeViewer;
