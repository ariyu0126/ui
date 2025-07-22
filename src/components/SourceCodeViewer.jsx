import { useState } from 'react';
import Button from "@/components/Button";

export default function SourceCodeViewer({ code, btnText='코드', hidden=true, copy=false }) {
  const [showCode, setShowCode] = useState(!hidden);

  return (
    <div className="source-code-viewer">
      {
        hidden &&
        <Button color='dark' style='fill' size='sm' align='right' onClick={() => setShowCode(!showCode)} children={showCode ? `Hide ${btnText}` : `Show ${btnText}`} />
      }
      {
        (showCode || !hidden) && (
        <>
          {copy && <button>Copy</button>}
          <pre>
            <code>{code}</code>
          </pre>
        </>
        )
      }
    </div>
  );
}