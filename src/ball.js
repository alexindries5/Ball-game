import {canvas,ctx} from './canvas';
import {lives, setLives} from './lives';
import {paddleX,paddleWidth, setPaddleX} from './paddle';

 var ballRadius = 10;
 var x = canvas.width/2;
 var y = canvas.height-30;
 var dx = 2;
 var dy = -2;

 function setDx(val){
	 dx=val;
 }
 function setDy(val){
	dy=val;
}

 function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

 function updateBallPosition() {
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		setDx (-dx);
	}
	if (y + dy < ballRadius) {
		setDy (-dy);
	} else if (y + dy > canvas.height - ballRadius) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			setDy(-dy); 
		} else {
			setLives(lives-1);
			if (!lives) {
				console.log('GAME OVER')
				document.location.reload()
			} else {
				x = canvas.width / 2
				y = canvas.height - 30
				setDx(3);
				setDy(-3);
				setPaddleX((canvas.width - paddleWidth) / 2);
			}
		}
	}
	
	x += dx
	y += dy
}

export {drawBall,updateBallPosition,x,y,dx,dy,setDx,setDy};