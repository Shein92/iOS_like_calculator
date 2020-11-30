import React from 'react';
import { Numbers, Operators } from '../../App';
import Btn, { darkGrey, lightGrey, orange } from '../Btn/Btn';
import style from './NumPad.module.css';

type NumPadPropsType = {
	waitingForNum: boolean,
	onNumberBtnClick: (number: Numbers) => void,
	onAllClearBtnClick: () => void
	onOperatorBtnClick: (operator: Operators) => void,
	onEqualBtnClick: () => void,
	onPlusMinusBtnClick: () => void,
	onMemoRecallBtnClick: () => void,
	onMemoClearBtnClick: () => void,
	onMemoPlusBtnClick: () => void,
	onMemoMinusBtnClick: () => void,
	onClearBtnClick: () => void,
	onPointBtnClick: () => void,
	onPercentBtnClick: () => void
};

const NumPad = (props: NumPadPropsType) => {

	const onNumClick = (value: number) => {
		props.onNumberBtnClick(value as Numbers)
	};

	return (
		<div className={style.numPad}>
			{props.waitingForNum ?
				<Btn value={'AC'} color={lightGrey} onClick={() => props.onAllClearBtnClick()} /> :
				<Btn value={'C'} color={lightGrey} onClick={() => props.onClearBtnClick()} />}
			<Btn value={'+/-'} color={lightGrey} onClick={() => props.onPlusMinusBtnClick()} />
			<Btn value={'%'} color={lightGrey} onClick={() => props.onPercentBtnClick()} />
			<Btn value={'÷'} color={orange} onClick={() => props.onOperatorBtnClick('÷')} />
			<Btn value={'mc'} color={darkGrey} onClick={() => props.onMemoClearBtnClick()} />
			<Btn value={'mr'} color={darkGrey} onClick={() => props.onMemoRecallBtnClick()} />
			<Btn value={'m-'} color={darkGrey} onClick={() => props.onMemoMinusBtnClick()} />
			<Btn value={'m+'} color={orange} onClick={() => props.onMemoPlusBtnClick()} />
			<Btn value={'7'} color={darkGrey} onClick={() => onNumClick(7)} />
			<Btn value={'8'} color={darkGrey} onClick={() => onNumClick(8)} />
			<Btn value={'9'} color={darkGrey} onClick={() => onNumClick(9)} />
			<Btn value={'x'} color={orange} onClick={() => props.onOperatorBtnClick('×')} />
			<Btn value={'4'} color={darkGrey} onClick={() => onNumClick(4)} />
			<Btn value={'5'} color={darkGrey} onClick={() => onNumClick(5)} />
			<Btn value={'6'} color={darkGrey} onClick={() => onNumClick(6)} />
			<Btn value={'-'} color={orange} onClick={() => props.onOperatorBtnClick('-')} />
			<Btn value={'1'} color={darkGrey} onClick={() => onNumClick(1)} />
			<Btn value={'2'} color={darkGrey} onClick={() => onNumClick(2)} />
			<Btn value={'3'} color={darkGrey} onClick={() => onNumClick(3)} />
			<Btn value={'+'} color={orange} onClick={() => props.onOperatorBtnClick('+')} />
			<Btn value={'0'} color={darkGrey} isBig={true} onClick={() => onNumClick(0)} />
			<Btn value={','} color={darkGrey} onClick={() => props.onPointBtnClick()} />
			<Btn value={'='} color={orange} onClick={() => props.onEqualBtnClick()} />
		</div>
	)
}

export default NumPad;