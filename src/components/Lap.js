import React from "react";

const Lap = ({recodeList}) => {
  return (
    <div>
      {recodeList &&
        recodeList.map((recode, i) => {
          return (
            <li key={i}>
              <span id="rank">{i + 1}. </span>
              <span id="minute">{recode.minute >= 10 ? recode.minute : "0" + recode.minute}:</span>
              <span id="second">{recode.second >= 10 ? recode.second : "0" + recode.second}.</span>
              <span id="miliSecond">
                {recode.miliSecond >= 10 ? recode.miliSecond : "0" + recode.miliSecond}
              </span>
            </li>
          );
        })}
    </div>
  );
};

export default Lap;
