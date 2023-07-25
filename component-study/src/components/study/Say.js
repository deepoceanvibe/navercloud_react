import React, { useState } from 'react';

const Say = (props) => {
    // 리액트에서는 화면단을 바꾸는게 불가능하므로, state를 사용한다
    const [msg, setMsg] = useState(props.msg);

    // 클릭하면 "안녕" -> "사왓디크랍" 으로 바꾼다
    const onClickEvent = () => {
        setMsg("사왓디크랍");
    }
    
    return (
        <div>
             {/*이벤트 바인딩 시, 카멜케이스로 변형해야 함 on이벤트명={위에서선언한함수}*/}
            <button onClick={onClickEvent}>인사 변경하기</button>
            <div>인사하겠습니다 : {msg}</div>
        </div>
    )
}

export default Say;