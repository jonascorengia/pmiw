class Prin {
  constructor() {
    this.objJuego = new Juego(3);
    this.pantallaInicio = new PantallaInicio();
    this.pantallaInstrucciones = new PantallaInstrucciones();
    this.pantallaCredito = new PantallaCredito();
  }
reinicio(){

   this.objJuego.reinicio();
   this.pantallaInicio.reinicio();
}
  dibujar() {
    if (this.objJuego.enemigos[0].contadorEnemigos === 3 && this.pantallaInicio.boton.contadorClicks === 2){
          this.pantallaInicio.boton.contarClicks();
        }
    if (this.objJuego.personaje.muero === 0 && this.pantallaInicio.boton.contadorClicks === 2){
          this.pantallaInicio.boton.contarClicks2();
        }
    print("clicks inicio:", this.pantallaInicio.boton.contadorClicks)
      if (this.pantallaInicio.boton.contadorClicks === 0) {
      this.pantallaInicio.dibujar();
    } else if (this.pantallaInicio.boton.contadorClicks === 1) {
      this.pantallaInstrucciones.dibujar();
    }
    else if (this.pantallaInicio.boton.contadorClicks === 2) {
       image(imagenes[1], 0, 0, 640, 480);
      this.objJuego.dibujar();
    } else if (this.pantallaInicio.boton.contadorClicks === 3){
    this.pantallaCredito.dibujar(1);
    } else if (this.pantallaInicio.boton.contadorClicks === 4){
          this.pantallaCredito.dibujar(2);
        } else if( this.pantallaInicio.boton.contadorClicks === 5){
        this.reinicio()
        }
        
      
    }
  teclaPresionada() {
    this.objJuego.teclaPresionada();
    
  }
  teclaPresionada2() {
    this.pantallaInicio.clickTocado();
  }
}
