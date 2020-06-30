class InimigoManager {
  constructor(resources) {
    this.listaInimigos = [];
    this.inimigoFactory = new InimigoFactory(resources);
    this.indiceInimigo = 0;
    this.inimigosPorTela = 1;
  }

  aparecerInimigoAleatorio(inimigos) {
    let possiveisInimigos = inimigos || [tipoInimigo.slime]
    let chance = random(1, 1000);
    if (chance <= 15) {
      this.listaInimigos.push(this.inimigoFactory
                              .create(random(possiveisInimigos)));
    }
  }
  
  aparecerInimigoListado(lista) {
    if (this.listaInimigos.length < this.inimigosPorTela) {
      this.listaInimigos.push(this.inimigoFactory
                              .create(lista[this.indiceInimigo]));
      this.indiceInimigo++;
      if (this.indiceInimigo >= lista.length) {
        this.indiceInimigo = 0;
      }
    }
  }

  processaInimigos() {
    //Move Inimigos
    let listaInimigosRemovidos = [];
    for (let i = 0; i < this.listaInimigos.length; i++) {
      this.listaInimigos[i].move()
      if (this.listaInimigos[i].destruir === 1) {
        listaInimigosRemovidos.push(i);
      }
    }
    //Exibe Inimigos
    for (let i = 0; i < this.listaInimigos.length; i++) {
      this.listaInimigos[i].exibe()
    }
    //Remove Inimigos Inutilizados
    this.removerInimigos(listaInimigosRemovidos);
  }
  
  removerInimigos(listaInimigosRemovidos){
      for (let i = 0; i < listaInimigosRemovidos.length; i++) {
        this.listaInimigos.splice(listaInimigosRemovidos[i], 1);
      }
  }
  
  reset() {
    this.listaInimigos = [];
    this.indiceInimigo = 0;
  }
  

}