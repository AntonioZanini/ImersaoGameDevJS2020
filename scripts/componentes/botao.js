class Botao {
  constructor(texto, posX, posY, classe, centralizacao) {
    this.texto = texto;
    this.posX = posX;
    this.posY = posY;
    this.classe = classe;
    this.centralizacao = centralizacao;
    this._visible = false;
  }

  load(funcao) {
    this.botao = createButton(this.texto);
    this.botao.mousePressed(funcao);
    this.botao.addClass(this.classe);
    this._visible = true;
  }
  
  draw() {
    this.botao.position(this.posX, this.posY);
    if (this._visible == true && this.centralizacao) {
      this.botao.center(this.centralizacao);
    }
  }

  close() {
    this._visible = false;
    this.botao.remove();
  }

}