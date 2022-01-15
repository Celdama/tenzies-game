import { useState, useEffect } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import StopWatch from './components/StopWatch';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    const allHeld = dice.every(({ isHeld }) => isHeld);
    const firstValue = dice[0].value;
    const allEqual = dice.every(({ value }) => value === firstValue);

    if (allHeld && allEqual) {
      setTenzies(true);
      console.log('You won!');
      setStartTimer(false);
    }
  }, [dice]);

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
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return !die.isHeld ? generateNewDie() : die;
        })
      );
      setStartTimer(true);
    }
    setRollCount((oldRollCount) => oldRollCount + 1);
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
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <div className='game-information'>
        {rollCount} roll{rollCount > 0 ? 's' : ''}
        <StopWatch startTimer={startTimer} />
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
