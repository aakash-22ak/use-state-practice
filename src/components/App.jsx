import React, { useState } from 'react'


function App(){

  setInterval(currentTime, 1000)

  let cTime=new Date().toLocaleTimeString();
  const [time, setTime]=useState(cTime);
  function currentTime(){
    let cTime=new Date().toLocaleTimeString();
    setTime(cTime)
  }
  return <div className='container'>
    <h1>{time}</h1>
    <button onClick={currentTime}>Get Time</button>
  </div>
}
  
export default App
