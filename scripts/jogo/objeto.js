class Objeto extends Animacao {
  constructor(
    sprites,
    largura,
    altura,
    posX,
    posY,
    cenario,
    som) {

    super(
      sprites,
      largura,
      altura,
      posX,
      posY);

    this.cenario = cenario;
    this.pontos = 1000;
    this.som = som;
  }

  move() {
    this.posX -= this.cenario.velocidade;
    if (this.posX < -this.largura) {
      this.destruir = 1;
    }
  }

  exibe() {
    tint(111, 206, 99);
    super.exibe();
    noTint();
  }

  interagir(objetoJogo) {
    objetoJogo.placar.adicionarPontos(this.pontos);
    this.destruir = 1;
    
    //setVolume(volume, [rampTime], [timeFromNow])
    this.som.setVolume(0.2);
    //play([startTime], [rate], [amp], [cueStart], [duration])
    this.som.play(0,undefined,undefined,undefined,1.2);
  }

}