import React, {useState} from "react";
import DispalyWindow from "./components/DispalyWindow";
import Buttons from "./components/Buttons";
import Lap from "./components/Lap";

import "./App.css";

function App() {
  const [time, setTime] = useState({
    minute: 0,
    second: 0,
    miliSecond: 0,
  });

  const [interv, setInterv] = useState(0);

  const [recodeList, setRecodeList] = useState([]);

  let updatedMinute = time.minute;
  let updatedSecond = time.second;
  let updatedMiliSecond = time.miliSecond;

  const runTime = () => {
    if (updatedMinute === 60) {
      updatedMinute = 0;
    }
    if (updatedSecond === 60) {
      updatedMinute++;
      updatedSecond = 0;
    }
    if (updatedMiliSecond === 100) {
      updatedSecond++;
      updatedMiliSecond = 0;
    }

    updatedMiliSecond++;
    return setTime({
      minute: updatedMinute,
      second: updatedSecond,
      miliSecond: updatedMiliSecond,
    });
  };

  const handleStart = () => {
    // console.log("Start");
    runTime();
    setInterv(setInterval(runTime, 10));
  };

  const handleStop = () => {
    // console.log("Stop");
    clearInterval(interv);
  };

  const handleReset = () => {
    // console.log("Reset");
    clearInterval(interv);
    setTime({
      minute: 0,
      second: 0,
      miliSecond: 0,
    });
    setRecodeList([]);
  };

  const handleLap = () => {
    // console.log("Lap");
    setTime({
      minute: updatedMinute,
      second: updatedSecond,
      miliSecond: updatedMiliSecond,
    });

    setRecodeList((prevTime) => [...prevTime, time]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>STOPWATCH</h1>
        <DispalyWindow time={time} />
        <Buttons start={handleStart} stop={handleStop} reset={handleReset} lap={handleLap} />
        <Lap time={time} recodeList={recodeList} />
      </div>
    </div>
  );
}

export default App;
