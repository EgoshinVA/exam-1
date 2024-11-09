import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Params} from "./components/Params";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [isValuesChanged, setIsValuesChanged] = useState<boolean>(false)

    const setValue = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setIsValuesChanged(false)
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