class Inimigo extends Animacao {
  constructor(
    sprites,
    largura,
    altura,
    posX,
    posY,
    velocidade
  ) {

    super(
      sprites,
      largura,
      altura,
      posX,
      posY);

    this.destruir = 0;
    this.velocidade = velocidade || 15;
  }

  move() {
    this.posX -= this.velocidade;
    if (this.posX < -this.largura) {
      this.destruir = 1;
    }
  }

  

}