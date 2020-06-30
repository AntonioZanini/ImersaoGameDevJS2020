class TelaInicial extends Cena {
  constructor(
    nome,
    tipoCena,
    objetosJogo,
    funcaoMudancaCena) {

    super(
      nome,
      tipoCena,
      objetosJogo);


    this.funcaoMudancaCena = funcaoMudancaCena;
    this.botaoIniciar = new Botao(
      'Iniciar',
      width / 2,
      height / 2,
      'botao-tela-inicial',
      'horizontal'
    );
      
      this.botaoCreditos = new Botao(
      'Créditos',
      width / 2,
      height / 3 * 2,
      'botao-tela-inicial',
      'horizontal'
    );
  }

  load() {
    this.objetosJogo.cenario.imagem =
      this.objetosJogo.resources.getImagem('bg_telainicial');
    this.objetosJogo.cenario.velocidade = 0;
    this.objetosJogo.personagem.visible = false;
    this.botaoIniciar.load(() => this.funcaoMudancaCena('introducao'));
    this.botaoCreditos.load(() => this.funcaoMudancaCena('creditos'));
    this.iniciarTrilhaSonora('st_titulo');
  }

  close() {
    this.botaoIniciar.close();
    this.botaoCreditos.close();
    this.encerrarTrilhaSonora('st_titulo');
  }

  draw() {
    this.objetosJogo.cenario.exibe();
    this.botaoIniciar.draw();
    this.botaoCreditos.draw();
    this._teclas();
    this._texto();
    
    if (this.objetosJogo.placar.verificaPlacares()) {
      this.objetosJogo.placar.exibeMaiorPlacar();
    }

  }

  _texto() {
    textFont(this.objetosJogo.resources.getFonte('ft_telainicial'));
    textAlign(CENTER,BOTTOM);
    textSize(50);
    fill('#000');
    text('As aventuras de', (width / 2), height / 3);
    textSize(150);
    text('Hipsta', (width / 2), height / 10 * 5);
  }

  _teclas() {
    noFill();
    textFont('Helvetica');
    rectMode(CENTER);
    strokeWeight(2);
    rect(50, height - 120, 50, 50, 20);
    rect(150, height - 120, 100, 50, 20);
    rect(50, height - 50, 50, 50, 20);
    strokeWeight(1);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text('↑', 50, height - 120, 50, 50);
    text('Espaço', 150, height - 120, 100, 50);
    text('F', 50, height - 50, 50, 50);
    rectMode(CORNER);
    textAlign(LEFT, TOP);
    text('- Pular obstáculos!', 250, height - 130, 300, 50);
    text('- Ataques mágico!', 250, height - 70, 300, 50);
  }
}