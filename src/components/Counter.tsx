import React, {useEffect, useState} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    maxValue: number
    startValue: number
    isValuesChanged: boolean
}

export const Counter: React.FC<CounterPropsType> = ({maxValue, startValue, isValuesChanged}) => {
    const [title, setTitle] = useState<number>(startValue || 0)

    useEffect(() => {
        setTitle(startValue)
    }, [isValuesChanged])

    const increment = () => {
        !isValuesChanged && title < maxValue && setTitle(title + 1)
    }

    const reset = () => {
        !isValuesChanged && setTitle(startValue)
    }

    return (
        <div className={'block'}>
            <h4 className={startValue >= maxValue || startValue < 0 ? 'redColor' : title === maxValue
            && !isValuesChanged ? 'redColor' : ''}>{startValue >= maxValue || startValue < 0 ? 'incorrect value!' :
                isValuesChanged ? 'enter values and press set' : title}</h4>
            <div className={'buttonBlock'}>
                <Button isDisables={title >= maxValue || isValuesChanged} onCLick={increment} title={'inc'}/>
                <Button isDisables={title === startValue || isValuesChanged} onCLick={reset} title={'reset'}/>
            </div>
        </div>
    );
};