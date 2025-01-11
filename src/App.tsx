import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Params} from "./components/Params";
import {
    changeIsFirstRenderAC, changeIsValueChangedAC,
    changeMaxValueAC,
    changeStartValueAC,
    setStateFromLSTC,
    setValueTC,
    StateType
} from "./components/reducer/CounterReducer";
import {useAppDispatch, useAppSelector} from "./store/Store";

function App() {
    const state = useAppSelector<StateType>(state => state.counter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (state.isFirstRender) {
            dispatch(changeIsFirstRenderAC(false));
            return;
        }
        dispatch(changeIsValueChangedAC(true));
    }, [state.startValue, state.maxValue])

    useEffect(() => {
        dispatch(setStateFromLSTC());
    }, []);

    const setValue = (startValue: number, maxValue: number) => {
        if (startValue < maxValue && startValue >= 0) {
            dispatch(setValueTC(startValue, maxValue))
        }
    }

    return (
        <div className={'app'}>
            <Params startValue={state.startValue} maxValue={state.maxValue}
                    setStartValue={(payload: number) => dispatch(changeStartValueAC(payload))}
                    setMaxValue={(payload: number) => dispatch(changeMaxValueAC(payload))}
                    setValue={setValue}/>
            <Counter isValuesChanged={state.isValuesChanged} maxValue={state.maxValue} startValue={state.startValue}/>
        </div>
    );
}

export default App;