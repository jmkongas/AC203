// alert ("It is working!");

//Declaring and initializing variables
var canvas;
var ctx;
var x = 300;   //setting the original position of the ball
var y = 150;
var width = 600;
var height = 300;
//small changes in x and y direction at each frame
var mx = 2;
var my = 2;
//different speed
var mx2 = 5;
var my2 = 5;
//different starting locations
var x2 = 20;
var y2 = 200;
var color1="tomato";
var color2="silver";

function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(drawBall,10);
}

function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle=color;
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,height);
}

function drawBall(){
	clear();
	circle(x,y,25,color1);
	circle(x2,y2,50,color2);

	//to make the ball bounce at edges of canvas
	if(x + mx > width || x + mx < 0){
		mx = -mx;
	}
	if(y + my > height || y + my < 0){
		my = -my;
	}

	if(x2 + mx2 > width || x2 + mx2 < 0){
		mx2 = -mx2;
	}
	if(y2 + my2 > height || y2 + my2 < 0){
		my2 = -my2;
	}

	//move x and y of the ball every frame (10ms)
	x+=mx;
	y+=my;
	x2+=mx2;
	y2+=my2;
}

init();