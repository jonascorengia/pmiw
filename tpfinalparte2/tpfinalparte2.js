//https://youtu.be/2Fv_N-efI50

let imagenes = [];
let objPrin;


function preload() {
  soundFile = loadSound('data/tiro.mp3');
    for (let i=0; i<5; i++) {
    imagenes.push(loadImage('data/imagen'+i+'.jpeg'));
    }
    imagenes[5] = loadImage('data/imagen5.jpg')
}

function setup() {
  createCanvas(640,480);
  objPrin = new Prin();
}


function draw() {

  background(200);
objPrin.dibujar();
if(keyIsPressed){
    objPrin.teclaPresionada();
  }
if(mouseIsPressed){
  objPrin.teclaPresionada2()
}
}
