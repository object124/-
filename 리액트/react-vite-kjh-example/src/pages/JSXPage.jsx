import React from 'react'

//컴포넌트 = js +xml (html) 문법 =jsx
//jsx는 html과 js를 조합한 문법

// 반드시 부모 태그가 있어야함
// 버츄얼 돔에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록 
// 컴포넌트 내부는 하나의 돔 트리 구조로 이루어져야
// 변수 사용시 {} = 표현식 문법 = 식이 값으로 평가될 수 있는 문법
// 조건문(if) 사용시 삼항연산자 사용
// class 대신 className
// react dom은 HTML 어트리뷰트 이름 대신 camelcase 프로퍼티 명명 규칙 사용

const JSXPage = () => {
    const name= '리액트'
    const color= 'red'
    const isLogin= true
    const style = {
        backgroundColor: 'green',
        fontSize: "32px"
    }

//return  (<>{isLogin ?<div>로그인 되었습니다.</div> : <div>로그인이 필요합니다.</div>}</>)}
return(
    <>
    <div className = "d-flex" style = {style}>안녕하세요</div>
    </>
)
}

export default JSXPage