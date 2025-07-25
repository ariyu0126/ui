'use client';

import { useState } from 'react';
import { SourceCodeViewer } from "@/components";
import '@/styles/pages/playground.scss';
import { buildPageMetadata } from '@/lib/seo';


const code = `
  /src
        /app
          layout.jsx               // 공통 레이아웃
          page.jsx                 // 인덱스페이지
          /layout
            skipNav.jsx            // 접근성 건너뛰기 링크
            /header
              logo.jsx
              SearchInput.jsx
            /sidebar
              navMenu.jsx
              menuItem.jsx
              notice.jsx
            footer.jsx
        /components                // 공통 UI 컴포넌트
        /styles                    // SCSS
        /[router]
          /page
            content.jsx            // 예시 페이지
      /lib                         // 유틸, API, hooks
      /public                      //정적 자원
      /styles
        /abstracts
          _variables.scss          // 색상, 폰트, 여백 등 변수 정의
          _mixins.scss             // 반복되는 스타일 구조 (ex. flex 정렬)
          _functions.scss          // 간단한 SCSS 함수
          _media.scss              // 반응형 유틸 (ex. media query mixin)
        /base
          _normalize.scss             // 리셋
          _typography.scss        // 기본 폰트 스타일
          _animations.scss        // 공통 애니메이션
        /components
          _button.scss            // Button 컴포넌트 전용 스타일
          _input.scss
        /layout
          _header.scss            // Header 레이아웃
          _footer.scss
          _grid.scss
        /pages
          _home.scss              // 페이지별 스타일
          _about.scss
        /themes
          _light.scss             // 다크모드/라이트모드 테마 변수 분리
          _dark.scss
        main.scss                 // 전역 SCSS
`;

const Home = () => {
  return (
    <div className="playground playground--home">
      <h1>Home</h1>
      <h2>Next.js + React + SCSS 구조 가이드</h2>
      <h3>1. 기본 구조</h3>
      <ol>
        <li>1. app 디렉토리 중심 구조</li>
        <li>2. 중첩 레이아웃 지원 (페이지마다 layout.jsx)</li>
      </ol>
      <SourceCodeViewer btnText="구조" code={code} hidden={false} />
      <pre>
        
      </pre>
    
      <h3>2. 디자인 규칙</h3>
      <ol>
        <li>1. 반응형 사이즈 지정 : mo 768 / tab 1024 / pc 1280</li>
        <li>2. Spacing : padding, margin은 4px 단위</li>
        <li>3. Font : NotoSans</li>
        <li>4. Color</li>
      </ol>
      <h3>3. 클래스 규칙</h3>
      <ol>
        <li>1. is-open</li>
        <li>2. has-child</li>
        <li>3. is-active : 버튼 클릭시 추가 클래스</li>
      </ol>
      <h3>4. SCSS스타일 : BEM</h3>
      <h3>5. 컴포넌트 목록</h3>
      <ol>
        <li>1. color</li>
        <li>2. typography</li>
        <li>3. flex</li>
        <li>4. grid</li>
        <li>5. input - text, number, password, error, disabled</li>
        <li>6. Button - size, icon, align, color, disabled, style</li>
        <li>7. toggle switch</li>
        <li>8. Checkbox - normal, group, checked, error, disabled</li>
        <li>9. Radio - normal, group, checked, error, disabled</li>
        <li>10. Select - size, color, disabled</li>
        <li>11. dropdown</li>
        <li>12. Textarea</li>
        <li>13. Form</li>
        <li>14. table</li>
        <li>15. tab</li>
        <li>16. progressbar</li>
        <li>17. notification</li>
        <li>18. pagination</li>
        <li>19. loading</li>
        <li>20. alert</li>
        <li>21. modal</li>
      </ol>
      <h3>6. 접근성</h3>
      <ol>
        <li>1. 키보드 이벤트</li>
          <ul>
            <li>- `Tab`, `Shift+Tab`, `Enter`, `Esc`, `Arrow 키` 모두 고려</li>
            <li>- 커스텀 요소는 `tabIndex="0"`으로 초점 가능하게 만들기</li>
            <li>- 초점 가능한 요소는 `:focus` 스타일 필수 (outline 제거 시 `:focus-visible` 등 추가 처리)</li>
            <li>- `aria-label` 없는 버튼/링크 금지</li>
            <li>- 커스텀 버튼은 `role="button"` + `tabIndex="0"` + `onKeyDown` 필수</li>
            <li>- outline 제거 금지 or focus-visible 스타일 대체 필수</li>
            {/* - 모든 컴포넌트 PR 머지 전 Lighthouse 점검 */}
          </ul>
      </ol>

      <h3>참고 사이트</h3>
      <a href="https://mui.com/material-ui/all-components/" target="_blank">https://mui.com/material-ui/all-components/</a><br />
      <a href="https://ant.design/components/button" target="_blank">https://ant.design/components/button</a><br />
      <a href="https://animata.design/docs/button" target="_blank">https://animata.design/docs/button</a><br />
      <a href="https://www.figma.com/community/file/1157761560874207208/v11-carbon-design-system" target="_blank">https://www.figma.com/community/file/1157761560874207208/v11-carbon-design-system</a>
    </div>
  );
}

export default Home;