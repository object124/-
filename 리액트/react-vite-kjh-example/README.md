https://sung-98.tistory.com/114

1. 아래의 명령어로 프로젝트 생성
npm create vite@latest my-project -- --template react

프리티어설정(프리티어는 주석 문법 없음)
{

"printWidth": 120,  // 한 줄의 최대 길이를 100자로 제한
"tabWidth": 2,  // 들여쓰기 크기를 2칸으로 설정
"trailingComma": "all",  // 모든 곳에서 마지막 요소 뒤에 쉼표 추가
"singleQuote": true,  // 문자열에 작은 따옴표(') 사용
"jsxSingleQuote": true,  // JSX에서 작은 따옴표(') 사용
"semi": false  // 세미콜론을 사용하지 않음
}

├─ src │ ├─ assets // 정적 파일들을 모아두는 폴더 │ ├─ apis // api들을 모아두는 폴더 │ ├─ components // 공통 컴포넌트들을 모아두는 폴더 │ ├─ contexts // context api들을 모아두는 폴더 │ ├─ hooks // 커스텀 훅을 모아두는 폴더 │ ├─ models // 모델을 모아두는 폴더 │ ├─ stores // global state의 store을 모아두는 폴더 │ ├─ styles // 스타일을 모아두는 폴더 │ ├─ types // 타입에 대한 정의를 모아두는 폴더 │ ├─ pages // 페이지들을 모아두는 폴더

https://github.com/moseskim/book-react-code => 예제코드

https://seungineer.tistory.com/46 => ES6 문법