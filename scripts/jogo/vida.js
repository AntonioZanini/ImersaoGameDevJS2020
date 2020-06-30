class Vida {
  constructor(inicial, maximo, imagemCoracao) {
    this.imagemCoracao = imagemCoracao;
    this.maximo = maximo;
    this.inicial = inicial;
    this.vidasAtuais = inicial
    this.largura = 50;
    this.altura = 50;

    this.posX = 20;
    this.posY = 20;
  }
  exibe() {
    for (let i = 0; i < this.vidasAtuais; i++) {
      const espacamento = (i * this.largura) + (i * 10);
      image(
        this.imagemCoracao,
        this.posX + espacamento,
        this.posY,
        this.largura,
        this.altura);
    }
  }

  ganharVida() {
    if (this.vidasAtuais <= this.maximo) {
      this.vidasAtuais++;
    }
  }

  perderVida() {
    this.vidasAtuais--;
  }
  
  reset() {
    this.vidasAtuais = this.inicial;
  }

}