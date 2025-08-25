# @ure0126/basic-ui-components

이 저장소는 다양한 UI 컴포넌트를 포함하고 있으며, npm을 통해 쉽게 설치하고 사용할 수 있습니다.

## 설치

```bash
npm i @ure0126/basic-ui-components
```

## 사용법

각 컴포넌트는 개별적으로 가져와 사용할 수 있습니다. 예를 들어, `Button` 컴포넌트를 사용하려면 다음과 같이 작성합니다:

```jsx
import '@ure0126/basic-ui-components/dist/styles/main.css';
import { Button } from '@ure0126/basic-ui-components';

export default function Example() {
  return <Button>Click Me</Button>;
}
```

## 스타일 불러오기
```jsx
import '@ure0126/basic-ui-components/dist/styles/main.css';
```

## 필수 환경
Node.js: >=18 권장
React / ReactDOM: >=18

## Peer Dependencies
npm i react react-dom

## 컴포넌트 목록


- **Flex/Grid**: 레이아웃을 위한 플렉스 및 그리드 컴포넌트.

- **Color**: 색상 관련 컴포넌트.

- **Typography**: 텍스트 스타일링을 위한 컴포넌트.

- **Button**: 다양한 스타일과 크기를 지원하는 버튼 컴포넌트.

- **Input**: 텍스트 입력을 위한 컴포넌트.

- **Textarea**: 여러 줄 입력을 위한 컴포넌트.

- **Radio**: 라디오 버튼 컴포넌트.

- **Checkbox**: 체크박스 컴포넌트.

- **Selectbox**: 드롭다운 선택 박스 컴포넌트.

- **Toggle**: 토글 버튼 컴포넌트.

- **Table**: 데이터 테이블 컴포넌트.

## 프로젝트 구조

- **app**: 공통 레이아웃과 페이지 구성
- **components**: 공통 UI 컴포넌트
- **styles**: SCSS 스타일 파일
- **lib**: 유틸리티, API, hooks
- **public**: 정적 자원

## 디자인 규칙

- **반응형 사이즈**: 모바일 768px, 태블릿 1024px, PC 1280px
- **Spacing**: 패딩과 마진은 4px 단위
- **Font**: NotoSans 사용

## 클래스 규칙

- **is-open**: 열림 상태
- **has-child**: 자식 요소 포함
- **is-active**: 활성화 상태

## 사용 라이브러리


- **clsx**: MIT 라이센스 - Luke Edwards (lukeed.com)
  - 조건부 클래스명 결합 유틸리티
  - [GitHub](https://github.com/lukeed/clsx) | [MIT License](https://github.com/lukeed/clsx/blob/master/license)



## 참고 사이트

- **UI Component**: [MUI](https://mui.com/material-ui/all-components/), [Ant Design](https://ant.design/components/button), [Animata](https://animata.design/docs/button), [Shadcn](https://ui.shadcn.com/docs)


## 아이콘 출처

이 프로젝트에 포함된 일부 아이콘은 Dazzle UI의 작품을 사용합니다.
- Collection: Dazzle Line Icons
- License: [CC BY 4.0](https://www.svgrepo.com/page/licensing/#CC%20Attribution)
- Author: Dazzle UI
- Source: [Dazzle Line Icons Collection](https://www.svgrepo.com/collection/dazzle-line-icons/)
- CC BY 조건에 따라, 저작자 표시를 위해 위와 같이 출처를 명시합니다.

## 예시 사이트

프로젝트의 컴포넌트를 실제로 확인하고 싶다면 [ure-ui 예시 사이트](https://ure-ui.netlify.app/)를 방문해 보세요. 이 사이트에서는 다양한 컴포넌트의 사용 예시를 직접 확인할 수 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.
단, 포함된 아이콘 및 외부 리소스는 각 리소스의 라이선스를 따릅니다.