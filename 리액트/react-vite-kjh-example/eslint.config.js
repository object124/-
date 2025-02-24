import js from '@eslint/js' // ESLint의 기본 JavaScript 규칙들을 가져옴
import globals from 'globals' // 브라우저 전역 변수(예: window, document)를 허용
import react from 'eslint-plugin-react' // React 관련 ESLint 규칙 플러그인
import reactHooks from 'eslint-plugin-react-hooks' // React Hooks 관련 ESLint 규칙 플러그인
import reactRefresh from 'eslint-plugin-react-refresh' // React Fast Refresh 규칙 플러그인 (개발 중 핫 리로드 지원)
//import prettier from 'eslint-config-prettier' // Prettier 설정 추가
import prettierPlugin from 'eslint-plugin-prettier' // Prettier 플러그인 추가

export default [
  { ignores: ['dist'] }, // dist 디렉터리는 ESLint 검사에서 제외
  {
    files: ['**/*.{js,jsx}'], // 검사 대상 파일들 (JavaScript 및 JSX 파일)
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020 문법 지원
      globals: globals.browser, // 브라우저 환경 전역 변수를 허용
      parserOptions: {
        ecmaVersion: 'latest', // 최신 ECMAScript 문법 지원
        ecmaFeatures: { jsx: true }, // JSX 문법을 허용 (React에서 사용)
        sourceType: 'module', // ECMAScript 모듈(ESM) 사용
      },
    },
    settings: { react: { version: '18.3' } }, // React 버전을 자동 감지하고 설정
    plugins: {
      // React ESLint 플러그인
      react,
      'react-hooks': reactHooks, // React Hooks 플러그인
      'react-refresh': reactRefresh, // React Fast Refresh 플러그인
      prettier: prettierPlugin, // Prettier 플러그인 추가 = Prettier 규칙을 ESLint에서 실행할 수 있도록 합니다.
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint 추천 규칙 적용
      ...react.configs.recommended.rules, // React 추천 규칙 적용
      ...react.configs['jsx-runtime'].rules, // JSX 런타임 관련 규칙
      ...reactHooks.configs.recommended.rules, // React Hooks 추천 규칙 적용
      'react/jsx-no-target-blank': 'off', // target="_blank" 보안 경고 비활성화
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ], //추가 Prettier 규칙을 위반하면 ESLint에서 에러로 처리
    },
  },
]