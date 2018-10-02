module.exports = (timeZoneOffset = 0) => {
	const now = new Date();
	now.setUTCHours(timeZoneOffset);
	return now.getDay() === 2;
};
