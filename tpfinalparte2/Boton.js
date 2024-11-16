class Boton {
  constructor(posX, posY, pantallaTexto) {
    this.posX =posX;
    this.posY =posY;
    this.texto = pantallaTexto;
    this.contadorClicks = 0;
  }


  dibujar() {
    textSize(30);
    rectMode(CENTER);
    fill(255);
    rect(this.posX, this.posY, 200, 100);
    fill(0); 
    text(this.texto, this.posX-80, this.posY+10);

  }

  contarClicks() {
    this.contadorClicks ++;
  }
  contarClicks2() {
    this.contadorClicks += 2;
  }
  reinicioClicks() {
    this.contadorClicks = 0;
  }
  claveClicks() {
    this.contadorClicks = 5;
  }

  clickTocado() {
    if (this.contadorClicks === 0) {
      if (mouseX <= this.posX + 100 && mouseX >= this.posX - 100 && mouseY <= this.posY + 50 && mouseY >= this.posY - 50 ) {
        this.contarClicks()
      }
    } else if (this.contadorClicks === 1) {
      if (mouseX <= this.posX + 100 && mouseX >= this.posX - 100 && mouseY <= this.posY + 50 - 120 && mouseY >= this.posY - 50 - 120 ) {
        this.contarClicks()
      }
    } else if (this.contadorClicks === 3) {
      if (mouseX <= this.posX + 100 && mouseX >= this.posX - 100 && mouseY <= this.posY + 50 - 220 && mouseY >= this.posY - 50 - 220 ) {
        this.contarClicks2();
      }
    } else if (this.contadorClicks === 4) {
      if (mouseX <= this.posX + 100 && mouseX >= this.posX - 100 && mouseY <= this.posY + 50 - 220 && mouseY >= this.posY - 50 - 220 ) {
        this.contarClicks();
      }
    }
  }
}
