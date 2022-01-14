import { useState } from 'react';
import Die from './components/Die.js';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

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
    setDice((oldDice) =>
      oldDice.map((die) => {
        return !die.isHeld ? generateNewDie() : die;
      })
    );
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
      <div className='dice-container'>{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
