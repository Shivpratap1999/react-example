import { useAppDispatch,useAppSelector } from '../app/hooks';
import { incremented,decremented,reset } from '../features/counter/counter-slice';

function Counter() {
    const counter = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const handleIncrement = () => {
        dispatch(incremented());
    };
    const handleDecrement = () => {
        dispatch(decremented());
    };
    const handleReset = () => {
        dispatch(reset())
    };
    return (
        <div className="counter-container">
            <h2 className="count-display">{counter}</h2>
            <button className="counter-button" onClick={handleDecrement}>Decrement</button>
            <button className="counter-button" onClick={handleReset}>Reset</button>
            <button className="counter-button" onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default Counter;
