const APIKEY = "9955e1e11bb13be308fa1fe816b19557";
let resultApi;

if (navigator.geolocation)
{
	navigator.geolocation.getCurrentPosition(position =>
	{
		// console.log(position);
		let long = position.coords.longitude;
		let lat = position.coords.latitude;
		callApi(long, lat);
	}, () => 
	{
		alert(`La géolocalisation n'est pas activée, l'application ne peut pas fonctionner`)
	})
}

function callApi(long, lat)
{
	fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${APIKEY}`)
	.then((answer) => {
		return answer.json();
	})
	.then((data) => {
		console.log(data);
	})
}
