import React, {useState} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    maxValue: number
    startValue: number
    isValuesChanged: boolean
}

export const Counter: React.FC<CounterPropsType> = ({maxValue, startValue, isValuesChanged}) => {
    const [title, setTitle] = useState<number>(startValue)

    const increment = () => {
        !isValuesChanged && title < maxValue && setTitle(title + 1)
    }

    const reset = () => {
        !isValuesChanged && setTitle(startValue)
    }

    return (
        <div className={'block'}>
            <h4 className={title === maxValue ? 'redColor' : ''}>{isValuesChanged ? 'enter values and press set' : title}</h4>
            <div className={'buttonBlock'}>
                <Button isDisables={title >= maxValue} onCLick={increment} title={'inc'}/>
                <Button isDisables={title === startValue} onCLick={reset} title={'reset'}/>
            </div>
        </div>
    );
};