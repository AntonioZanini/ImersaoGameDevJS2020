class Barra {
  constructor(valorMaximo,
    corPrincipal,
    corSecundaria,
    posX,
    posY,
    largura,
    altura) {

    this.valorMaximo = valorMaximo;
    this.corPrincipal = corPrincipal;
    this.corSecundaria = corSecundaria;
    this.posX = posX;
    this.posY = posY;
    this.altura = altura;
    this.largura = largura;
  }

  exibe(valor) {
    fill(this.corSecundaria);
    rect(this.posX, this.posY, this.largura, this.altura, 30);
    let largura = this.largura * (valor / this.valorMaximo);
    fill(this.corPrincipal);
    rect(this.posX, this.posY, largura, this.altura, 30);
    fill(color(0, 0, 0));
  }




}