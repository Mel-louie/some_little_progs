const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const radiusBall = 6, barHeight = 10, barWidth = 75;

const nbCol = 8, nbRow = 5, brickWidth = 75, brickHeight = 20;

const displayScore = document.querySelector(".score");
let score = 0;

let x = canvas.width / 2, y = canvas.height - 30;
let barreX = (canvas.width - barWidth) / 2;

let end = false;
let speedX = 2, speedY = -2;

function drawBall()
{
	ctx.beginPath();
	ctx.arc(x, y, radiusBall, 0, Math.PI * 2);
	ctx.fillStyle = "#00FF00";
	ctx.fill();
	ctx.closePath();
}

function drawBar()
{
	ctx.beginPath();
	ctx.rect(barreX, canvas.height - barHeight - 5, barWidth, barHeight);
	ctx.fillStyle = "#00FF00";
	ctx.fill();
	ctx.closePath();
}

// brick's array
const bricks = [];
for (i = 0 ; i < nbRow ; i++)
{
	bricks[i] = [];
	for(let j = 0 ; j < nbCol ; j++)
	{
		bricks[i][j] = {x: 0, y: 0, status: 1};
	}
}

function drawBricks()
{
	for (let i = 0 ; i < nbRow ; i++)
		for (let j = 0 ; j < nbCol ; j++)
		{
			if (bricks[i][j].status === 1)
			{
				// pos * brickWith(75) + 10 (space between the bricks) + 35 (space between the canvas and firts/last brick)
				let brickX = (j * (brickWidth + 10) + 40);
				let brickY = (i * (brickHeight + 10) + 30);

				bricks[i][j].x = brickX;
				bricks[i][j].y = brickY;

				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#00FF00";
				ctx.fill();
				ctx.closePath();
			}
		}
}

function draw()
{
	if (end === false)
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBricks();
		drawBar();
		drawBall();
		collisionPlayerBorders();
		collisionBricks();

		x += speedX;
		y += speedY;

		requestAnimationFrame(draw);
	}
}
draw();

// moves barre
document.addEventListener("mousemove", mouseMove);

function mouseMove(e)
{
	// e.clientX = from left to the mouse
	let posXBarCanvas = e.clientX - canvas.offsetLeft;
	// console.log(posXBarCanvas);

	if (posXBarCanvas > 35 && posXBarCanvas < canvas.width - 35)
		barreX = posXBarCanvas - barWidth / 2;
}

// collisions detection
function collisionPlayerBorders()
{
	if (x + speedX > canvas.width - radiusBall || x + speedX < radiusBall)
			speedX = -speedX;
		
		if (y + speedY < radiusBall )
			speedY = -speedY;
			
		if (y + speedY > canvas.height - radiusBall - 5)
		{
			if (x > barreX - 3 && x < barreX + barWidth + 3)
			{
				speedX = speedX + 0.2;
				speedY = speedY + 0.2;
				speedY = -speedY;
			}
			else
			{
				end = true;
				displayScore.innerHTML = `You lose :'( <br> Clic on the game to play again`;
			}
		}
}

function collisionBricks()
{
	for (let i = 0 ; i < nbRow ; i++)
		for (let j = 0 ; j < nbCol ; j++)
		{
			let b = bricks[i][j];
			if (b.status === 1)
			{
				if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)
				{
					speedY = -speedY;
					b.status = 0;
					score++;
					displayScore.innerHTML = `Score: ${score}`;

					if (score === nbCol * nbRow)
					{
						displayScore.innerHTML = `GG you win! <br> Clic on the game to play again`
						end = true;
					}
				}
			}
		}
}

// replay, reload the page when clic in the canvas
canvas.addEventListener("click", () => 
{
	if (end === true)
	{
		end = false;
		document.location.reload();
	}
})