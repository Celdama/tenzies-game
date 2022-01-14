import { useState } from 'react';
import Die from './components/Die.js';

function App() {
  const [allDice, setAllDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }

    return newDice;
  }

  const dieElements = allDice.map((die, index) => {
    return <Die key={index} number={die} />;
  });

  return (
    <main className='App'>
      <div className='dies'>{dieElements}</div>
    </main>
  );
}

export default App;
