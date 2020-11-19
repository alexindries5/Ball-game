import {ctx,canvas} from './canvas';

 var lives = 3;

 function setLives(val){
	 lives = val;
 }

 function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

export {lives,drawLives,setLives};
