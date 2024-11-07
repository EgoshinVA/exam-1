import React from 'react';

type ButtonPropsType = {
    title: string
    isDisables: boolean
    onCLick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button disabled={props.isDisables} onClick={props.onCLick}>
            {props.title}
        </button>
    );
};