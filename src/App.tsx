import './App.css';
import PeopleList from './hooks/PeopleList';
import useCounter from './hooks/useCounter';

function App() {
  const number = useCounter(9);
  return (
    <div className='App'>
      {number}
      <PeopleList />
      <PeopleList />
    </div>
  );
}

export default App;
