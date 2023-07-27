import React, { useMemo, useState } from "react";

const getAverage = numbers => {
    console.log("평균값 계산 중 ..");

    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    // * useMemo *
    // 특정 상태변수의 값이 변경되었을 때만, 연산을 실행함 (연산 최적화)
    // list 배열 내용이 바뀔 때만 getAveage()를 호출한다.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
            <b>평균값 : </b> {avg}
            </div>
        </div>
    );
};

export default Average;