import React, {useEffect} from 'react';
import {Button} from "./Button";

type ParamsPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    setValue: (startValue: number, maxValue: number) => void
}

export const Params: React.FC<ParamsPropsType> = ({startValue, maxValue, setStartValue, setMaxValue, setValue}) => {
    useEffect(() => {
        let newStartValue = localStorage.getItem('startValue')
        let newMaxValue = localStorage.getItem('maxValue')
        if (newStartValue) {
            setStartValue(JSON.parse(newStartValue))
        }
        if (newMaxValue) {
            setMaxValue(JSON.parse(newMaxValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    return (
        <div className={'block'}>
            <span>Max value:</span>
            <input className={maxValue <= startValue ? 'errorInput' : ''} value={maxValue} onChange={(e) => {
                setMaxValue(Number(e.currentTarget.value))
            }} type="number"/>
            <span>Start value:</span>
            <input className={maxValue <= startValue ? 'errorInput' : ''} value={startValue} onChange={(e) => {
                setStartValue(Number(e.currentTarget.value))
            }} type="number"/>
            <Button onCLick={() => setValue(startValue, maxValue)} isDisables={maxValue <= startValue} title={'set'}/>
        </div>
    );
};