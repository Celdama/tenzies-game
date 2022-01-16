import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { nanoid } from 'nanoid';
import Die from './components/Die';
import Confetti from 'react-confetti';
import StopWatch from './components/StopWatch';
import Timer from './components/Timer';

function App() {
  const StopWatchCompRef = useRef();
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [bestTime, setBestTime] = useState(
    () => localStorage.getItem('best-time') || 0
  );

  const { width, height } = useWindowSize();
  console.log(width);
  console.log(height);

  useEffect(() => {
    const allHeld = dice.every(({ isHeld }) => isHeld);
    const firstValue = dice[0].value;
    const allEqual = dice.every(({ value }) => value === firstValue);

    if (allHeld && allEqual) {
      setTenzies(true);
      console.log('You won!');
      StopWatchCompRef.current.handlePause();
      setBestTime(() => localStorage.getItem('best-time'));
    }
  }, [dice, bestTime]);

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }

    return newDice;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
      setRollCount(0);
      StopWatchCompRef.current.handleReset();
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return !die.isHeld ? generateNewDie() : die;
        })
      );
      StopWatchCompRef.current.handleStart();
      setRollCount((oldRollCount) => oldRollCount + 1);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map(({ id, value, isHeld }) => (
    <Die
      key={id}
      number={value}
      isHeld={isHeld}
      holdDice={() => holdDice(id)}
    />
  ));

  return (
    <main className='App'>
      {tenzies && <Confetti width={width} height={height} />}
      <h1 className='title'>Tenzies</h1>
      <div className='game-information'>
        <span className='record'>
          {bestTime !== 0 ? <Timer time={bestTime} /> : 'No best time'}
        </span>
        <p className='count'>
          {rollCount} roll{rollCount > 0 ? 's' : ''}
        </p>
        <StopWatch ref={StopWatchCompRef} bestTime={bestTime} />
      </div>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>{diceElements}</div>
      <button onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  );
}

export default App;
