import React, { useState } from 'react';

const ArrayChange = () => {
    const [humans, setHumans] = useState({"kim":100, "lee":200});
    
    const addScoreEvent = () => {
        setHumans({...humans, park:300});
    }

    return  (
        <>
            <button onClick={addScoreEvent}> 성적추가하기 </button>
            <div> 성적 목록 : {humans.park} </div>
        </>
    );
}

export default ArrayChange;