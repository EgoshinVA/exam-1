import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Params} from "./components/Params";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(7)
    const [isValuesChanged, setIsValuesChanged] = useState<boolean>(false)

    const setValue = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setIsValuesChanged(false)
    }

    const changeStartValue = (value: number) => {
        setStartValue(value)
        setIsValuesChanged(true)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setIsValuesChanged(true)
    }

    useEffect(() => {
        let newValue = localStorage.getItem('isChangedValue')
        if (newValue) {
            setIsValuesChanged(JSON.parse(newValue))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('isChangedValue', JSON.stringify(isValuesChanged))
    }, [isValuesChanged])

    return (
        <div className={'app'}>
            <Params startValue={startValue} maxValue={maxValue} setValue={setValue} setStartValue={changeStartValue}
                    setMaxValue={changeMaxValue}/>
            <Counter isValuesChanged={isValuesChanged} maxValue={maxValue} startValue={startValue}/>
        </div>
    );
}

export default App;