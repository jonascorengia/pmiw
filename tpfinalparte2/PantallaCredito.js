class PantallaCredito{
  constructor(){
   this.boton = new Boton(width/ 2,height /1.2-220, "    reiniciar");
    this.posX = 0;
    this.posY = 0;  
  }
   dibujar(pantallita) {
     image(imagenes[4], 0, 0, 640, 480);
if (pantallita === 1){
  this.boton.dibujar();
  fill(255)
  textSize(40)
  text("GANASTE!",width/2-100,height /6 );
  text("creador Jonas Corengia \n Legajo 118999/7",width/2-200, height/2 + 100 )
  
      
   } else if (pantallita === 2){
      this.boton.dibujar();
     
      fill(255)
  textSize(40)
  text("PERDISTE!",width/2-100,height /6 );
  text("creador Jonas Corengia \n Legajo 118999/7",width/2-200, height/2 + 100 )
   }
 }
clickTocado(){
this.boton.clickTocado()
}
real(){
  this.boton.contadorClicks
}
  
  
  
}
