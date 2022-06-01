import React from "react";

const Buttons = ({start, stop, reset, lap}) => {
  return (
    <div>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESET</button>
      <button onClick={lap}>LAP</button>
    </div>
  );
};

export default Buttons;
