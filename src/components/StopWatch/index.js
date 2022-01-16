import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from 'react';
import { Wrapper } from './StopWatch.styles';
import Timer from '../Timer';

const StopWatch = forwardRef(({ bestTime }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
      if (localStorage.getItem('best-time') === null && time !== 0) {
        localStorage.setItem('best-time', time);
      } else if (time < bestTime && time !== 0) {
        localStorage.setItem('best-time', time);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, bestTime, time]);

  useImperativeHandle(ref, () => ({
    handleStart() {
      setIsActive(true);
      setIsPaused(false);
    },

    handlePause() {
      setIsPaused(true);
    },

    handleReset() {
      setIsActive(false);
      setTime(0);
    },
  }));

  return (
    <Wrapper className='timer-container'>
      <Timer time={time} />
    </Wrapper>
  );
});

export default StopWatch;
