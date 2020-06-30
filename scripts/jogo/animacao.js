class Animacao {
  constructor(
    sprites,
    largura,
    altura,
    posX,
    posY) {

    this.sprites = sprites || [];
    this.largura = largura;
    this.altura = altura;
    this.posX = posX;
    this.posYInicial = height - this.altura - posY;
    this.posY = this.posYInicial;
    this.spriteAtual = 0;

    this.visible = true;

    this.precisaoBoxLargura = 1;
    this.precisaoBoxAltura = 1;

  }

  adicionarSprites(sprites) {
    if (sprites) {
      this.sprites = this.sprites.concat(sprites);
    }
  }

  exibe() {
    if (this.visible) {
      this.sprites[this.spriteAtual].
      exibe(this.posX,
        this.posY,
        this.largura,
        this.altura);
    }
  }

  getSpriteAtual() {
    return this.sprites[this.spriteAtual];
  }

  anima(numAnimacao) {
    this.sprites[this.spriteAtual].animacao = numAnimacao;
  }

  getHitBox() {
    let ajusteX = 0;
    let ajusteY = 0;
    switch (this.sprites[this.spriteAtual].tipoColisao) {
      case tipoColisao.circle:
        ajusteX = this.sprites[this.spriteAtual].paramColisao.x;
        ajusteY = this.sprites[this.spriteAtual].paramColisao.y;
        let ajusteD = this.sprites[this.spriteAtual].paramColisao.d;

        return {
          posX: this.posX + (this.largura / 2) + ajusteX,
            posY: this.posY + (this.altura / 2) + ajusteY,
            diametro: this.altura * ajusteD
        };
      case tipoColisao.rect:
        ajusteX = this.sprites[this.spriteAtual].paramColisao.x;
        ajusteY = this.sprites[this.spriteAtual].paramColisao.y;

        return {
          posX: this.posX + (this.largura * (1 - ajusteX)) / 2,
            posY: this.posY + (this.altura * (1 - ajusteY)) / 2,
            largura: this.largura * ajusteX,
            altura: this.altura * ajusteY
        };
    }
  }

  verificarColisao(entidade) {
    // DEGUG
    if (showColisonShapes) {
      noFill();
      rect(
        this.posX + (this.largura * (1 - this.precisaoBoxLargura)) / 2,
        this.posY + (this.altura * (1 - this.precisaoBoxAltura)) / 2,
        this.largura * this.precisaoBoxLargura,
        this.altura * this.precisaoBoxAltura
      )
      fill(color(0, 0, 0));
    }
    //



    if (entidade.getSpriteAtual().tipoColisao == tipoColisao.circle) {
      let circleHitBox = entidade.getHitBox()
      // DEGUG
      if (showColisonShapes) {
        noFill();
        circle(
          circleHitBox.posX,
          circleHitBox.posY,
          circleHitBox.diametro);
        fill(color(0, 0, 0));
      }
      
      //
      if (collideRectCircle(
          this.posX + (this.largura * (1 - this.precisaoBoxLargura)) / 2,
          this.posY + (this.altura * (1 - this.precisaoBoxAltura)) / 2,
          this.largura * this.precisaoBoxLargura,
          this.altura * this.precisaoBoxAltura,
          circleHitBox.posX,
          circleHitBox.posY,
          circleHitBox.diametro)) {

        return true;
      }
    } else if (entidade.getSpriteAtual().tipoColisao == tipoColisao.rect) {
      let rectHitBox = inimigo.getHitBox();
      // DEGUG
      if (showColisonShapes) {
        noFill();
        rect(
          rectHitBox.posX,
          rectHitBox.posY,
          rectHitBox.largura,
          rectHitBox.altura
        );
        fill(color(0, 0, 0));
      }
      //
      if (collideRectRect(
          this.posX + (this.largura * (1 - this.precisaoBoxLargura)) / 2,
          this.posY + (this.altura * (1 - this.precisaoBoxAltura)) / 2,
          this.largura * this.precisaoBoxLargura,
          this.altura * this.precisaoBoxAltura,
          rectHitBox.posX,
          rectHitBox.posY,
          rectHitBox.largura,
          rectHitBox.altura)) {

        return true;
      }
    }

  }

  verificarColisaoLista(listaEntidades) {
    /*
    noFill();
    rect(
      this.posX + (this.largura * (1 - this.precisaoBoxLargura)) / 2,
      this.posY + (this.altura * (1 - this.precisaoBoxAltura)) / 2,
      this.largura * precisaoBoxLargura,
      this.altura * this.precisaoBoxAltura
    );
    */

    for (let i = 0; i < listaEntidades.length; i++) {
      let entidade = listaEntidades[i];

      return this.verificarColisao(entidade);

    }
    return false;
  }
  
  getPosYCentral(){
    return height - this.posY - (this.altura / 2);
  }

}