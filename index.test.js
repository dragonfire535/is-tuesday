const isTuesday = require('./');

test('returns if today is tueday', () => {
	const day = new Date().getDay();
	expect(isTuesday()).toEqual(day === 3);
});

test('uses UTC offset to determine if today is tuesday', () => {
	const date = new Date();
	for (let offset = 0; offset < 24; offset++) {
		date.setUTCHours(offset);

		const day = date.getDay();
		expect(isTuesday(offset)).toEqual(day === 3);
	}
});
