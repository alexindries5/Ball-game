 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export {canvas,ctx,clearCanvas};