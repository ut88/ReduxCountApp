import classes from './Counter.module.css';
import {counterAction} from './store/Index'
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch();
 const counter= useSelector(state=>state.counter.counter);
 const show=useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };
  const incrementHandler=()=>{
    dispatch(counterAction.increament())
  }
  const decrementHandler=()=>{
    dispatch(counterAction.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
