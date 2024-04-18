
import './App.css';
import { useState } from 'react';
function App() {
  let [count,setcount] =useState(1)
  // if(count<0){
  //   count=0
  // }
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setcount(count+=1)}>increment</button>
      <button onClick={()=>setcount(count<= 0 ?count=0:count-=1)}>decrement</button>
      <button onClick={()=>setcount(count=0)}>return</button>
    </div>
  );
}

export default App;
