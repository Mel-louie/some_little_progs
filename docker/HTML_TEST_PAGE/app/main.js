const startTimer = document.getElementById('startTimer');

let times = document.querySelector('.times');
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let time = null;

// handle event when mouse is clicked
startTimer.addEventListener("click", handleEvent);
// OR
// handle event when spacebar is pressed
document.addEventListener("keydown", (event) =>
{
	const keycode = event.code;

	if (keycode === 'Space')
		handleEvent();
});

function handleEvent()
{
	if (time === null)
	{
		// console.log('start');
		int = setInterval(displayTimer, 10);
		time = 1;
	}
	else if (time === 1)
	{
		// console.log('stop');
		clearInterval(int);
		times.innerHTML = timerRef.innerHTML + '<br />' + times.innerHTML;
		time = 2;
	}
	else if (time === 2)
	{
		// console.log('reset');
		clearInterval(int);
		time = null;
		[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
		timerRef.innerHTML = '00 : 00 : 00 : 000';
	}
}

function displayTimer()
{
	milliseconds += 10;
	if (milliseconds === 1000)
	{
		milliseconds = 0;
		seconds++;

		if (seconds === 60)
		{
			seconds = 0;
			minutes++;

			if (minutes == 60)
			{
				minutes = 0;
				hours++;
			}
		}
	}

	let mm = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds ;
	let s = seconds < 10 ? '0' + seconds : seconds;
	let m = minutes < 10 ? '0' + minutes : minutes;
	let h = hours < 10 ? '0' + hours : hours;

	timerRef.innerHTML = `${h} : ${m} : ${s} : ${mm}`;
}
