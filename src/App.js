import Die from './components/Die.js';

function App() {
  const allNewDice = () => {
    const randomValues = [];
    for (let i = 0; i < 10; i++) {
      const randomInt = Math.floor(Math.random() * (6 - 1 + 1) + 1);

      randomValues.push(randomInt);
    }

    return randomValues;
  };

  const value = allNewDice();

  const dieElements = value.map((die, index) => {
    return <Die key={index} number={die} />;
  });

  return (
    <main className='App'>
      <div className='dies'>{dieElements}</div>
    </main>
  );
}

export default App;
