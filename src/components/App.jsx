import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [newTime, setTime] = useState(time);

  function showTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
