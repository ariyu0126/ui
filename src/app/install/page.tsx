'use client';

import { useState } from 'react';
import { SourceCodeViewer, Typography, Button } from '../../components';
import '../../styles/pages/playground.scss';

const PKG = '@ure/basic-ui-components';

export default function GettingStarted() {
  const [pm, setPm] = useState<'npm' | 'yarn' | 'pnpm'>('npm');

  const cmd = pm === 'npm' ? `npm i ${PKG}` : pm === 'yarn' ? `yarn add ${PKG}` : `pnpm add ${PKG}`;

  const example = `
import { Button } from '${PKG}';

export default function Example() {
  return <Button>확인</Button>;
}
  `.trim();

  return (
    <div className="playground playground__guide">
      <Typography.Title>npm 설치 가이드</Typography.Title>
      <Typography.Title level={2}>{PKG} 설치 및 첫 사용 예시</Typography.Title>
      <br />
      <div className="playground__inner">
        <Typography.Title level={3}>1. 설치</Typography.Title>
        <Typography.Text>npm i @ure/basic-ui-components</Typography.Text>

        <Typography.Title level={3}>2. 사용예시</Typography.Title>
        <SourceCodeViewer btnText="예시" code={example} hidden={false} />

        <Typography.Title level={3}>3. 컴포넌트 리스트</Typography.Title>
        <Button.Group>
          <Button.Link href="/playground/flex-grid">Flex/Grid</Button.Link>
          <Button.Link href="/playground/color">Color</Button.Link>
          <Button.Link href="/playground/typography">Typography</Button.Link>
          <Button.Link href="/playground/button">Button</Button.Link>
          <Button.Link href="/playground/input/inputText">Input</Button.Link>
          <Button.Link href="/playground/input/textarea">Textarea</Button.Link>
          <Button.Link href="/playground/input/radio">Radio</Button.Link>
          <Button.Link href="/playground/input/checkbox">Checkbox</Button.Link>
          <Button.Link href="/playground/select">Select</Button.Link>
          <Button.Link href="/playground/table">Table</Button.Link>
        </Button.Group>
      </div>
    </div>
  );
}