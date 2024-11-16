class Personaje {
  constructor(posX, posY) {
    this.posX=posX;
    this.posY=posY;
    this.miColor = color (255, 0, 0);
    this.bala = new Bala();
    this.muero = 1;
  }
  reinicio(){
    this.muero = 1;
  }
  
  dibujar() {
    print("muero:",this.muero);
    
    this.bala.dibujar();

    fill(this.miColor);
    rectMode(CENTER);
    image(imagenes[2],this.posX-25, this.posY-25, 50, 50);
    this.bala.dibujar();
  }
  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === ENTER) {
      this.dispararBala();
      
      soundFile.play();
    }
  }
  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }

  dispararBala() {
    this.bala = new Bala(this.posX, this.posY)
      this.bala.disparar();
  }

  haDisparoBala() {
    return this.bala.disparada;
  }
  noGana(){
    this.muero = 0;
  }
  haTocadoEnemigo(enemigos) {
    if (dist(this.posX, this.posY, enemigos.posX, enemigos.posY) < 25) {
      this.noGana();
    }
  }
}
