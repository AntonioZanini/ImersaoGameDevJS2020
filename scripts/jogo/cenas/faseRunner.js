class FaseRunner extends Cena {
  constructor(
    nome,
    tipoCena,
    objetosJogo,
    funcaoMudancaCena) {
    super(
      nome,
      tipoCena,
      objetosJogo);

    this.pontuacaoBase = 0.3;
    let personagem = this.objetosJogo.personagem;

    this.barraEnergia = new Barra(personagem.energiaMaxima,
      color(111, 190, 68),
      color(91, 58, 26),
      width / 3,
      20,
      width / 3,
      30);

  }

  load() {
    this.objetosJogo.cenario.imagem =
      this.objetosJogo.resources.getImagem('bg_floresta');
    this.objetosJogo.cenario.velocidade = 5;
    this.objetosJogo.personagem.visible = true;
    this.iniciarTrilhaSonora('st_principal');
    textFont(this.objetosJogo.resources.getFonte('ft_telainicial'));
    textAlign(CENTER, BOTTOM);
    textSize(50);
  }

  close() {
    this.encerrarTrilhaSonora('st_principal');
  }

  click() {
    this.objetosJogo.personagem.pular();
  }

  keyPressed(key, keyCode) {
    let personagem = this.objetosJogo.personagem;
    if (key === 'i') {
      //objectList.push(sentimentoFactory.create(personagem, tipoSentimento.ideia, this.gameResources));
    }

    if (key === 'f' && personagem.energiaAtual >= 10) {
      let posX = personagem.posX + personagem.largura;

      let posY = height - personagem.posY - (personagem.altura / 2);

      this.objetosJogo.projetilManager.atirar(tipoProjetil.magia,
        posX,
        posY,
        10,
        (entidade) => {
          this.objetosJogo.objetoManager.adicionarObjeto(tipoObjeto.moeda, entidade.posX, entidade.getPosYCentral());
        });

      personagem.reduzirEnergia(10);
    }

    if (key === 'ArrowUp' || keyCode === 32) {
      personagem.pular();
    }
  }

  draw() {
    let oj = this.objetosJogo;

    oj.cenario.exibe();
    oj.vida.exibe();
    oj.personagem.exibe();
    oj.projetilManager.processaProjeteis();
    oj.inimigoManager.processaInimigos();
    oj.objetoManager.processaObjetos();
    oj.placar.exibePlacarAtual();
    this.barraEnergia.exibe(this.objetosJogo.personagem.energiaAtual);

    if (oj.vida.vidasAtuais === 0) {
      return tipoCena.gameOver;
    }
    oj.cenario.move();

    oj.personagem.aplicaGravidade();

    oj.projetilManager.processarColisao(oj.inimigoManager.listaInimigos);

    oj.objetoManager.aparecerObjetoListado(this._getListaObjetos());

    oj.inimigoManager.aparecerInimigoListado(this._getListaInimigos());

    this.objetosJogo.personagem.aumentaEnergia(0.07);

    /*
    for (let i = 0; i < this.objectList.length; i++) {
      this.objectList[i].exibe();
    }
    */

    oj.objetoManager.listaObjetos.forEach((objeto) => {
      if (oj.personagem.verificarColisao(objeto)) {
        objeto.interagir(oj);
      }
    });



    if (oj.personagem.verificarColisaoLista(
        oj.inimigoManager.listaInimigos) &&
      !oj.personagem.invencivel) {

      oj.vida.perderVida();

      oj.personagem.tornaInvencivel();

    }
    oj.placar.adicionarPontos(this.pontuacaoBase);
  }


  _getListaInimigos() {
    return [{
        tipoInimigo: tipoInimigo.slime,
        velocidade: 20
      },
      {
        tipoInimigo: tipoInimigo.wingedSlime,
        velocidade: 40
      },
      {
        tipoInimigo: tipoInimigo.troll,
        velocidade: 30
      },
    ];
  }

  _getListaObjetos() {
    return [
      tipoObjeto.moeda
    ];
  }


}