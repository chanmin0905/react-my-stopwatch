import React from "react";

const DispalyWindow = ({time}) => {
  return (
    <div>
      <span id="minute">{time.minute >= 10 ? time.minute : "0" + time.minute}:</span>
      <span id="second">{time.second >= 10 ? time.second : "0" + time.second}.</span>
      <span id="miliSecond">{time.miliSecond >= 10 ? time.miliSecond : "0" + time.miliSecond}</span>
    </div>
  );
};

export default DispalyWindow;
