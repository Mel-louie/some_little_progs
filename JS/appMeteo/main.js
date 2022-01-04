import arrDaysOrder from "./scripts/timeManagement.js";

const APIKEY = "9955e1e11bb13be308fa1fe816b19557";
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const localisation = document.querySelector(".localisation");
const feel = document.querySelector(".feel");
const hour = document.querySelectorAll(".time-name-prevision");
const tempForHour = document.querySelectorAll('.time-prevision-value');
const feelHour = document.querySelectorAll('.feel-like');
const dayDiv = document.querySelectorAll('.prevision-day-name');
const tempDay = document.querySelectorAll('.prevision-day-temp');
const imgLogo = document.querySelector('.logo-meteo');
const loadingContainer = document.querySelector('.overlay-loading-icon');

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
		alert(`La géolocalisation n'est pas activée, l'application ne peut pas fonctionner. Veuillez activer la géolocalisation. Vos données ne sont pas conservées`)
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

		resultApi = data;

		weather.innerText = resultApi.current.weather[0].description;
		temperature.innerText = `${Math.trunc(resultApi.current.temp)}ºC`
		localisation.innerText = resultApi.timezone;
		feel.innerText = `Ressenti ${Math.trunc(resultApi.current.feels_like)}ºC`;

		// houres by slices of 3, with their temp
		let actualHour = new Date().getHours();
		for (let i = 0 ; i < hour.length ; i++)
		{
			let incHour = actualHour + i * 3;

			if (incHour > 24)
				hour[i].innerText = `${incHour - 24}h`;
			else if (incHour === 24)
				hour[i].innerText = `0h`;
			else
				hour[i].innerText = `${incHour}h`;
		}

		// temp for 3h
        for(let j = 0; j < tempForHour.length; j++)
		{
            tempForHour[j].innerText = `${Math.trunc(resultApi.hourly[j * 3].temp)}°C`;
        }
		// feel like 3h
		for(let k = 0; k < feelHour.length; k++)
		{
            feelHour[k].innerText = `ressen. ${Math.trunc(resultApi.hourly[k * 3].temp)}°C`;
        }

		// days 3 firts letters
		for (let l = 0 ; l < arrDaysOrder.length ; l++)
		{
			dayDiv[l].innerText = arrDaysOrder[l].slice(0, 3);
		}
		// days temperature
		for (let m = 0 ; m < 7 ; m++)
		{
			tempDay[m].innerText = `${Math.trunc(resultApi.daily[m + 1].temp.day)}°C`;
		}

		// dynamic icone
		imgLogo.src = `ressources/${resultApi.current.weather[0].icon}.svg`;

		loadingContainer.classList.add('disparition');
	})
}
