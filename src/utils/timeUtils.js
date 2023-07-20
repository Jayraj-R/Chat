// Convert the Firebase timestamp to Time
export const firebaseTimestampToTime = (timestamp) => {
	if (timestamp === null) return null;
	const seconds = timestamp.seconds;
	const milliseconds = timestamp.nanoseconds / 1000000;
	const dateObject = new Date(seconds * 1000 + milliseconds);
	return dateObject.toLocaleTimeString();
};
