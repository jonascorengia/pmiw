class Juego {
  constructor(cantidadEnemigos) {
    this.pant = 0;
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    

  }
reinicio(){
  this.personaje.reinicio();
  for (let i = 0; i < this.cantidadEnemigos; i++) {
       this.enemigos[i].reinicio(120+i*200, 70);
  }
}

  dibujar() {
    this.personaje.dibujar();

    for (let i=0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();

      this.controlarDisparosAEnemigos();
      this.controlarColisionEnemiga()
    }
  }

  iniciar() {
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(120+i*200, 70);
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 420);
  }

  personajeGano() {
  }
  teclaPresionada() {
    this.personaje.teclaPresionada();
  }
  controlarDisparosAEnemigos(){
    if (this.personaje.haDisparoBala()) {
      for (let i = 0; i < this.cantidadEnemigos; i++) {
       this.enemigos[i].haTocadoLaBala(this.personaje.bala)
       if (this.enemigos[i].vida === 1){
          for (let i = 0; i < this.cantidadEnemigos; i++) {
         this.enemigos[i].vel();
          }
       }
      }
    }
  }
  
  controlarColisionEnemiga(){
    for (let i = 0; i < this.cantidadEnemigos; i++) {
    this.personaje.haTocadoEnemigo(this.enemigos[i])
  }
}
}
