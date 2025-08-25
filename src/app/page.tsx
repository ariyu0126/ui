'use client';

import Link from 'next/link';
import { menuData } from './layout/Sidebar';
import { useState } from 'react';
import { SourceCodeViewer, Typography, Button } from '../components';
import '../styles/pages/playground.scss';

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
      <Typography.Title>@ure0126/basic-ui-components</Typography.Title>
      <Typography.Title level={2}>Next.js + React + SCSS 구조 가이드</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1. 기본 구조</Typography.Title>
        <div className="playground__inner-box">
          <ol>
            <li>1. app 디렉토리 중심 구조</li>
            <li>2. 중첩 레이아웃 지원 (페이지마다 layout)</li>
          </ol>
          <SourceCodeViewer btnText="구조" code={code} hidden={false} />
        </div>

        <Typography.Title level={3}>2. 디자인 규칙</Typography.Title>
        <div className="playground__inner-box">
          <ol>
            <li>1. 반응형 사이즈 지정 : mo 768 / tab 1024 / pc 1280</li>
            <li>2. Spacing : padding, margin은 4px 단위</li>
            <li>3. Font : NotoSans</li>
          </ol>
        </div>

        <Typography.Title level={3}>3. 클래스 규칙</Typography.Title>
        <div className="playground__inner-box">
          <ol>
            <li>1. is-open</li>
            <li>2. has-child</li>
            <li>3. is-active : 버튼 클릭시 추가 클래스</li>
          </ol>
        </div>

        <Typography.Title level={3}>4. SCSS스타일 : BEM</Typography.Title>

        <Typography.Title level={3}>5. 컴포넌트 목록</Typography.Title>
        <div className="playground__inner-box">
          <ol>
            {menuData
              .flatMap((section) => section.items)
              .map((item, index) => (
                <li key={item.href}>
                  <Button.Link href={item.href} style="text">
                    {index + 1}. {item.label}
                  </Button.Link>
                </li>
              ))}
          </ol>
        </div>

        {/* <Typography.Title level={3}>6. 접근성</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>키보드 이벤트</Typography.Text>
          <ul>
            <li>- `Tab`, `Shift+Tab`, `Enter`, `Esc`, `Arrow 키` 모두 고려</li>
            <li>- 커스텀 요소는 `tabIndex="0"`으로 초점 가능하게 만들기</li>
            <li>
              - 초점 가능한 요소는 `:focus` 스타일 필수 (outline 제거 시 `:focus-visible` 등 추가
              처리)
            </li>
            <li>- `aria-label` 없는 버튼/링크 금지</li>
            <li>- 커스텀 버튼은 `role="button"` + `tabIndex="0"` + `onKeyDown` 필수</li>
            <li>- outline 제거 금지 or focus-visible 스타일 대체 필수</li>
          </ul>
        </div> */}

        <Typography.Title level={3}>7. 사용 라이브러리</Typography.Title>
        <div className="playground__inner-box">
          {/* <Typography.Text>- react-hook-form</Typography.Text>
          <a href="https://react-hook-form.com/docs/useform" target="_blank">
            https://react-hook-form.com/docs/useform
          </a>
          <br />
          <br /> */}
          <Typography.Text>- clsx</Typography.Text>
          <Button.Link href="https://github.com/lukeed/clsx" target="_blank" style="text">
            https://github.com/lukeed/clsx
          </Button.Link>
        </div>

        <Typography.Title level={3}>참고 사이트</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>- UI Component</Typography.Text>
          <Button.Link
            href="https://mui.com/material-ui/all-components/"
            target="_blank"
            style="text"
          >
            https://mui.com/material-ui/all-components/
          </Button.Link>
          <br />
          <Button.Link href="https://ant.design/components/button" target="_blank" style="text">
            https://ant.design/components/button
          </Button.Link>
          <br />
          <Button.Link href="https://animata.design/docs/button" target="_blank" style="text">
            https://animata.design/docs/button
          </Button.Link>
          <br />
          <Button.Link href="https://ui.shadcn.com/docs" target="_blank" style="text">
            https://ui.shadcn.com/docs
          </Button.Link>
          <br />
          <br />
          <Typography.Text>- SVG</Typography.Text>
          <Button.Link
            href="https://www.svgrepo.com/svg/533594/arrow-narrow-bottom-alignment"
            target="_blank"
            style="text"
          >
            SVG REPO
          </Button.Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
