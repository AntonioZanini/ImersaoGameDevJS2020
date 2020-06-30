class ProjetilManager {
  constructor(resources) {
    this.projetilFactory = new ProjetilFactory(resources);

    this.listaProjeteis = [];
    this.indiceProjetil = 0;
    this.projeteisPorTela = 1;
  }


  aparecerProjetilListado(lista) {
    if (this.listaProjeteis.length < this.projeteisPorTela) {
      this.listaProjeteis.push(this.projetilFactory
        .create(lista[this.indiceProjetil]));
      this.indiceProjetil++;
      if (this.indiceProjetil >= lista.length) {
        this.indiceProjetil = 0;
      }
    }
  }

  atirar(tipoProjetil, posX, posY, velocidade, funcaoEfeito) {
    this.listaProjeteis.push(this.projetilFactory
      .create(tipoProjetil,
        posX,
        posY,
        velocidade,
        funcaoEfeito));
  }

  processaProjeteis() {
    //Move Objetos
    let listaProjeteisRemovidos = [];
    for (let i = 0; i < this.listaProjeteis.length; i++) {
      this.listaProjeteis[i].move()
      if (this.listaProjeteis[i].destruir === 1) {
        listaProjeteisRemovidos.push(i);
      }
    }
    //Exibe Objetos
    for (let i = 0; i < this.listaProjeteis.length; i++) {
      this.listaProjeteis[i].exibe()
    }
    //Remove Objetos Inutilizados
    this.removerProjeteis(listaProjeteisRemovidos);
  }


  processarColisao(listaEntidades) {
    let listaProjeteisRemovidos = [];
    for (let i = 0; i < this.listaProjeteis.length; i++) {
      let projetil = this.listaProjeteis[i];
      listaEntidades.forEach((entidade) => {
        if (projetil.verificarColisao(entidade)) {
          projetil.interagir(entidade);
          if (projetil.destruir === 1) {
            listaProjeteisRemovidos.push(i);
          }
        }
      });

    }
    this.removerProjeteis(listaProjeteisRemovidos);
  }

  removerProjeteis(listaProjeteisRemovidos) {
    for (let i = 0; i < listaProjeteisRemovidos.length; i++) {
      this.listaProjeteis.splice(listaProjeteisRemovidos[i], 1);
    }
  }

  reset() {
    this.listaProjeteis = [];
    this.indiceProjetil = 0;
  }
}