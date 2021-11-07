import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store/AppState";
import {actionTypes} from "./store/CountReducer";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state: AppState) => state.count.counter);

    const onIncrement = () => {

        dispatch({
            type: actionTypes.INCREMENT_COUNTER
        })
    }
    const onDecrement = () => {

        dispatch({
            type: actionTypes.DECREMENT_COUNTER
        })
    }

    return (
        <>
            <div className="Margin100">
                <p>Hello</p>
                <input type="button" onClick={onIncrement} value="Increment" className="mb"/>
                <input type="button" onClick={onDecrement} value="Decrement"/>
                <p>{count}</p>
            </div>
        </>

    );
}

export default App;
