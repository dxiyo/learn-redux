import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn, logOut } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>you are logged in? {auth === true ? "Yes!" : "No."}</h1>
      {auth === true ? 
      (<button onClick={() => dispatch(logOut())}>Log Out</button>) : 
      (<button onClick={() => dispatch(logIn())}>Log In</button>)
      }
    </div>
  );
}

export default App;
