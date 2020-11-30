import React from 'react';
import style from './Display.module.css';

type DisplayPropsType = {
    value: string
}

const Display = (props: DisplayPropsType) => {
    return (
        <div>
            <span className={style.value}>{props.value}</span>
        </div>
    )
}

export default Display;