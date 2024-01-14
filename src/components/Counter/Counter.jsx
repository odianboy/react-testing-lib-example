import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterReducer";

export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid={'value-title'}>
               {value}
            </h1>
            <button data-testid={'increment-btn'} onClick={onIncrement}>Increment</button>
            <button data-testid={'decrement-btn'} onClick={onDecrement}>Decrement</button>
        </div>
    )
}