let noseMove = 0;
let bamYes = false;
let a = 4;
let move;
let mic;
function setup() {
 
  mic = new p5.AudioIn()
  mic.start();
  

}
 

function draw() {
   console.log("mic level" + mic.getLevel());
  
  
  
   move = map(mic.getLevel(), 0, 1, 0, 100);
  
  createCanvas(400, 400);
  background(157,193,131);
   

  drawNose();
  
  
  drawSnout();
  
  drawLegs(move);
 
  drawBody(move);
  
  drawEars();
   
  drawFace();
  
  drawSnout();
  
  drawNose(noseMove);
 
  
  drawMouth();
  

  drawTree();
  
  
 drawFlower();
  
  //if-else
  if (a > 0) {
    console.log('positive');
    //for loop
    for (let i = 0; i < 5; i++) {
      console.log(i);
      let r = random(90, 20);
      let r2 = random(90, 20);
      fill (155, 135, 12)
      rect(r,r2,5, 5);
    }
  } else {
     fill (155, 135, 12)
    rect(10,10,10,10);
    console.log('negative');
  }
  
  
  
  if (bamYes == true){
    circle(width/2, height/2, 100);
  }
  
}

function mousePressed(){

  
  // if the position of the mouse is inside this region then do this
  
if (mouseX > width * 0.4 && mouseX < width * 0.8 && mouseY > height * 0.05 && mouseY < height *0.35) {
   console.log("mouse beep in here");
   //bamYes = !bamYes;
    if (noseMove == 0) {
      noseMove = -5;
    } else if (noseMove == -5) {
      noseMove = 0; 
      
    }
   

}
}   
 
   



function drawLegs(move){
  // front R leg
 noStroke();
   fill(160,102,45);
  let l = move; 
   rect(170, 259 + l, 25, 45);
  // front L leg
  rect(140, 250 + l, 25, 45);
   // back L leg
  rect(220, 259 + l, 25, 45);
  // back R leg
  rect(250, 250 + l, 25, 45);
  
  // nails on F R leg
  noStroke();
  fill(51);
  square(169, 295 + l, 10)
  square(185, 295 + l, 10)
  // nails on f L leg
  square(137, 285 + l, 10)
  square(150, 285 + l, 10)
  // nails on B R leg
  square(250, 285 + l, 10)
  square(265, 285 + l, 10)
  // nails on B L leg
  square(220, 295 + l, 10)
  square(235, 295 + l, 10)

}


function drawBody(){
  // body
  noStroke();
  fill(139,69,19);
  let l = move; 
  ellipse(210, 230 + l, 150, 100);
}

function drawEars(){
  // R ear
  noStroke();
  fill(139,69,19);
  ellipse(159, 165, 20, 25);
  // R inner ear
  noStroke();
  fill(128,0,0);
  ellipse(159, 170, 10, 25);
   // L ear
  noStroke();
  fill(139,69,19);
   ellipse(120, 159, 20, 25);
   // L inner ear
  noStroke();
  fill(128,0,0);
  ellipse(120, 165, 10, 25);
}


function drawFace(){
   //head
  noStroke();
  fill(160,102,45);
  ellipse(120, 200, 110, 80);
  
  noStroke();
  fill(255, 255, 255);
  ellipse(150, 190, 20, 25);
  
   // iris
  noStroke();
  fill(51);
  ellipse(148, 190, 10, 10);
  
  //pupil
  noStroke();
  fill(255, 255, 255);
   ellipse(144, 189, 5, 5);
}

function drawSnout(){
  //snout
  noStroke();
  fill(205,133,63);
  ellipse(90, 200, 50, 60);
}

function drawNose(noseMove){
  // nose
  noStroke();
  fill(51);
  arc(85, 195 + noseMove, 30 , 30, 0, PI);
}




function drawMouth(){
   //mouth
  noStroke();
  fill(240, 150, 150);
  arc(95, 215, 10, 10, 0, PI);
}

function drawTree(){
  fill(139,69,19);
  rect(0.5, 50, 45, 150);
  
   drawLeaf(30,40,40);
   drawLeaf(10,20,40);
  drawLeaf(5,5,40);
  drawLeaf(30,20,30);
  drawLeaf(5,50,30);
  
 
 
  fill (355, 229, 124)
  rect(30, 40, 20, 20);
   rect(50, 40, 20, 20);
  rect(55, 60, 20, 20);
   rect(25, 60, 20, 20);
  rect(35, 60, 20, 20);
  rect(35, 70, 20, 20);
  rect(20, 75, 20, 20);
    rect(60, 75, 20, 20);
  rect(40, 75, 20, 20);
  rect(45, 90, 20, 20);
  rect(35, 90, 20, 20);
  
  fill (0, 0, 0)
  circle(50, 75, 20);
  
  fill(139,69,19);
  rect(360, 200, 45, 150);
  
  drawLeaf(360,200,40);
  drawLeaf(350,140,40);
  drawLeaf(375,200,40);
  drawLeaf(340,180,40);
  drawLeaf(370,170,40);
  drawLeaf(340,160,40);
   drawLeaf(370,130,40);
  
   }

function drawLeaf(x,y,diameter){
 noStroke();
  fill(0, 71, 49);
   rect(x-10, y, diameter, diameter);
}

function drawFlower(x,y,diameter){
  
   fill(144,238,144);
circle(250, 100, 20);
  fill(144,238,144);
  rect(250, 100, 5, 50);
  fill(144,238,144);
  arc(235, 115, 40, 30, 0, PI);
  arc(235, 125, 40, 30, 0, PI);
  arc(270, 115, 40, 30, 0, PI);
 arc(270, 125, 40, 30, 0, PI);
}