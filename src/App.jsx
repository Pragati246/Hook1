import React, {useState} from 'react'

// function initialValue(){
//   connsole.log("function called!")
//   return 0;
// }

function App() {
  /*create a var */
  // let a = "Dipesh";
  const [name, setName] = useState("Dipesh");
  // use in boolean
  const [flag, setFlag] = useState("false");
  // use in numbers
  // const [steps, setSteps] = useState(initialValue())
  const [steps, setSteps] = useState(() =>{
    console.log("clicked")
  return 0;
  });
  // use in name 
  const [names, setNames] = useState([]);
  function changeName(){
    console.log("clicked");
    // return setName("Nitesh");
    return setFlag(!flag);
}
function increment() {
  console.log("clicked")
  setSteps((prevState) => prevState + 2)
  // setSteps((prevState) => prevState + 1)
  // return setSteps(steps + 1);
}
function decrement() {
  console.log("clicked")
  return setSteps(steps - 1);
}
function addNames(e){
  e.preventDefault();
  setNames([...names, {id:names.length,name}]);
  setName("") 
}
return (
    <div className="App">
      <h1>Hello , {flag ? name : " "} </h1>
      <button onClick={changeName}>click Me</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input type="text"
        value={name}
        placeholder="add names"
        onChange={ (e) => setName(e.target.value)}></input>
        <button>Submit</button>
      </form>
      {/* for display names which we added after clicking on submit button */}
      <ul>
        {names.map((items) =>(
          <li key = {items.id}>{items.name}</li>
        ))}
      </ul>
      
    </div>
  )
}
export default App;
