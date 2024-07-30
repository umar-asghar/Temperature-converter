document.getElementById('convertButton').addEventListener('click', function () {
	const temperature = parseFloat(
		document.getElementById('temperatureInput').value
	);
	const unit = document.getElementById('unitInput').value;
	let result;

	if (isNaN(temperature)) {
		document.getElementById('resultOutput').innerText =
			'Please enter a valid number!';
		return;
	}

	switch (unit) {
		case 'celsius':
			result = `${temperature}°C = ${((temperature * 9) / 5 + 32).toFixed(
				2
			)}°F = ${(temperature + 273.15).toFixed(2)}K`;
			break;
		case 'fahrenheit':
			result = `${temperature}°F = ${(((temperature - 32) * 5) / 9).toFixed(
				2
			)}°C = ${(((temperature - 32) * 5) / 9 + 273.15).toFixed(2)}K`;
			break;
		case 'kelvin':
			result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${(
				((temperature - 273.15) * 9) / 5 +
				32
			).toFixed(2)}°F`;
			break;
		default:
			result = 'Invalid unit!';
	}

	document.getElementById('resultOutput').innerText = result;
});
