'use client';

import { useState } from 'react';
import Link from 'next/link';
import meta from '../../../docs/meta.json';
import { menuData } from '../layout/Sidebar';
import { SourceCodeViewer, Typography, Button, Radio } from '../../components';
import '../../styles/pages/playground.scss';

export default function GettingStarted() {
  const [pm, setPm] = useState<'npm' | 'yarn' | 'pnpm'>('npm');
  const installCmd =
    pm === 'npm' ? meta.install.npm : pm === 'yarn' ? meta.install.yarn : meta.install.pnpm;

  const cssOverride = `
:root {
  --color-point: #ff6600;
  --font-size-base: 18px;
  --spacing-base: 20px;
  --color-gray-100: #f0f0f0;
  --color-gray-600: #666666;
  --border-radius-md: 16px;
}
  `.trim();

  const scssOverride = `
@use '${meta.package.name}/src/styles/abstracts/variables' with (
  $breakpoints: ('MO': 767px, 'TAB': 1024px, 'PC': 1280px),
  $height: (sm: 32px, md: 40px, lg: 48px),
  $gap-map: (none: 0, sm: 4px, md: 8px, lg: 16px, xl: 32px)
);
  `.trim();

  return (
    <div className="playground playground__guide">
      {/* 1) 소개 */}
      <Typography.Title>설치 및 사용 가이드</Typography.Title>
      <Typography.Text>
        {meta.package.name}는 다양한 UI 컴포넌트를 npm으로 설치해 바로 사용할 수 있는 React UI 컴포넌트 라이브러리입니다.
      </Typography.Text>

      {/* 2) 설치 */}
      <Typography.Title level={2}>설치</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1. 설치</Typography.Title>
        <Radio.Group
          options={[
            { label: 'npm', value: 'npm' },
            { label: 'yarn', value: 'yarn' },
            { label: 'pnpm', value: 'pnpm' }
          ]}
          checked={pm}
          name="packageManager"
          optionType="button"
          onChange={(e) => setPm(e.target.value as 'npm' | 'yarn' | 'pnpm')}
        />
        <SourceCodeViewer code={installCmd} hidden={false} />

        <Typography.Title level={3}>2. 스타일 불러오기</Typography.Title>
        <SourceCodeViewer code={meta.package.stylesImport} hidden={false} />

        <Typography.Title level={3}>3. 필수 환경</Typography.Title>
        <ul>
          <li>Node.js: {meta.requirements.node} 권장</li>
          <li>React / ReactDOM: {meta.requirements.react}</li>
        </ul>

        <Typography.Title level={3}>4. Peer Dependencies</Typography.Title>
        <SourceCodeViewer code={meta.package.peerDepsInstall} hidden={false} />

        <Typography.Title level={3}>5. Next.js 사용 시 주의</Typography.Title>
        <ul>
          <li>인터랙티브 컴포넌트는 <code>&apos;use client&apos;</code> 환경에서 사용하세요.</li>
          <li>App Router: 페이지/섹션 상단에 <code>&apos;use client&apos;</code> 선언 또는 클라이언트 컴포넌트에서 임포트</li>
        </ul>
      </div>

      {/* 3) 테마 */}
      <Typography.Title level={2}>테마 커스터마이징</Typography.Title>
      <div className="playground__inner">
        <Typography.Text>
          이 라이브러리는 <strong>CSS 변수(:root)</strong>와 <strong>SCSS map</strong> 토큰으로 스타일을 관리합니다.
        </Typography.Text>

        <Typography.Title level={3}>1. CSS 변수 재정의 (런타임)</Typography.Title>
        <SourceCodeViewer code={cssOverride} hidden={false} />

        <Typography.Title level={3}>2. SCSS map override (빌드 타임)</Typography.Title>
        <SourceCodeViewer code={scssOverride} hidden={false} />
      </div>

      {/* 4) 사용 예시 */}
      <Typography.Title level={2}>사용 예시</Typography.Title>
      <div className="playground__inner">
        <SourceCodeViewer code={meta.quickStart.replace(/\\n/g, '\n')} hidden={false} />
      </div>

      {/* 5) 컴포넌트 카테고리 */}
      <Typography.Title level={2}>컴포넌트 카테고리</Typography.Title>
      <div className="playground__inner">
        <ol className="playground__components">
          {menuData.map((section) => (
            <li key={section.category}>
              <Typography.Title level={4} titleColor="gray600">
                {section.category}
              </Typography.Title>
              <ul>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Button.Link href={item.href}>{item.label}</Button.Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* 6) 사용 라이브러리 */}
      <Typography.Title level={2}>사용 라이브러리</Typography.Title>
      <div className="playground__inner">
        <ul>
          {meta.libraries.map((lib) => (
            <li key={lib.name}>
              <strong>{lib.name}</strong>: {lib.licenseName} 라이선스 - {lib.author}
              <br />
              {lib.desc}
              <br />
              <Link href={lib.github}>GitHub</Link> {' | '}
              <Link href={lib.licenseUrl}>{lib.licenseName} License</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 7) 아이콘 출처 */}
      <Typography.Title level={2}>아이콘 출처</Typography.Title>
      <div className="playground__inner">
        <ul>
          <li>{meta.icons.note}</li>
          <li>
            Collection: <Link href={meta.icons.collectionUrl}>{meta.icons.collectionLabel}</Link>
          </li>
          <li>
            License: <Link href={meta.icons.licenseUrl}>{meta.icons.licenseName}</Link>
          </li>
          <li>
            Author: <Link href={meta.icons.authorUrl}>{meta.icons.authorLabel}</Link>
          </li>
        </ul>
        <Typography.Text>CC BY 조건에 따라, 저작자 표시를 위해 위와 같이 출처를 명시합니다.</Typography.Text>
      </div>

      {/* 8) 라이선스 */}
      <Typography.Title level={2}>라이선스</Typography.Title>
      <div className="playground__inner">
        <Typography.Text>
          이 프로젝트는 <strong>{meta.license.project} License</strong>를 따릅니다.
          <br />
          {meta.license.notice}
        </Typography.Text>
      </div>
    </div>
  );
}
