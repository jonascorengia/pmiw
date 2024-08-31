//tp1
//COMISION 5
//https://youtu.be/3-DDB0VZbHw
//Jonas Corengia, 118999/7
//perdon por el ruido del audio, pero es que no tengo un microfono con mucha calidad.

let imagen1 ;
let tami;
let cant;
let p;
let i;
let l;
let f;
let h;
let y;
function preload(){
    imagen1 = loadImage('data/img.jpg');
}
function setup() {
createCanvas(800, 400);
  cant = 15;
}
function draw() {
  cuadro();
}

function mousePressed () {
  cant +=p;
}
function keyPressed() {
  cant = 15;
}
