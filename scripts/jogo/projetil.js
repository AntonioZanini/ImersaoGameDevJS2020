class Projetil extends Animacao {
  constructor(
    sprites,
    largura,
    altura,
    posX,
    posY,
    velocidade,
    funcaoEfeito) {

    super(
      sprites,
      largura,
      altura,
      posX,
      posY);

    this.velocidade = velocidade;
    this.funcaoEfeito = funcaoEfeito;
  }

  move() {
    this.posX += this.velocidade;

    if (this.velocidade < 0 &&
      this.posX < -this.largura) {
      this.destruir = 1;
    } else if (this.velocidade > 0 &&
      this.posX > width + this.largura) {
      this.destruir = 1;
    }

  }

  interagir(entidade) {
    this.destruir = 1;
    entidade.destruir = 1;
    this.funcaoEfeito(entidade);
  }
}