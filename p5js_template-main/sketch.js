var a;
var b;




function setup() {
  createCanvas(400, 400);
  a=10;
  b=20;

  console.log("a and b before swapping",+a,+b);
  swap();
  console.log("a and b before swapping",+a,+b);

}

function draw() {
  background(220);
}

function swap(){
  [a,b]=[b,a]
}