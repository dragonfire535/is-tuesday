module.exports = (options = 0) => {
	if (typeof options === 'object' && options !== null && options.valueOf) options = options.valueOf();
	if (typeof options === 'string') return options.toLowerCase() === 'tuesday';

	if (typeof options !== 'number') options = Number(options);
	if (isNaN(options)) options = 0;

	let now;
	if (options >= 0 && options < 24) {
		now = new Date();
		now.setUTCHours(options);
	} else {
		now = new Date(options);
	}

	return now.getDay() === 2;
};
