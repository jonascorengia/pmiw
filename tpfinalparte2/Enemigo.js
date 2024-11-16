class Enemigo {
   
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.rebote = false;
    this.miColor = color(0, 255, 0);
    this.vida= 2;
    this.velocidad = 1;
    this.aumentoVel=1;
    this.caida = 3
    this.contadorEnemigos = 0;
  }
reinicio(posX,posY){

      this.posX = posX;
    this.posY = posY;
    this.rebote = false;
    this.miColor = color(0, 255, 0);
    this.vida= 2;
    this.velocidad = 1;
    this.aumentoVel=1;
    this.caida = 3
    this.contadorEnemigos = 0;

}
  dibujar() {
   // print(this.contadorEnemigos)
    if (this.vida === 2) {
      fill(this.miColor);
      image(imagenes[3],this.posX-25, this.posY-25, 50, 50);
      this.mover();
    }
  }
  vel(){
    this.aumentoVel +=3;
    this.contadorEnemigos ++;
  }

  mover() {
    this.posX = this.posX + this.velocidad * this.aumentoVel;
    this.posY = this.posY + this.velocidad/ this.caida ;
    
    if(this.rebote === false && (this.posX > 0 && this.posX < width)){
      this.rebote = true;
    }
    if (this.rebote === true && (this.posX > width || this.posX < 0)) {
      this.velocidad = this.velocidad * -1;
      this.caida = this.caida * -1;
      
    
    }
  }


  matar() {
    this.vida --;
  }
  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 25) {
      this.matar();
    }
  }
}
