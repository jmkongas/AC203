// alert("It's working!");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(0,0); //move pen to coordinate 0,0
ctx.lineTo(150,150); //draw a line to this position
ctx.stroke(); //asking the pen to actually draw

//drawing on Canvas 2
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle="rgb(128,128,128)";  //this has to be a string
ctx2.fillRect(100,100,100,100);
ctx2.strokeRect(80,80,140,140)
ctx2.clearRect(120,120,60,60)

//drawing on canvas 5
var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");

var x = 0;
var y=0;
var width = 300;
var height = 300;

ctx5.fillStyle="rgb(128,128,128)";
ctx5.fillRect(x,y,width,height);

while (width > 0){
	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;

	ctx5.clearRect(x,y,width,height);

	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;	
	ctx5.fillRect(x,y,width,height);


}

