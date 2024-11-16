let p = [];
//enlace de video explicativo
//https://youtu.be/qItkJrwyybY


let sonido;
let anpantalla = 640;
let alpantalla = 480;
let tamt, at, it, it1;
let l= 0;
let j=0;
let x
let pants = {
0 : [0],
1 : [1],
2 : [2,3],
3 : [4],
4 : [5],
5 : [6,7],
6 : [8],
7 : [9,10],
8 : [11,12],
9 : [13],
10 : [14],
11 : [15],
12 : [16]
};

function preload() {
  soundFile = loadSound('data/tiro.mp3');
  textos = loadStrings('data/textoh.txt');
  print(textos);
    for (let i=0; i<16; i++) {
    p.push(loadImage('data/foto'+i+'.jpeg'));
}
}
function setup() {
createCanvas(anpantalla, alpantalla); 

}


function draw() {
   print (x);
  pantallas(pants[l][j])
  
  x = pants [l] [j]
 
 if (x === 0) {
   diboton(width -45, height /2, 50, 50, 'A', 32, 10);
   diboton(45,height /2, 50, 50,'B',32,10); 
 }else if (x === 15) {
   diboton(width -45, height /2, 50,50, 'reiniciar',13,23);
}
 else if (pants[l + 1].length === 1) {
   
   diboton(width -45, height /2, 50,50, 'next',23,21);
 } 
 else if (pants[l + 1].length === 2){
    diboton(width -45, height /2, 50, 50, 'A', 32, 10);
   diboton(45,height /2, 50, 50,'B',32,10); 
 } 
return l;
return j
}
function diboton(p,k,g,h,y,z,w){
  push();
  rectMode(CENTER);
  fill(0);
  rect (p,k,g,h);
  textSize(z);
  fill(255);
  text(y,p-w , k+10);
pop();
}
