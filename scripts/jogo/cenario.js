class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.xImagem1 = 0
    this.xImagem2 = width
  }
  exibe() {
    image(this.imagem, this.xImagem1, 0, width, height);
    image(this.imagem, this.xImagem2, 0, width, height);
  }
  move() {
    this.xImagem1 -= this.velocidade;
    this.xImagem2 -= this.velocidade;
    if (this.xImagem1 < -width){
      this.xImagem1 = width;
    }
    if (this.xImagem2 < -width){
      this.xImagem2 = width;
    }
  }
  
}