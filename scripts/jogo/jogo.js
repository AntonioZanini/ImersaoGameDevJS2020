class Jogo {
  constructor(resources) {
    let cenario = new Cenario(resources.getImagem('bg_floresta'), 5);
    let personagem = new Personagem(
      undefined,
      110,
      135,
      0,
      30,
      resources,
      50,
      50
    );
    this.sentimentoFactory = new SentimentoFactory();
    this.inimigoManager = new InimigoManager(resources);

    this.objetosJogo = new ObjetosJogo(
      cenario,
      personagem,
      new Placar(),
      new Vida(3, 3, resources.getImagem('it_coracao')),
      resources,
      new InimigoManager(resources),
      new SentimentoFactory(),
      new ObjetoManager(resources, cenario),
      new ProjetilManager(resources)
    );

    personagem.adicionarSprites(this.criarSpritesPersonagem());

    //this.objectList = [];
    //this.objetosJogo.resources.getSom('st_principal').loop();

    this.cenaManager = new CenaManager(this.objetosJogo);
  }

  draw() {
    this.cenaManager.exibe();

    /*
    this.cenario.exibe();
    this.cenario.move();
    this.personagem.aplicaGravidade();
    this.personagem.exibe();
    this.inimigoManager.spawnInimigo();
    this.inimigoManager.processaInimigos();
    for (let i = 0; i < this.objectList.length; i++) {
      this.objectList[i].exibe();
    }
    if (this.personagem.verificarColisao(this.inimigoManager.listaInimigos)) {
      this.setGameOver();
    }
    */
  }

  click() {
    this.cenaManager.click();
  }

  keyPressed(key, keyCode) {
    this.cenaManager.keyPressed(key, keyCode);
  }

  criarSpritesPersonagem() {
    let spriteCorrendo = new sprite(
      this.objetosJogo.resources.getImagem('sp_pers_correndo'),
      220,
      270,
      16,
      4,
      0,
      tipoColisao.rect,
      [0, 0, 110, 135]);
    let spritePulando = new sprite(
      this.objetosJogo.resources.getImagem('sp_pers_pulando'),
      227,
      280,
      25,
      5,
      0,
      tipoColisao.rect,
      [0, 0, 110, 135]);
    spritePulando.addAnimacao([5, 6, 7, 10, 11]);
    spritePulando.addAnimacao([20, 21, 3, 4]);
    return [spriteCorrendo, spritePulando];
  }

}