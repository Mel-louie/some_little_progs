/*
 * File: pong.js
 * Project: pong
 * File Created: Monday, 27th December 2021 4:08:37 pm
 * Author: Mel-Louie (mdesfont@student.42.fr)
 * -----
 * Last Modified: Monday, 27th December 2021 4:11:46 pm
 * Modified By: Mel-Louie (mdesfont@student.42.fr)
 * -----
 * Copyright 2021 - 2021 Mel-Louie
 * Licence MIT
 */

// a little pong, using p5.js library and the help of this tuto https://dev.to/codesphere/can-we-make-pong-in-less-than-a-100-lines-of-javascript-3ah1


const screenDim = 500;											// dimentions of the play field
let player1 = { x: 30, y: 250, width: 20, height: 100};			// players positions at the begining
let player2 = { x: screenDim - 50, y: 70, width: 20, height: 100};
let ball = {x: 250, y: 100, velocityX: 2, velocityY: 2};		// ball position at the begining

let score = [0, 0];

// keycode i need
K_UP	= 38
K_DOWN	= 40
K_W		= 87
K_S		= 83

function setup()
{
	frameRate(100);
	createCanvas(screenDim, screenDim);
}

function draw()		// runs on loop according to framerate
{
	// draw field
	fill("transparent");				// chose a color to fill rect below
	rect(0, 0, screenDim, screenDim);

	//draw ball
	fill("blue")
	ellipse(ball.x, ball.y, 10, 10);

	// draw paddles
	fill("black");
	rect(player1.x, player1.y, player1.width, player1.height);
	rect(player2.x, player2.y, player2.width, player2.height);
	
	// draw score
	fill("black");
	textSize(23);
	text(score[0] + " - " + score[1], screenDim / 2 - 20, 50);
	
	// ball collisions
		// with top and bottom
    if (ball.y > screenDim - 10 || ball.y < 10)
		ball.velocityY *= -1;
		// with players
	if (ball.x < player1.x + player1.width + 10 && ball.y > player1.y && ball.y < player1.y + player1.height)
	{
		ball.velocityX *= -1.1; 		// invert and increase velocity by 10%
		ball.velocityY = random(8) - 4;	// random y velocity between -4 and 4
	}
	  
	  if ( ball.x > player2.x - 10 && ball.y > player2.y && ball.y < player2.y + player2.height)
	{
		ball.velocityX *= -1.1;			// invert and increase velocity by 10%
		ball.velocityY = random(8) - 4; // random y velocity between -4 and 4
	}

	// move paddles player 1
	if (keyIsDown(K_W) && player1.y > 1)
		player1.y -= 5;
	if (keyIsDown(K_S) && player1.y <= screenDim - player1.height)
		player1.y += 5;

	// move paddles player 2
	if (keyIsDown(K_UP) && player2.y > 1)
		player2.y -= 5;
	if (keyIsDown(K_DOWN) && player2.y <= screenDim - player2.height)
		player2.y += 5;

	// update score
		// new score, then reinit ball pos
	if (ball.x < 0)
	{
		score[1] += 1;
		ball = {x: 250, y: 100, velocityX: 2, velocityY: 2};
	}
	if (ball.x > screenDim)
	{
		score[0] += 1;
		ball = {x: 250, y: 100, velocityX: -2, velocityY: 2};
	}
	
	// move the ball
	ball.x += ball.velocityX;
	ball.y += ball.velocityY;
}