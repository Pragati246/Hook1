import React, {useState, useEffect} from 'react'

function FComponenet() {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional component");

    useEffect( () => {
        console.log("component mounted or updated");
        const interval = setInterval(showDate, 1000);
        return () => {
            console.log("clean up")
            clearInterval(interval)
        }
    }, [time])

    const showDate = () => {
        setTime(new Date().toString());
    };

  return (
    <div>
        <div>{time}</div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button onClick={() => setMessage("changed functional component")}>change message</button>
      
    </div>
  )
}

export default FComponenet;
