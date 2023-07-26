import React, { useState } from 'react';

const IterationSample2 = () => {
    const [names, setNames] = useState([                        // 객체가 들어있는 배열
                                        {id:1, text:"눈사람"},
                                        {id:2, text:"얼음"},
                                        {id:3, text:"눈"},
                                        {id:4, text:"바람"},
                                    ]);
    
    const [inputText, setInputText] = useState('');
    const [nextId, setnextId] = useState(5);

    const handleInputTextChange = (e) => {
        setInputText(e.target.inputText);
    }

    const handleClick = () => {
        setNames([...names, {id:nextId, text:inputText}]);
        setnextId(nextId + 1);
    }

    const onDoubleClickComponent = (id) => {
        setNames(names.filter(name => name.id !== id));
    }

    const namesList = names.map(name => 
                            <li key={name.id}> onDoubleClick={() => onDoubleClickComponent(name.id)}
                                {name.text}
                            </li>
                            );

    return (
    <>
        <input
                type='text'
                value={inputText}
                onChange={handleInputTextChange}
        />

        <button onClick={handleClick}>목록에 추가</button>


        <ul>{namesList}</ul>
    </>
    );
}

export default IterationSample2;