import React, {useState, useRef, useEffect} from 'react'

function App() {
  const refElement = useRef("");
  const [name, setName] = useState("Pragya");
  const [counter, setCounter] = useState(0);
  const previousCounterRef = useRef("")
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
  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);
  return (
    <div>
      <h1>Hellow</h1>
      <input ref={refElement}  autoComplete="off" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={Reset}>Reset</button>
      <div>My name is {name}</div>
      <button onClick={handleInput}>handle inputs</button>
      <div>
        <h1>Random Counter : {counter}</h1>
        {typeof previousCounterRef.current !== " " && (
        <h2>Previous Counter : {previousCounterRef.current}</h2>
        )}
        <button onClick={(e) => setCounter(Math.ceil(Math.random()*100))}>Generate Random Number</button>
      </div>
    </div>
  )
}

export default  App;
