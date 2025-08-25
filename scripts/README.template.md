# {{package.name}}

이 저장소는 다양한 UI 컴포넌트를 포함하고 있으며, npm을 통해 쉽게 설치하고 사용할 수 있습니다.

## 설치

```bash
{{install.npm}}
```

## 사용법

각 컴포넌트는 개별적으로 가져와 사용할 수 있습니다. 예를 들어, `Button` 컴포넌트를 사용하려면 다음과 같이 작성합니다:

```jsx
{{quickStart}}
```

## 스타일 불러오기
```jsx
{{package.stylesImport}}
```

## 필수 환경
Node.js: {{requirements.node}} 권장
React / ReactDOM: {{requirements.react}}

## Peer Dependencies
{{package.peerDepsInstall}}

## 컴포넌트 목록

{{#componentsByCategory}}
- **{{category}}**: {{items.join(', ')}}.{{/componentsByCategory}}

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

{{#libraries}}
- **{{name}}**: {{licenseName}} 라이센스 - {{author}}
  - {{desc}}
  - [GitHub]({{github}}) | [{{licenseName}} License]({{licenseUrl}})

{{/libraries}}

## 참고 사이트

- **UI Component**: [MUI]({{references.mui}}), [Ant Design]({{references.antd}}), [Animata]({{references.animata}}), [Shadcn]({{references.shadcn}})


## 아이콘 출처

{{icons.note}}
- Collection: {{icons.collectionLabel}}
- License: [{{icons.licenseName}}]({{icons.licenseUrl}})
- Author: {{icons.authorLabel}}
- Source: [{{icons.collectionLabel}} Collection]({{icons.collectionUrl}})
- CC BY 조건에 따라, 저작자 표시를 위해 위와 같이 출처를 명시합니다.

## 예시 사이트

프로젝트의 컴포넌트를 실제로 확인하고 싶다면 [{{demo.label}}]({{demo.url}})를 방문해 보세요. 이 사이트에서는 다양한 컴포넌트의 사용 예시를 직접 확인할 수 있습니다.

## 라이선스

이 프로젝트는 {{license.project}} 라이선스를 따릅니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.
{{license.notice}}