// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
	// Complete this function
	const max = Math.max.apply(null, ar);
	let ocurrences = 0;
	ar.forEach(el => {
		if (parseInt(el) == parseInt(max)) {
			ocurrences++;
		}
	});
	return ocurrences;
}
