import {InitCapsPipe} from './InitCaps.pipe';

describe('InitCapsPipe', () => {
	let pipe: InitCapsPipe;

	beforeEach(() => {
		pipe = new InitCapsPipe();
	});

	it('transforms "abc" to "Abc"', () => {
		expect(pipe.transform('abc')).toEqual('Abc');
	});

	it('transforms "ABC" to "Abc"', () => {
		expect(pipe.transform('ABC')).toEqual('Abc');
	});

	it('leaves "Abc" unchanged', () => {
		expect(pipe.transform('Abc')).toEqual('Abc');
	});

	it('transforms "abc def" to "Abc Def"', () => {
		expect(pipe.transform('abc def')).toEqual('Abc Def');
	});

	it('transforms "ABC DEF" to "Abc Def"', () => {
		expect(pipe.transform('ABC DEF')).toEqual('Abc Def');
	});

	it('leaves "Abc Def" unchanged', () => {
		expect(pipe.transform('Abc Def')).toEqual('Abc Def');
	});
});
