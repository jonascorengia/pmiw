function pantallas (n) {

  background(255);
  image(p[n], 0, 0, anpantalla, alpantalla);
  text(textos[n], it, it1, at);

  reload ()
}
function reload (pantallas) {
  fill(255);
  if(x === 15){
   at = anpantalla * 0.8;
  tamt = alpantalla * 0.08;
  it1 = anpantalla/ 5 ;
  it = anpantalla * 0.18;
 }else{
  
  
  at = anpantalla * 0.6;
  tamt = alpantalla * 0.05;
  it1 = anpantalla / 3 * 1.4;
  it = anpantalla * 0.18;
}

  textSize(tamt);
}
function mouseClicked () {
  accionboton()  

    soundFile.play();

}
function accionboton() {
  if (x === 15){ if (mouseX <= width-20  && mouseX >= width-70 && mouseY <= height/2 +25 && mouseY >= height/2 -25){
    l=-1;
    j=0;
  }
  }
  if (x === 7 || x === 9 || x === 11) {
    if (mouseX <= width-20  && mouseX >= width-70 && mouseY <= height/2 +25 && mouseY >= height/2 -25) {      //boton derecha
      j=0;
      l= 10;
    }
  }
  if (x === 0) {
    if (mouseX <= 70  && mouseX >= 20 && mouseY <= height/2 +25 && mouseY >= height/2 -25) {  //boton izquierda
      j=0;
      l= 11;
    }
  }
  if (pants[l + 1].length == 1) {
    
    if (mouseX <= width-20  && mouseX >= width-70 && mouseY <= height/2 +25 && mouseY >= height/2 -25) {      //boton derecha
      j=0;
      l++;
    }
  } else if (pants[l + 1].length === 2) {
    if (mouseX <= width-20  && mouseX >= width-70 && mouseY <= height/2 +25 && mouseY >= height/2 -25) { //boton derecha
      j=0;
      l++;
    } else if (mouseX <= 70  && mouseX >= 20 && mouseY <= height/2 +25 && mouseY >= height/2 -25) {  //boton izquierda
      j=1;
      l++;
    }
  }
}
