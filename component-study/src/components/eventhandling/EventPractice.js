import React, { useState } from 'react';

const EventPractice = () => {
    // 124p 클래스형 컴포넌트로 진행되는 내용을 함수형 컴포넌트로 재구성
    
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    function handleClick() {
        alert(username + ': ' + message);
        setUsername('')
        setMessage('')
    }

    const handleChange = (e) => {
        setUsername(e.target.name);
        setMessage(e.target.value);
    }


    return (
        <>
            <h1>이벤트 연습</h1>
            <input
                type='text'
                name='username'
                placeholder='유저명'
                value={username}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="message"
                placeholder='아무거나 입력하세요'
                value={message}
                onChange={handleChange}/>


                <button onClick={handleClick}>확인</button>
        </>
    );
}

export default EventPractice;