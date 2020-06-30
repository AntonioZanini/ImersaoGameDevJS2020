
class sprite {

  constructor(spriteSheet,
    larguraSprite,
    alturaSprite,
    numSprites,
    spritesLinha,
    numSpriteInicial,
    colisao,
    paramColisao) {

    this.spriteSheet = spriteSheet;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.numSprites = numSprites;
    this.spritesLinha = spritesLinha;
    this.numSpriteInicial = numSpriteInicial;
    this.tipoColisao = colisao;
    this.paramColisao = paramColisao;
    this.coordX = 0;
    this.coordY = 0;


    this.numSpriteAtual = numSpriteInicial;

    this.animacoes = [];
    this.animacao = 0;
    this.numAnimacaoAnterior = 0;
  }

  exibe(posX, posY, largura, altura) {

    image(
      this.spriteSheet,
      posX,
      posY,
      largura,
      altura,
      this.coordX,
      this.coordY,
      this.larguraSprite,
      this.alturaSprite);

    this.anima();
  }

  addAnimacao(matrizAnimacao) {
    this.animacoes.push(matrizAnimacao);
  }

  anima() {
    if (this.numAnimacaoAnterior != this.animacao) {
      this.numSpriteAtual = 0;
      this.numAnimacaoAnterior = this.animacao;
    }
    this.numSpriteAtual++;


    if (this.animacao == 0) {
      if (this.numSpriteAtual >= this.numSprites) {
        this.numSpriteAtual = 0;
      }

      this.coordX = (this.numSpriteAtual %
          this.spritesLinha) *
        this.larguraSprite;

      this.coordY = Math.floor(this.numSpriteAtual /
          this.spritesLinha) *
        this.alturaSprite;
    } else {
      if (this.numSpriteAtual >= this.animacoes[this.animacao - 1].length) {
        this.numSpriteAtual = 0;
      }

      this.coordX = (this.animacoes[this.animacao - 1][this.numSpriteAtual] %
          this.spritesLinha) *
        this.larguraSprite;

      this.coordY = Math.floor(this.animacoes[this.animacao - 1][this.numSpriteAtual] /
          this.spritesLinha) *
        this.alturaSprite;
    }
  }

}