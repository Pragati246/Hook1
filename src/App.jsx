import React, {useState, useRef} from 'react'

function App() {
  const refElement = useRef("");
  const [name, setName] = useState("Pragya");
  console.log(refElement);
  function Reset(){
    console.log("reset")
    setName(" ")
    // manipulate DOM directly using ref element
    // we have our current element under in ref Element
    refElement.current.focus();
  }
  function handleInput(){
    refElement.current.style.color="blue"
    refElement.current.style.backgroundColor="pink"
    refElement.current.value="jerry"
  }
  return (
    <div>
      <h1>Hellow</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle inputs</button>
    </div>
  )
}

export default  App;
