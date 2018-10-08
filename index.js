module.exports = (options = 0) => {
	if (typeof options === 'object' && options !== null && options.valueOf) options = options.valueOf();
	if (typeof options === 'string') return options.toLowerCase() === 'tuesday';

	if (typeof options !== 'number') options = Number(options);
	if (isNaN(options)) options = 0;

	const now = new Date();
	now.setUTCHours(options);
	return now.getDay() === 2;
};
