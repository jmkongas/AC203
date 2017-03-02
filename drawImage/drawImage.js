//Set up image objects
var tank = new Image();
var mario = new Image ();
var moon = new Image();
var dragonball = new Image();

//Assign source to the image object
tank.src = "tank.png";
mario.src = "mario.png";
moon.src = "moon.png";
dragonball.src = "dragonball.png";

//Drawing image to the canvas once it's done loading
tank.onload = function(){
	ctx6.drawImage(tank,400,130,300,270);
}

mario.onload = function(){
	ctx6.drawImage(mario,100,330,100,100);
}

moon.onload = function(){
	ctx6.drawImage(moon,32,30,150,150);
}

dragonball.onload = function(){
	ctx6.drawImage(dragonball,200,230,150,250);
}
//setup for sixth canvas
var c6 = document.getElementById('myCanvas6');
var ctx6 = c6.getContext('2d');

//drawing sky and grass
ctx6.fillStyle="green";
ctx6.fillRect(0,350,800,150);
ctx6.fillStyle="cyan";
ctx6.fillRect(0,0,800,350);

//Sun
ctx6.beginPath();
ctx6.arc(100,100,50,0,6.28);
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle="yellow";
ctx6.fill();

//Road
ctx6.beginPath();
ctx6.moveTo(375,350);
ctx6.lineTo(350,500);
ctx6.lineTo(450,500);
ctx6.lineTo(425,350);
ctx6.closePath();
ctx6.fillStyle="grey";
ctx6.fill();




