import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Params} from "./components/Params";

function App() {
    const [startValue, setStartValue] = useState<number>(localStorage.getItem('startValue') ? Number(localStorage.getItem('startValue')) : 0)
    const [maxValue, setMaxValue] = useState<number>(localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 6)
    const [isValuesChanged, setIsValuesChanged] = useState<boolean>(false)
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true)

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        setIsValuesChanged(true)
    }, [startValue, maxValue])

    const setValue = (startValue: number, maxValue: number) => {
        if (startValue < maxValue && startValue >= 0) {
            setStartValue(startValue)
            setMaxValue(maxValue)
            setIsValuesChanged(false)
            localStorage.setItem('startValue', JSON.stringify(startValue))
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }
    }

    return (
        <div className={'app'}>
            <Params startValue={startValue} maxValue={maxValue} setStartValue={setStartValue} setMaxValue={setMaxValue}
                    setValue={setValue}/>
            <Counter isValuesChanged={isValuesChanged} maxValue={maxValue} startValue={startValue}/>
        </div>
    );
}

export default App;