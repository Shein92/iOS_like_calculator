import { Operators } from './../App';
import { Numbers } from "../App";

describe('Returning correct value', () => {

	const onNumberBtnClick = (number: Numbers) => {

		let display = '0'
		let waitingForNum = false

		let newValue = display;

		if ((display === '0' && number === 0) || display.length >= 12) {
			return
		}

		if (waitingForNum) {
			newValue = '';
			waitingForNum = false
		}

		if (display !== '0') {
			newValue = newValue + number.toString()
		} else {
			newValue = number.toString();
		}

		return newValue
	}


	it('should equal 2', () => {
		expect(onNumberBtnClick(2)).toBe('2');
	});
	it('should be false', () => {
		expect(onNumberBtnClick(0)).toBe(undefined);
	})
});

describe('Calculating correctly', () => {

	const calculate = (num: number, operator: Operators) => {
		let firstNum = 10;
		let res;
		let display = '';

		switch (operator) {
			case '+': {
				if (firstNum) {
					res = firstNum + num;
					display = res.toString();
				}

				return res;
			}
			case '-': {
				if (firstNum) {
					res = firstNum - num;
					display = res.toString();
				}
				return res;
			}
			case '×': {
				if (firstNum) {
					res = firstNum * num;
					display = res.toString();
				}
				return res;
			}
			case '÷': {
				if (num === 0) {
					return
				}
				if (firstNum) {
					res = firstNum / num;
					display = res.toString();
				}
				return res;
			}
			default: {
				break
			}
		}
		return res;
	}

	it('should be 20', () => {
		expect(calculate(20, '+')).toBe(30);
	})
	it('should be 50', () => {
		expect(calculate(5, '×')).toBe(50);
	})
	it('should be false', () => {
		expect(calculate(0, '÷')).toBe(undefined);
	})
});
describe('Should be correct operator', () => {

	const calculate = (num: number, operator: Operators) => {
		let firstNum = 10;
		let res;
		let display = '';

		switch (operator) {
			case '+': {
				if (firstNum) {
					res = firstNum + num;
					display = res.toString();
				}

				return res;
			}
			case '-': {
				if (firstNum) {
					res = firstNum - num;
					display = res.toString();
				}
				return res;
			}
			case '×': {
				if (firstNum) {
					res = firstNum * num;
					display = res.toString();
				}
				return res;
			}
			case '÷': {
				if (num === 0) {
					return
				}
				if (firstNum) {
					res = firstNum / num;
					display = res.toString();
				}
				return res;
			}
			default: {
				break
			}
		}
		return res;
	}


	const onOperatorBtnClick = (oper: Operators | undefined) => {
		let value = 7;
		let firstNum = 0
		let operator;

		if (typeof operator === 'undefined') {
			firstNum = value;
			operator = oper;
		}

		if (operator) {
			if (oper) calculate(value, oper);
			operator = oper;
			let v
			if (oper) v = calculate(value, oper);
			if (v) {
				firstNum = v
			}
		}
		return { firstNum: firstNum, operator: oper }
	}

	it('should be 17 and +', () => {
		expect(onOperatorBtnClick('+')).toEqual({ firstNum: 17, operator: '+' })
	})
	it('should be 3 and -', () => {
		expect(onOperatorBtnClick('-')).toEqual({ firstNum: 3, operator: '-' })
	})
	it('should be 7 and undefined', () => {
		expect(onOperatorBtnClick(undefined)).toEqual({ firstNum: 7, operator: undefined })
	})
});

describe('Changing sign function should work correctly', () => {

	const onPlusMinusBtnClick = (num: number) => {
		let value = num;
		let display = ''

		if (value > 0) {
			display = '-' + value.toString();
		} else if (value < 0) {
			display = (value * -1).toString();
		}

		return display;
	}

	it('should be -33', () => {
		expect(onPlusMinusBtnClick(33)).toBe('-33');
	})
	it('should be 55', () => {
		expect(onPlusMinusBtnClick(-55)).toBe('55');
	})
});
describe('Memo recall function shoul work correctly', () => {

	let display = ''

	const onMemoRecallBtnClick = (memo: string) => {
		display = memo.toString();
		return display;
	}

	it('should be "Hello!"', () => {
		expect(onMemoRecallBtnClick('Hello!')).toBe('Hello!');
	})
});
describe('Memo plus function should work correctly', () => {

	let memo = 36;

	const onMemoPlusBtnClick = (display: string) => {
		memo = memo + +display;
		return memo;
	}

	it('should be 51', () => {
		expect(onMemoPlusBtnClick('15')).toBe(51);
	})
});
describe('Memo minus function should work correctly', () => {

	let memo = 36;

	const onMemoMinusBtnClick = (display: string) => {
		memo = memo - +display;
		return memo;
	}

	it('should be 11', () => {
		expect(onMemoMinusBtnClick('25')).toBe(11);
	})
});
describe('Point function should work correctly', () => {

	const onPointBtnClick = (disp: string) => {

		let display = disp;

		if (display.indexOf('.') === -1) {
			display = display + '.';
		}
		return display
	}

	it('should be 30.', () => {
		expect(onPointBtnClick('30')).toBe('30.');
	})
	it('should be also 30.', () => {
		expect(onPointBtnClick('30.')).toBe('30.');
	})
});
describe('Percent function should work correctly', () => {

	const onPercentBtnClick = (disp: string) => {
		let display;
		let value = +disp;
		display = (value / 100).toString();

		return display;
	}

	it('should be 1', () => {
		expect(onPercentBtnClick('100')).toBe('1');
	});
	it('should be 0.05', () => {
		expect(onPercentBtnClick('5')).toBe('0.05');
	});
});