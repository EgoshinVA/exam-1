import React from 'react';
import {Button} from "./Button";

type ParamsPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setValue: (startValue: number, maxValue: number) => void
}

export const Params: React.FC<ParamsPropsType> = ({startValue, maxValue, setStartValue, setMaxValue, setValue}) => {
    const maxValueClassname = maxValue <= startValue || maxValue < 0 ? 'errorInput' : ''
    const startValueClassname = maxValue <= startValue || startValue < 0 ? 'errorInput' : ''

    return (
        <div className={'block'}>
            <span>Max value:</span>
            <input value={maxValue} onChange={(e) => setMaxValue(Number(e.currentTarget.value))}
                   className={maxValueClassname} type="number"/>
            <span>Start value:</span>
            <input value={startValue} onChange={(e) => setStartValue(Number(e.currentTarget.value))}
                   className={startValueClassname} type="number"/>
            <Button onCLick={() => setValue(startValue, maxValue)} isDisables={maxValue <= startValue} title={'set'}/>
        </div>
    );
};