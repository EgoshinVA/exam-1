import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import ProgressBar from "@ramonak/react-progress-bar";

function App() {
    const [title, setTitle] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const increment = () => {
        setTitle(title + 1)
    }

    const reset = () => {
        setTitle(0)
        setMaxValue(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
    }

    return (
        <div className={'app'}>
            <span>Max value: {maxValue}</span>
            <h1 className={title === maxValue ? 'redColor' : ''}>{title}</h1>
            <div>
                <ProgressBar completed={title} maxCompleted={maxValue} height={'5px'} bgColor={'black'} isLabelVisible={false}/>
                <Button isDisables={title >= maxValue} onCLick={increment} title={'inc'}/>
                <Button isDisables={title === 0} onCLick={reset} title={'reset'}/>
            </div>
        </div>
    );
}

export default App;