import './index.css'
import {clearCanvas} from './canvas';
import {drawBall,updateBallPosition}  from './ball';
import {drawBricks,collisionDetection} from './bricks';
import {drawPaddle,updatePaddlePosition} from './paddle';
import {drawLives} from './lives';
import {drawScore} from './score';

export function draw() {
	clearCanvas();
	
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();
	
	requestAnimationFrame(draw);
}

draw();