// import logo from './logo.svg';
import {useState} from 'react';
import Child from './Child';

import './App.css';

function App() {
  const[parentAge, setParentAge] = useState(0);

  const incrementParentAge =()=>{
    setParentAge(parentAge + 1);
  };

  return (
    <div style={{ border: '2px solid navy', padding: '10px'}}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick ={incrementParentAge}>부모 나이 증가 </button>
      <Child />


    </div>
  );
}

export default App;
