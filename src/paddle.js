import {ctx,canvas} from './canvas';

 var paddleHeight = 10;
 var paddleWidth = 75;
 var paddleX = (canvas.width-paddleWidth)/2;
 var rightPressed = false;
 var leftPressed = false;

 function setPaddleX(val){
	 paddleX = val;
 }

 function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

 function keyDownHandler(e) {
	if(e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = true;
	}
}

 function keyUpHandler(e) {
	if(e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	}
}

 function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if(relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth/2;
	}
}

 function updatePaddlePosition() {
	if(rightPressed && paddleX < canvas.width-paddleWidth) {
		paddleX += 7;
	}
	else if(leftPressed && paddleX > 0) {
		paddleX -= 7;
	}
}

export {paddleHeight,paddleWidth,paddleX,rightPressed,leftPressed,drawPaddle,updatePaddlePosition,setPaddleX};