// alert("It is working!");

//declare and initialize variables
var canvas;
var ctx;
//original position of the ball
var x = 420;
var y = 420; 
var r = 20;
//make the ball stay stationary in the beginning of the game
var mx = 0;
var my = 0;
var width = 500;
var height = 500;

//Positions of good and bad guys
var goodX;
var goodY;
var badX;
var badY;
var spriteHeight = 80;
var spriteWidth = 80;

var goodCollision = false;
var badCollision = false;
var score = 0;

function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	//assign random coordinates for good and bay guys
	goodX = Math.floor(Math.random()*421);
	goodY = Math.floor(Math.random()*421);
	badX = Math.floor(Math.random()*421);
	badY = Math.floor(Math.random()*421);
	window.onkeydown = keydownControl;
	return setInterval(draw,10);
}

//characteristics and drawing of the ball
function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

//Clear your canvas
function clear(){
	ctx.clearRect(0,0,width, height);
}

function drawBadGuy(badX,badY){
	ctx = document.getElementById("myCanvas").getContext("2d");
	var bad = new Image();
	bad.src = "squid.png";
	ctx.drawImage(bad,badX,badY,80,80);
}

function drawGoodGuy(goodX,goodY){
	ctx = document.getElementById("myCanvas").getContext("2d");
	var good = new Image();
	good.src = "patrick.png";
	ctx.drawImage(good,goodX,goodY,80,80);
}

//check if the ball is colliding with the good or bad guy
function collisionCheck(){
	if ((x>=badX) && (x<=badX+spriteWidth) && (y>=badY) && (y<=badY+spriteHeight)) {
		badCollision = true;
	}
	else {
		badCollision = false;
	}
	if ((x>=goodX) && (x<=goodX+spriteWidth) && (y>=goodY) && (y<=goodY+spriteHeight)) {
		badCollision = true;
	}
	else {
		badCollision = false;
	}

}

//change locations and score when collisions are true
function collisionHandle(){
	if (badCollision== true){
		badX = Math.floor(Math.random()*421);
		badY = Math.floor(Math.random()*421);
		score-=1;
		document.getElementById("scoreSystem").innerHTML="Score: "+score;
	}
}

//draw function to create a frame
function draw(){
	clear();
	circle(x,y,r);
	drawBadGuy(badX,badY);
	drawGoodGuy(goodX,goodY);

	if (goodX > x){
		goodX-=1;
	}
	if (goodX < x){
		goodX+=1;
	}
	if (goodY > y){
		goodY-=1;
	}
	if (goodY < y){
		goodY+=1;
	}

	if (badX > x){
		badX-=1;
	}
	if (badX < x){
		badX+=1;
	}
	if (badY > y){
		badY-=1;
	}
	if (badY < y){
		badY+=1;
	}

	collisionCheck();
	collisionHandle();
	//to make the circle stay in the canvas
	if (x+r > width || x-r <0){
		mx = -mx; //change to opposite direction
	}
	if (y+r >height ||y-r <0){
		my = -my;
	}

	//move your x and y every frame
	x+=mx;	//x=x+mx
	y+=my;	//y=y+my
}

function keydownControl(e){
	if (e.keyCode == 38){
		my = -2;
		mx = 0;
	}
	else if  (e.keyCode == 40){
		my = +2;
		mx = 0;
	}
	else if (e.keyCode == 37){
		mx = -2;
		my = 0;
	}
	else if (e.keyCode == 39){
		mx = +2;
		my = 0;
	}

}

init();


