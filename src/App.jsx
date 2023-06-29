import React, {useState, useEffect} from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [data , setData] = useState("Ram"); 
  useEffect( ()=>{
    console.log("component mounted")
  }, [data, count])

  function changeCount(){
    return setCount(count + 1);
}
  function changeData(){
    return setData("seeta");
  }
return (
    <div className="App">
      <h1>Button clicked {count} times {data} </h1>
      <button onClick={changeCount}>click Me</button>
      <button onClick={changeData}>updateData</button>
      
    </div>
  )
}
export default App;
