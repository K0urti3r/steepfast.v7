let detailY;

function setup() {
  createCanvas(400, 400, WEBGL);
  setAttributes('antialias', true);
}
function draw() {
  push()
  
  background(50);
  strokeWeight(4);
  stroke(255);
  //point(-60, 100);
  //point(-180, 100);
  //point(25, 100);
  //point(40,100);

  strokeWeight(5);
  noFill();

  beginShape();
  vertex(-180,100);
  bezierVertex(-190, 20,-100, -30, -40, 100);
  endShape();

  beginShape();
  vertex(-40,100,-5);
  bezierVertex(10,200,100, 104, 100,15
);
  endShape();
  noStroke();
  blendMode(SCREEN)
  rectMode(CENTER)
  colorMode(RGB);
const from = color(30, 255, 0,180);
const to = color(255, 20, 10,200);
colorMode(RGB);
const interA = lerpColor(from, to, 0.40);
const interB = lerpColor(from, to, 0.55);
const interC = lerpColor(from, to, 0.75);

push();
  fill(from );
rotate(PI / -6);
rect(-60,40, 40, 100,-40, 40,0,-40);
 pop();
  
  push();
rotate(PI / -9.54);
fill(interA);
rect(-30,50, 40,100 );
  pop();
  
  push();
  rotate(PI / -50);
fill(interB);
rect(10, 55, 40, 100);
  pop()
  
  push();
  rotate(PI / 40);
fill(interC);
rect(40, 55, 40, 100);
  pop();
  
  push()
  fill(to);
  rotate(PI / 8);
  rect(77, 38, 40, 100,0,-40,-40,0)
  pop();
  
  push();
  
  rotate(PI/ 5);
  rectMode(CENTER)
    strokeWeight(2);
  stroke(255);
  fill(30, 255, 0,160);
  rect(92,69, 12, 80, 5,5, 5,5)
  pop();
  
   push();
  strokeWeight(2);
  stroke(240);
  //rectMode(CENTER);
  //rotate(PI/4);
  fill(255, 20, 10,255)
  triangle(80, 50,40, 60, 60, 100);
  pop(); 
  
  pop();
  
push();
  rectMode(CENTER);
  strokeWeight(2)
  stroke(0)
  fill(255)
   
  quad(-130, 20,-120,-20,-140,-12,-110,-10);
  pop();
  
  push();
  strokeWeight(2)
  stroke(15)
  fill(25);
  line(-130,20,-130,60)
  pop;
  
  push();
   rectMode(CENTER)
    strokeWeight(2);
  stroke(255); 
  rect( -130,80,45,60)
  pop();
  
  push();
  strokeWeight(2);
  stroke(255); 
rotate(PI / -5);
  ellipse(-154, -13,12, 60); 
  pop();
  
push();
  strokeWeight(2);
  stroke(255); 
rotate(PI / 5);
  ellipse(-57, 140,12, 60); 
  pop();
  
  push();
    strokeWeight(2);
  stroke(255); 
  ellipse(-130, 80,12, 60); 
  ellipse(-130, 80,40, 12); 
  ellipse(-130, 80,10, 10);
  pop();
}