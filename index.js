module.exports = (timeZoneOffset = 0) => {
	const today = new Date();
	today.setUTCHours(timeZoneOffset);
	return today.getDay() === 4;
};
