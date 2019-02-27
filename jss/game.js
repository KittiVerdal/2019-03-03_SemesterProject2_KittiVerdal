
var stark = document.getElementById("iconStark");

function styleImage(){
stark.classList.add("animated");
stark.classList.add("fadeInUp");
stark.classList.add("slow");
}

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var xCircle = [ 1000, 860, 780, 1000,
  1200, 1300, 1350, 1050, 1020,
  940, 820, 520, 500, 580, 750,
  890, 1090, 1190, 890, 850, 950, 770,
  620, 650, 990, 1030, 1050,
  1200, 1110, 980, 870, 570 ];
var yCircle = [ 3650, 3470, 3300,
  3190, 3050, 2900, 2700, 2500,
  2870, 2880, 2680, 2700, 2500,
  2400, 2350, 2300, 2200, 2000,
  1780, 1580, 1380, 1300, 1250,
  1050, 950, 790, 630, 430, 300, 230, 150, 100 ];



//Game Path
ctx.lineWidth = 20;
ctx.strokeStyle = "#47636F";

ctx.beginPath();
ctx.moveTo(1000,3650);
ctx.lineTo(860,3470);
ctx.moveTo(860,3470);
ctx.lineTo(780,3300);
ctx.moveTo(780,3300);
ctx.lineTo(1000,3190);
ctx.moveTo(1000,3190);
ctx.lineTo(1200,3050);
ctx.moveTo(1200,3050);
ctx.lineTo(1300,2900);
ctx.moveTo(1300,2900);
ctx.lineTo(1350,2700);
ctx.moveTo(1350,2700);
ctx.lineTo(1050,2500);
ctx.moveTo(1050,2500);
ctx.lineTo(1020,2870);
ctx.moveTo(1020,2870);
ctx.lineTo(940,2880);
ctx.moveTo(940,2880);
ctx.lineTo(820,2680);
ctx.moveTo(820,2680);
ctx.lineTo(520,2700);
ctx.moveTo(520,2700);
ctx.lineTo(500,2500);
ctx.moveTo(500,2500);
ctx.lineTo(580,2400);
ctx.moveTo(580,2400);
ctx.lineTo(750,2350);
ctx.moveTo(750,2350);
ctx.lineTo(890,2300);
ctx.moveTo(890,2300);
ctx.lineTo(1090,2200);
ctx.moveTo(1090,2200);
ctx.lineTo(1190,2000);
ctx.moveTo(1190,2000);
ctx.lineTo(890,1780);
ctx.moveTo(890,1780);
ctx.lineTo(850,1580);
ctx.moveTo(850,1580);
ctx.lineTo(950,1380);
ctx.moveTo(950,1380);
ctx.lineTo(770,1300);
ctx.moveTo(770,1300);
ctx.lineTo(620,1250);
ctx.moveTo(620,1250);
ctx.lineTo(650,1050);
ctx.moveTo(650,1050);
ctx.lineTo(990,950);
ctx.moveTo(990,950);
ctx.lineTo(1030,790);
ctx.moveTo(1030,790);
ctx.lineTo(1050,630);
ctx.moveTo(1050,630);
ctx.lineTo(1200,430);
ctx.moveTo(1200,430);
ctx.lineTo(1110,300);
ctx.moveTo(1110,300);
ctx.lineTo(980,230);
ctx.moveTo(980,230);
ctx.lineTo(870,150);
ctx.moveTo(870,150);
ctx.lineTo(570,100);
ctx.closePath();
ctx.stroke();

//save sale
ctx.save();

ctx.scale(0.1,0.1);
ctx.drawImage(stark, 500, 500);

ctx.restore();
ctx.save();


//circles

for (var i = 0; i < xCircle.length; i++) {
  for (var j = 0; j < yCircle.length; j++) {
ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = "white";
ctx.arc(xCircle[i], yCircle[i], 20, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

}
}
