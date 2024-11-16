class PantallaInstrucciones{
 constructor(){
   this.boton = new Boton(width /2,height /1.2 - 120, "  Entendido");
    this.posX = 0;
    this.posY = 0; 
   
   
 }
  dibujar() {
image(imagenes[5], 0, 0, 640, 480);
      this.boton.dibujar();

}

clickTocado(){
this.boton.clickTocado()
}
real(){
  this.boton.contadorClicks
}

}
  
  
