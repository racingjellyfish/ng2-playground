import {Hero} from './Hero';

describe('Hero', () => {
	let id: number = 1;
	let name: string = 'Test Hero';

	let hero: Hero;

	beforeEach(() => {
		hero = new Hero(id, name);
	});

	it('has the id given in the constructor', () => {
		expect(hero.id).toEqual(id);
	});

	it('has the name given in the constructor', () => {
		expect(hero.name).toEqual(name);
	});
});
