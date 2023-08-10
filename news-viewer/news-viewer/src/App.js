import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
//   const [data, setData] = useState();
//   const url = 'https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=8008acdbaf4f433db650020b293108fd';

//   const onClick = () => {
    
//     // axios도 fetch처럼 요청 주소를 집어넣을 수 있음.
//     // 단, axios는 fetch와 달리 axios.요청메서드(주소).then(콜백함수); 양식으로 작성함.

//     axios.get(url)
//       .then(res => {
//         setData(res.data);
//       });
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
      
//       {/* and 연산자를 썼기 때문에, data 상태변수가 null이 아닌 경우만 true && ture가 되어 뒤쪽 태그가 화면에 나타남. */} 
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}

//     </div>
    
//   );
// }

const [category, setCategory] = useState('all');
const onSelect = useCallback(category => setCategory(category), []);    // 카테고리 값이 바뀔 때만, 화면을 다시 렌더링해라

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
}

export default App;
