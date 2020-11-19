import {ctx} from './canvas';

 var score = 0;

function setScore(val){
	score = val;
}

 function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Score: "+score, 8, 20);
}

export {score,setScore,drawScore};