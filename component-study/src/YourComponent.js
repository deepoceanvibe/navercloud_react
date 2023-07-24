// import React from "react";      // 컴포넌트 선언 리액트 17버전부터 생략해도 됨

import { useState } from "react";

const YourComponent = (props) => {       // 부모쪽에서 전달받을 요소가 있다면, 괄호 안에 객체를 선언한다.
   const [country, setCountry] = useState(props.country);

   const onClickEvent = () => {
        setCountry("KOREA");
   }

    return (
        <div>
            <button onClick={onClickEvent}> 버튼 </button>
            <div>제 국적은 : {country}</div>
        </div>
    );
}

export default YourComponent;        // 작성된 함수형 컴포넌트 외부에서 쓸 수 있도록 내보내기