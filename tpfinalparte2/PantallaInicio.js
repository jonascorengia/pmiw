class PantallaInicio {
  constructor() {
    this.boton = new Boton(width /2,height /1.2, "Empecemos");
    this.posX = 0;
    this.posY = 0;
  }
  reinicio(){
    this.boton.reinicioClicks();
  }
  dibujar() {
image(imagenes[0], 0, 0, 640, 480);
fill(255);
textSize(30);
text("        ayuda a hitman \n derrotar a sus enemigos", width/4, height/2);        
this.boton.dibujar();

}

clickTocado(){
this.boton.clickTocado()
}
real(){
  this.boton.contadorClicks
}

}
