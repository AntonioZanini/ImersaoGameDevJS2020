class Letreiro extends Cena {
  constructor(
    nome,
    tipoCena,
    objetosJogo,
    funcaoMudancaCena,
    texto,
    fonte,
    tamanhoFonte,
    alturaTexto,
    nomeImagem,
    posY,
    velocidade,
    nomeMusica,
    escapavel
  ) {
    super(
      nome,
      tipoCena,
      objetosJogo);

    this.mudancaCena = funcaoMudancaCena;
    this.texto = texto;
    this.fonte = fonte;
    this.tamanhoFonte = tamanhoFonte;
    this.alturaTexto = alturaTexto;
    this.posYInicial = posY;
    this.posY = this.posYInicial;
    this.velocidade = velocidade;
    this.nomeMusica = nomeMusica;
    this.nomeImagem = nomeImagem;
    this.escapavel = escapavel;
    this.tempoEscape = 20;
    this.pressionandoEscape = 0;
    this.barraEscape = new Barra(this.tempoEscape, color('#9FC419'), color('#66CC99'), width - 20 - (width / 6), height - 40, width / 6, 20);
    this.status = 0;

    this.objetosJogo.cenario.velocidade = 0;
  }

  load() {
    this.iniciarTrilhaSonora(this.nomeMusica);
    this.objetosJogo.cenario.imagem =
      this.objetosJogo.resources.getImagem(this.nomeImagem);
    textFont(this.fonte);
    textAlign(CENTER, TOP);
    textSize(this.tamanhoFonte);
    fill('#fff');
  }

  close() {
    this.encerrarTrilhaSonora(this.nomeMusica);
    this.pressionandoEscape = 0;
    this.posY = this.posYInicial;
  }

  escapar(pressed) {
    if (!this.escapavel) return;
    if (pressed) {
      this.pressionandoEscape++;
    } else {
      this.pressionandoEscape = 0;
    }
    if (this.pressionandoEscape >= this.tempoEscape) {
      this.mudancaCena();
    }
  }

  draw() {
    this.objetosJogo.cenario.exibe();
    textAlign(CENTER, TOP);
    fill('#fff');
    text(this.texto, 0, this.posY, width, this.alturaTexto);

    this.posY += this.velocidade;

    if (this.pressionandoEscape > 0) {
      this.barraEscape.exibe(this.pressionandoEscape);
    }
    textAlign(LEFT, TOP);
    text(`Pressione e segure 
qualquer tecla para pular.`, 5, height - 100);
    if (this.velocidade < 0 && this.posY <= -this.alturaTexto) {
      this.mudancaCena();
    } else if (this.velocidade > 0 && this.posY >= this.alturaTexto) {
      this.mudancaCena();
    }
    this.escapar(keyIsPressed);
  }

}