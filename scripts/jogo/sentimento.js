class Sentimento extends Animacao {
  constructor(personagem,
    spriteSheet,
    larguraSprite,
    alturaSprite,
    largura,
    altura,
    ajustePosicaoY,
    numSprites,
    spritesPorLinha)  {

    super(
      spriteSheet,
      larguraSprite,
      alturaSprite,
      largura,
      altura,
      0,
      0,
      numSprites,
      spritesPorLinha);
    

    this.posX = personagem.posX -
                Math.floor(this.largura / 2) + 
                Math.floor(personagem.largura / 2);

    this.posY = personagem.posY -
                Math.floor(this.largura * ajustePosicaoY);

  }

  exibe() {
    super.exibe();
    
    if (this.sprite.atual == 0) {
      return 1;
    }
  }

}