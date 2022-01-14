import { useState } from 'react';
import Die from './components/Die.js';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
      });
    }

    return newDice;
  }

  const rollDice = () => {
    setDice(allNewDice());
  };

  const holdDice = (id) => {
    console.log(id);
  };

  const diceElements = dice.map(({ id, value, isHeld }) => (
    <Die key={id} id={id} number={value} isHeld={isHeld} holdDice={holdDice} />
  ));

  return (
    <main className='App'>
      <div className='dice-container'>{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
