import { useState } from 'react';
import Die from './components/Die.js';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }

    return newDice;
  }

  const rollDice = () => {
    setDice(allNewDice());
  };

  const diceElements = dice.map((die, index) => (
    <Die key={index} number={die} />
  ));

  return (
    <main className='App'>
      <div className='dice-container'>{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
