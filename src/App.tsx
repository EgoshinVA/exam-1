import React, {useEffect, useReducer} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Params} from "./components/Params";
import {reducer, StateType} from "./components/reducer/Reducer";

export const CHANGE_START_VALUE = 'CHANGE-START-VALUE'
export const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE'
export const CHANGE_IS_VALUE_CHANGED = 'CHANGE-IS-VALUE-CHANGED'
export const CHANGE_IS_FIRST_RENDER = 'CHANGE-IS-FIRST-RENDER'

const initialState: StateType = {
    startValue: localStorage.getItem('startValue') ? Number(localStorage.getItem('startValue')) : 0,
    maxValue: localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 6,
    isValuesChanged: false,
    isFirstRender: true
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.isFirstRender) {
            dispatch({type: CHANGE_IS_FIRST_RENDER, value: false});
            return;
        }
        dispatch({type: CHANGE_IS_VALUE_CHANGED, value: true});
    }, [state.startValue, state.maxValue])

    const setValue = (startValue: number, maxValue: number) => {
        if (startValue < maxValue && startValue >= 0) {
            dispatch({type: CHANGE_START_VALUE, value: startValue});
            dispatch({type: CHANGE_MAX_VALUE, value: maxValue});
            dispatch({type: CHANGE_IS_VALUE_CHANGED, value: false});
            localStorage.setItem('startValue', JSON.stringify(startValue))
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }
    }

    return (
        <div className={'app'}>
            <Params startValue={state.startValue} maxValue={state.maxValue}
                    setStartValue={(value: number) => dispatch({type: CHANGE_START_VALUE, value})}
                    setMaxValue={(value: number) => dispatch({type: CHANGE_MAX_VALUE, value})}
                    setValue={setValue}/>
            <Counter isValuesChanged={state.isValuesChanged} maxValue={state.maxValue} startValue={state.startValue}/>
        </div>
    );
}

export default App;