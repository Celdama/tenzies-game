import Die from './components/Die.js';

function App() {
  return (
    <main className='App'>
      <div className='dies'>
        <Die number={1} />
        <Die number={4} />
        <Die number={3} />
        <Die number={1} />
        <Die number={1} />
        <Die number={4} />
        <Die number={3} />
        <Die number={1} />
        <Die number={3} />
        <Die number={1} />
      </div>
    </main>
  );
}

export default App;
