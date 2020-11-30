import React, { useState } from 'react';
import './App.css';
import Display from './Modules/Display/Display';
import NumPad from './Modules/NumPad/NumPad';


export type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Operators = '+' | '-' | '×' | '÷';

function App() {

	const [firstNum, setFirstNum] = useState<number>();
	const [result, setResult] = useState<number>(0);
	const [display, setDisplay] = useState<string>('0');
	const [waitingForNum, setWaitingForNum] = useState<boolean>(true);
	const [memo, setMemo] = useState<number>(0);
	const [operator, setOperator] = useState<Operators>();

	const onNumberBtnClick = (number: Numbers) => {
		let newValue = display;

		if ((display === '0' && number === 0) || display.length >= 12) {
			return
		}

		if (waitingForNum) {
			newValue = '';
			setWaitingForNum(false);
		}

		if (display !== '0') {
			newValue = newValue + number.toString()
		} else {
			newValue = number.toString();
		}

		setDisplay(newValue);
	}

	const onOperatorBtnClick = (oper: Operators) => {
		let value = +display;

		if (typeof operator === 'undefined') {
			setFirstNum(+display);
			setOperator(oper);
		}

		if (operator) {
			calculate(value);
			setOperator(oper);
			setFirstNum(calculate(value));
		}
		setWaitingForNum(true);
	}

	const calculate = (num: number) => {
		let res;

		switch (operator) {
			case '+': {
				if (firstNum) {
					res = firstNum + num;
					setResult(res);
					setDisplay(res.toString());
				}

				return res;
			}
			case '-': {
				if (firstNum) {
					res = firstNum - num;
					setResult(res);
					setDisplay(res.toString());
				}
				return res;
			}
			case '×': {
				if (firstNum) {
					res = firstNum * num;
					setResult(res);
					setDisplay(res.toString());
				}
				return res;
			}
			case '÷': {
				if (num === 0) {
					return
				}
				if (firstNum) {
					res = firstNum / num;
					setResult(res);
					setDisplay(res.toString());
				}
				return res;
			}
			default: {
				break
			}
		}
		return res;
	}
	const onPlusMinusBtnClick = () => {
		let value = +display;

		if (value > 0) {
			setDisplay('-' + value.toString());
		} else if (value < 0) {
			setDisplay((value * -1).toString());
		}
	}
	const onEqualBtnClick = () => {
		let num = +display;

		calculate(num);
		setFirstNum(result);
		setOperator(undefined);
		setWaitingForNum(true);
	}

	const onAllClearBtnClick = () => {
		setFirstNum(undefined);
		setOperator(undefined);
		setDisplay('0');
		setResult(0);
		setWaitingForNum(true);
	}

	const onClearBtnClick = () => {
		setDisplay('0');
		setWaitingForNum(true);
	}

	const onMemoRecallBtnClick = () => {
		setDisplay(memo.toString());
		setWaitingForNum(true);
	}

	const onMemoClearBtnClick = () => {
		setMemo(0);
		setWaitingForNum(true)
	}

	const onMemoPlusBtnClick = () => {
		setMemo(memo + +display);
		setWaitingForNum(true);
	}
	const onMemoMinusBtnClick = () => {
		setMemo(memo - +display);
		setWaitingForNum(true);
	}

	const onPointBtnClick = () => {
		if (waitingForNum) {
			setDisplay('0');
		}

		if (display.indexOf('.') === -1) {
			setDisplay(display + '.');
		}
		setWaitingForNum(false);
	}

	const onPercentBtnClick = () => {
		let value = +display;
		setDisplay((value / 100).toString());
	}

	return (
		<div className="App">
			<Display value={display} />
			<NumPad waitingForNum={waitingForNum} onNumberBtnClick={onNumberBtnClick} onAllClearBtnClick={onAllClearBtnClick}
				onOperatorBtnClick={onOperatorBtnClick} onEqualBtnClick={onEqualBtnClick} onPlusMinusBtnClick={onPlusMinusBtnClick} onMemoClearBtnClick={onMemoClearBtnClick} onMemoMinusBtnClick={onMemoMinusBtnClick} onMemoPlusBtnClick={onMemoPlusBtnClick} onMemoRecallBtnClick={onMemoRecallBtnClick} onClearBtnClick={onClearBtnClick} onPointBtnClick={onPointBtnClick} onPercentBtnClick={onPercentBtnClick} />
		</div>
	);
}

export default App;
