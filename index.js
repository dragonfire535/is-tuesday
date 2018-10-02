module.exports = (timeZoneOffset = 0) => {
	const rightNow = new Date();
	rightNow.setUTCHours(timeZoneOffset);
	return rightNow.getDay() === 2;
};
