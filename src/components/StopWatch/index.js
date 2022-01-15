import React, { useState, useEffect } from 'react';
import Timer from '../Timer';

const StopWatch = ({ startTimer }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
      console.log('here');
      console.log(`your time is ${time}`);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTimer]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
      <Timer time={time} />

      {/* <button onClick={handleReset}>stop</button> */}
    </div>
  );
};

export default StopWatch;
