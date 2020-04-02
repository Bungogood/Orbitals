function circle(s, r, colour="#000000") {
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.arc(s.x, s.y, r, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function start(f = main, t = 10){
    intervalID = setInterval(f, t);
}

function stop(){
    intervalID = clearInterval(intervalID);
}