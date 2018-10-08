/* global test expect */

const isTuesday = require('./index');

test('today is/is not tuesday', () => {
	const day = new Date().getDay();
	expect(isTuesday()).toBe(day === 2);
});

test('today is/is not tuesday, with date object', () => {
	const day = new Date().getDay();
	expect(isTuesday(new Date())).toBe(day === 2);
});

test('uses UTC offset to determine if today is tuesday', () => {
	for (let offset = 0; offset < 24; offset++) {
		const now = new Date();
		now.setUTCHours(offset);
		const day = now.getDay();
		expect(isTuesday(offset)).toBe(day === 2);
	}
});

test('the string "tuesday" is tuesday', () => {
	expect(isTuesday('tuesday')).toBe(true);
});

test('a random-cased string "tUeSdAy" is tuesday', () => {
	expect(isTuesday('tUeSdAy')).toBe(true);
});

test('the string "wednesday" is not tuesday', () => {
	expect(isTuesday('wednesday')).toBe(false);
});

test('an object with a valueOf method that returns "tuesday" is tuesday', () => {
	const obj = {
		valueOf() {
			return 'tuesday';
		}
	};

	expect(isTuesday(obj)).toBe(true);
});

test('an empty object is not tuesday', () => {
	expect(isTuesday({})).toBe(false);
});
