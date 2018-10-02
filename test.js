/* global test expect */

const isTuesday = require('./index');

test('returns if today is tueday', () => {
	const day = new Date().getDay();
	expect(isTuesday()).toEqual(day === 2);
});

test('uses UTC offset to determine if today is tuesday', () => {
	for (let offset = 0; offset < 24; offset++) {
		const now = new Date();
		now.setUTCHours(offset);
		const day = now.getDay();
		expect(isTuesday(offset)).toEqual(day === 2);
	}
});
