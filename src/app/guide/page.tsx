'use client';

import { useState } from 'react';
import { menuData } from '../layout/Sidebar';
import { SourceCodeViewer, Typography, Button, Radio } from '../../components';
import '../../styles/pages/playground.scss';
import Link from 'next/link';

const PKG = '@ure0126/basic-ui-components';

export default function GettingStarted() {
  const [pm, setPm] = useState<'npm' | 'yarn' | 'pnpm'>('npm');

  const cmd = pm === 'npm' ? `npm i ${PKG}` : pm === 'yarn' ? `yarn add ${PKG}` : `pnpm add ${PKG}`;

  const example = `
import '@ure0126/basic-ui-components/dist/styles/main.css';
import { Button } from '${PKG}';

export default function Example() {
  return <Button>확인</Button>;
}
  `.trim();

  const cssOverride = `
/* 사용자 프로젝트 예: styles/theme.css or .scss */
:root {
  --color-point: #ff6600;     /* 브랜드 포인트 컬러 변경 */
  --font-size-base: 18px;     /* 기본 폰트 크기 변경 */
  --spacing-base: 20px;       /* 간격 토큰 변경 */
  --color-gray-100: #f0f0f0;  /* 그레이 컬러 변경 */
  --color-gray-600: #666666;   /* 그레이 컬러 변경 */
  --border-radius-md: 16px;    /* 테두리 반경 변경 */
}
  `.trim();

  const scssOverride = `
// 사용자 프로젝트 예: styles/custom-variables.scss
// 빌드 타임에 SCSS map을 덮어씁니다. (SCSS 환경 필요)
@use '@ure0126/basic-ui-components/src/styles/abstracts/variables' with (
  $breakpoints: (
    'MO': 767px,
    'TAB': 1024px,
    'PC': 1280px,
  ),
  $height: (
    sm: 32px,
    md: 40px,
    lg: 48px,
  ),
  $gap-map: (
    none: 0,
    sm: 4px,
    md: 8px,
    lg: 16px,
    xl: 32px,
  )
);
  `.trim();

  return (
    <div className="playground playground__guide">
      <Typography.Title>설치 및 사용 가이드</Typography.Title>

      <Typography.Title level={2}>{PKG}는 React UI 컴포넌트 모음입니다.</Typography.Title>

      <Typography.Title level={2}>설치 가이드</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1. 설치</Typography.Title>
        <Radio.Group
          options={[
            { label: 'npm', value: 'npm' },
            { label: 'yarn', value: 'yarn' },
            { label: 'pnpm', value: 'pnpm' },
          ]}
          checked={pm}
          name="packageManager"
          optionType="button"
          onChange={(e) => setPm(e.target.value as 'npm' | 'yarn' | 'pnpm')}
        />
        <SourceCodeViewer code={cmd} hidden={false} />

        <Typography.Title level={3}>2. 스타일 불러오기</Typography.Title>
        <SourceCodeViewer code={`import '${PKG}/dist/styles/main.css'`} hidden={false} />

        <Typography.Title level={3}>3. 필수 환경</Typography.Title>
        <ul>
          <li>Node.js: 18 이상 권장</li>
          <li>React / ReactDOM: 18 이상 (본 패키지는 React 18+와 호환)</li>
        </ul>

        <Typography.Title level={3}>4. Peer Dependencies</Typography.Title>
        <SourceCodeViewer code={`npm i react react-dom`} hidden={false} />

        <Typography.Title level={3}>5. Next.js 사용 시 주의</Typography.Title>
        <ul>
          <li>
            인터랙티브 컴포넌트는 <code>&apos;use client&apos;</code> 환경에서 사용하세요.
          </li>
          <li>
            App Router 기준: 해당 페이지/섹션 상단에 <code>&apos;use client&apos;</code>를 선언하거나, 클라이언트 컴포넌트에서 임포트하세요.
          </li>
        </ul>
      </div>

      <Typography.Title level={2}>테마 커스터마이징</Typography.Title>
      <div className="playground__inner">
        <Typography.Text>
          이 라이브러리는 <strong>CSS 변수(:root)</strong>와 <strong>SCSS map</strong> 토큰으로 스타일을 관리합니다.<br />
          원하는 방식으로 프로젝트에서 토큰을 덮어써서 브랜드 테마를 적용할 수 있습니다.
        </Typography.Text>

        <Typography.Title level={3}>1. CSS 변수 재정의 (런타임)</Typography.Title>
        <Typography.Text>
          <code>:root</code>에 동일한 변수명을 다시 선언하면 런타임에 즉시 테마가 반영됩니다.<br />
          다크모드·브랜드 컬러 교체처럼 실행 중 테마 전환에 적합합니다.
        </Typography.Text>
        <SourceCodeViewer code={cssOverride} hidden={false} />

        <Typography.Title level={3}>2. SCSS map override (빌드 타임)</Typography.Title>
        <Typography.Text>
          반응형 breakpoint, 컴포넌트 사이즈, gap 등 SCSS map을 <code>@use … with</code>로 덮어쓸 수
          있습니다. 빌드 타임에 컴파일되며, SCSS 환경이 필요합니다.
        </Typography.Text>
        <SourceCodeViewer code={scssOverride} hidden={false} />

        <Typography.Title level={3}>3. 언제 무엇을 쓰나요?</Typography.Title>
        <ul>
          <li>
            <strong>CSS 변수</strong> → 색상/폰트/간격 등 <em>런타임 테마 전환</em>이 필요할 때.
          </li>
          <li>
            <strong>SCSS map</strong> → breakpoint·height·gap 등 <em>설계 단위</em>를 프로젝트 기준으로 재정의할 때.
          </li>
        </ul>

        <Typography.Title level={3}>4. Troubleshooting</Typography.Title>
        <ul>
          <li>
            <strong>Element type is invalid … got: undefined</strong>
            <br />→ 임포트 경로를 확인하세요:{' '}
            <SourceCodeViewer code={`import {'{ Button }'} from '${PKG}'`} hidden={false} />
            <br />
          </li>
          <li>
            <strong>스타일이 적용되지 않음</strong>
            <br />→ 전역에서 CSS를 임포트했는지 확인하세요:{' '}
            <SourceCodeViewer code={`import '${PKG}/dist/styles/main.css'`} hidden={false} />
          </li>
        </ul>
      </div>

      <Typography.Title level={2}>사용예시</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1. 기본 사용 예시</Typography.Title>
        <SourceCodeViewer code={example} hidden={false} />

        <Typography.Title level={3}>2. 컴포넌트 카테고리</Typography.Title>
        <ol>
          {menuData.map((section) => (
            <div key={section.category}>
              <Typography.Title level={4} titleColor="gray600">
                {section.category}
              </Typography.Title>
              <ul>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}