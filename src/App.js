import { useState } from 'react';
import Die from './components/Die.js';

function App() {
  const [allDice, setAllDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    console.log('rolling');

    return newDice;
  }

  const diceElements = allDice.map((die, index) => (
    <Die key={index} number={die} />
  ));

  return (
    <main className='App'>
      <div className='dice-container'>{diceElements}</div>
      <button onClick={() => setAllDice(allNewDice())}>Roll</button>
    </main>
  );
}

export default App;
