import React, {useState, useEffect} from 'react'
import FComponenet from './Component/FComponenet';

function App() {
  const [flag, setFlag] = useState(true);
return (
    <div className="App">
      <div>
        <button onClick= {() => setFlag(!flag)}>Toggle Function Component</button>
      </div>
      {flag ? <FComponenet/> : "" }
      
    </div>
  )
}
export default App;
