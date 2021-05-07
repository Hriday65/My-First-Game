var capsule,parachute,deattacher,lfuel,mFuel,sFuel,hThruster,Thruster,sThruster,Legs,Menu
var basic,pchute


function setup() {
  createCanvas(800,922);


  basic = new Basic()
  pchute = new Parachute()
}

function draw() {
  background("black");  
  
  basic.display()
  
}