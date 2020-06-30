class CenaManager {
  constructor(objetosJogo) {
    this._listaCenas = [];
    this.objetosJogo = objetosJogo;

    this._listaCenas.push(new TelaInicial(
      'telaInicial',
      tipoCena.menu,
      this.objetosJogo,
      (cenaEscolhida) => this._trocaCena(cenaEscolhida)));

    this._listaCenas.push(new Letreiro(
      'creditos',
      tipoCena.animacao,
      this.objetosJogo,
      () => this._trocaCena('telaInicial'),
      this.objetosJogo.resources.getTexto('tx_creditos'),
      'HELVETICA',
      20,
      height * 3.5,
      'bg_floresta',
      height,
      -5,
      'st_principal',
      true
    ));

    this._listaCenas.push(new Letreiro(
      'introducao',
      tipoCena.animacao,
      this.objetosJogo,
      () => this._trocaCena('fase1'),
      this.objetosJogo.resources.getTexto('tx_introducao'),
      'HELVETICA',
      25,
      height / 2 + 50,
      'bg_introducao',
      height,
      -5,
      'st_introducao',
      true
    ));

    this._listaCenas.push(new FaseRunner(
      'fase1',
      tipoCena.runner,
      this.objetosJogo,
      () => this._trocaCena('fase2')));


    this._listaCenas.push(new GameOver(
      'gameOver',
      tipoCena.menu,
      this.objetosJogo,
      undefined,
      () => {
        this.reset();
        this._trocaCena('fase1');
      },
      () => {
        this.reset();
        this._trocaCena('telaInicial');
      }));

    this.cenaAtual = 'telaInicial';
    this._getCena(this.cenaAtual).load();
  }

  exibe() {
    if (this._getCena(this.cenaAtual).draw() === tipoCena.gameOver) {
      this._trocaCena('gameOver');
      this._getCena(this.cenaAtual).exibe();
    }
  }

  reset() {
    this.objetosJogo.placar.novoPlacar();
    this.objetosJogo.vida.reset();
    this.objetosJogo.personagem.reset();
    this.objetosJogo.inimigoManager.reset();
    this.objetosJogo.objetoManager.reset();
    this.objetosJogo.projetilManager.reset();
    this.objetosJogo.cenario.xImagem1 = 0;
    this.objetosJogo.cenario.xImagem2 = width;
  }

  _getCena(nome) {
    return this._listaCenas.find(i => i.nome == nome);
  }

  _trocaCena(proximaCena) {
    this._getCena(this.cenaAtual).close();
    this.cenaAtual = proximaCena;
    this._getCena(this.cenaAtual).load();
  }

  click() {
    this._getCena(this.cenaAtual).click();
  }

  keyPressed(key, keyCode) {
    this._getCena(this.cenaAtual).keyPressed(key, keyCode);
  }
}