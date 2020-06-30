class Personagem extends Animacao {

  constructor(
    sprites,
    largura,
    altura,
    posX,
    posY,
    gameResources,
    energiaMaxima,
    energiaInicial) {

    super(
      sprites,
      largura,
      altura,
      posX,
      posY);

    this.gameResources = gameResources;
    this.limitePulo = 2;
    this.puloAtual = 0;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.invencivel = false;
    this.counter = 0;
    this.precisaoBoxLargura = 0.5;
    this.precisaoBoxAltura = 0.9;


    this.energiaMaxima = energiaMaxima;
    this.energiaInicial = energiaInicial;
    this.energiaAtual = energiaInicial;
  }

  reduzirEnergia(valor) {
    this.energiaAtual -= valor;
    if (this.energiaAtual < 0) {
      this.energiaAtual = 0;
    }
  }

  aumentaEnergia(valor) {
    this.energiaAtual += valor;
    if (this.energiaAtual > this.energiaMaxima) {
      this.energiaAtual = this.energiaMaxima;
    }
  }

  exibe() {
    if (this.invencivel == true) {
      if ((this.counter % 3) != 0) {
        tint(255, 0, 0);
      }
      super.exibe();
      noTint();
      this.counter++;
      if (this.counter == 90) {
        this.counter = 0;
      }
    } else {
      super.exibe();
    }

  }

  pular() {
    if (this.puloAtual < this.limitePulo) {
      this.velocidadeDoPulo = -50;
      this.puloAtual++;
      this.gameResources.getSom('se_pulo').play();

    }
  }

  tornaInvencivel() {
    this.invencivel = true;
    this.gameResources.getSom('se_dano').play();
    setTimeout(() => {
      this.invencivel = false;

    }, 1500);
  }

  aplicaGravidade() {
    this.posY = this.posY + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.posY > this.posYInicial) {
      this.posY = this.posYInicial;
      this.puloAtual = 0;
      this.spriteAtual = 0;
    }
    if (this.posY != this.posYInicial) {

      this.spriteAtual = 1;
      if (this.velocidadeDoPulo < 0) {
        this.anima(1);
      } else {
        this.anima(2);
      }
    }
  }

  reset() {
    this.energiaAtual = this.energiaInicial;
  }


}