 import {ctx} from './canvas';
 import {score, setScore} from './score';
 import {x,dy,y, setDy} from './ball';

 var brickRowCount = 5;
 var brickColumnCount = 3;
 var brickWidth = 75;
 var brickHeight = 20;
 var brickPadding = 10;
 var brickOffsetTop = 30;
 var brickOffsetLeft = 30;
 var bricks = [];

for(var c=0; c<brickColumnCount; c++) {
	bricks[c] = [];
	for(var r=0; r<brickRowCount; r++) {
		bricks[c][r] = { x: 0, y: 0, status: 1 };
	}
}

 function drawBricks() {
	for(var c=0; c<brickColumnCount; c++) {
		for(var r=0; r<brickRowCount; r++) {
			if(bricks[c][r].status === 1) {
				var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#0095DD";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

 function collisionDetection() {
	for(var c=0; c<brickColumnCount; c++) {
		for(var r=0; r<brickRowCount; r++) {
			var b = bricks[c][r];
			if(b.status === 1) {
				if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
					setDy(-dy);
					b.status = 0;
					setScore(score+1);
					if(score === brickRowCount*brickColumnCount) {
						console.log("YOU WIN, CONGRATS!");
						document.location.reload();
					}
				}
			}
		}
	}
}

export {brickRowCount,brickColumnCount,brickWidth,brickHeight,brickPadding,brickOffsetTop,brickOffsetLeft,bricks,drawBricks,collisionDetection};