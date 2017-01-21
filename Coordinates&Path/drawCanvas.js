var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="magenta";
//move our pen here
ctx.moveTo(150,50);
//draw a line to this point
ctx.lineTo(50,200);
ctx.lineTo(250,200);
ctx.closePath();
//to actually draw it
ctx.stroke();
ctx.fillStyle="green"
ctx.fill();

//setup for second canvas
var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');

//start drawing
ctx2.beginPath();
ctx2.lineWidth="2";
ctx2.strokeStyle="blue";
ctx2.moveTo(75,0);
ctx2.lineTo(0,150);
ctx2.lineTo(75,300);
ctx2.lineTo(150,150);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="blue";
ctx2.fill();

//setup for third canvas
var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');

//start drawing
ctx3.beginPath();
ctx3.lineWidth="2";
ctx3.strokeStyle="blue";
ctx3.moveTo(0,0);
ctx3.lineTo(300,300);
ctx3.lineTo(300,0);
ctx3.lineTo(0,300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="blue";
ctx3.fill();

//setup for fourth canvas
var c4 = document.getElementById('myCanvas4');
var ctx4 = c4.getContext('2d');

//start drawing
ctx4.beginPath();
ctx4.lineWidth="2";
ctx4.strokeStyle="blue";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(150,150);
ctx4.lineTo(150,0);
ctx4.lineTo(300,0);
ctx4.lineTo(0,300);
ctx4.lineTo(150,300);
ctx4.lineTo(150,150);
ctx4.lineTo(0,150);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="blue";
ctx4.fill();

//setup for fifth canvas
var c5 = document.getElementById('myCanvas5');
var ctx5 = c5.getContext('2d');

ctx5.beginPath();
ctx5.strokeStyle="blue";
ctx5.arc(150,150,80,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="blue"
ctx5.fill();

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




