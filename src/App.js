import { useState } from 'react';
import Die from './components/Die.js';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      let dice = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      };
      newDice.push(dice);
    }

    return newDice;
  }

  const rollDice = () => {
    setDice(allNewDice());
  };

  const diceElements = dice.map(({ value }, index) => (
    <Die key={index} number={value} />
  ));

  return (
    <main className='App'>
      <div className='dice-container'>{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
