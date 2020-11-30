import React from 'react';
import style from './Btn.module.css';

export const orange = '#ff9500';
export const lightGrey = '#d4d4d2';
export const darkGrey = '#505050';

type BtnPropsType = {
    value: string
    color?: '#d4d4d2' | '#ff9500' | '#505050',
    isBig?: boolean,
    onClick?:() => void
}

const Btn = (props: BtnPropsType) => {

    const onClick = () => {
        if(props.onClick) {props.onClick()}
        
    }

    return (
        <span className={style.btn + " " + (props.isBig ? style.bigBtn : '')} style={{backgroundColor: props.color}} onClick={onClick}>
            <span className={style.text}>{props.value.toString()}</span>
        </span>
    )
};

export default Btn;