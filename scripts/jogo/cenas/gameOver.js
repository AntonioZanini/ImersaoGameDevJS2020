class GameOver extends Cena {
  constructor(
    nome,
    tipoCena,
    objetosJogo,
    funcaoMudancaCena,
    funcaoReiniciar,
    funcaoTelaInicial) {
    super(
      nome,
      tipoCena,
      objetosJogo);

    this.funcaoReiniciar = funcaoReiniciar;
    this.funcaoTelaInicial = funcaoTelaInicial;

    this.botaoReiniciar = new Botao(
      ' Reiniciar  ',
      width / 2,
      height / 10 * 6,
      'botao-tela-inicial',
      'horizontal'
    );

    this.botaoTelaInicial = new Botao(
      'Tela Inicial',
      width / 2,
      height / 10 * 7,
      'botao-tela-inicial',
      'horizontal'
    );

  }

  load() {
    this.botaoReiniciar.load(() => this.funcaoReiniciar());
    this.botaoTelaInicial.load(() => this.funcaoTelaInicial());
    this.iniciarTrilhaSonora('st_gameOver');
  }
    
  close() {
    this.botaoReiniciar.close();
    this.botaoTelaInicial.close();
    this.encerrarTrilhaSonora('st_gameOver');
    loop();
  }
  
  exibe() {
    let gameOverColor = color(255, 0, 0);
    gameOverColor.setAlpha(128);
    fill(gameOverColor);
    noStroke();
    rect(0, 0, width, height);
    stroke(1);
    
    image(this.objetosJogo.resources.getImagem('it_gameover'),
      (width / 2) - 216,
      (height / 2) - 79);
    this.objetosJogo.placar.exibePlacares()
    this.botaoReiniciar.draw();
    this.botaoTelaInicial.draw();
    noFill();
    fill(color(0, 0, 0));
    noLoop();
  }

}