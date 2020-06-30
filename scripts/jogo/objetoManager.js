class ObjetoManager {
  constructor(resources, cenario) {
    this.objetoFactory = new ObjetoFactory(resources, cenario);
    
    this.listaObjetos = [];
    this.indiceObjeto = 0;
    this.objetosPorTela = 1;
  }
  
  adicionarObjeto(objeto, posX, posY) {
    this.listaObjetos.push(this.objetoFactory
                              .create(objeto, posX, posY));
  }
  
  aparecerObjetoListado(lista) {
    if (this.listaObjetos.length < this.objetosPorTela) {
      this.listaObjetos.push(this.objetoFactory
                              .create(lista[this.indiceObjeto], width, 100));
      this.indiceObjeto++;
      if (this.indiceObjeto >= lista.length) {
        this.indiceObjeto = 0;
      }
    }
  }

  processaObjetos() {
    //Move Objetos
    let listaObjetosRemovidos = [];
    for (let i = 0; i < this.listaObjetos.length; i++) {
      this.listaObjetos[i].move()
      if (this.listaObjetos[i].destruir === 1) {
        listaObjetosRemovidos.push(i);
      }
    }
    //Exibe Objetos
    for (let i = 0; i < this.listaObjetos.length; i++) {
      this.listaObjetos[i].exibe()
    }
    //Remove Objetos Inutilizados
    this.removerObjetos(listaObjetosRemovidos);
  }
  
  removerObjetos(listaObjetosRemovidos){
      for (let i = 0; i < listaObjetosRemovidos.length; i++) {
        this.listaObjetos.splice(listaObjetosRemovidos[i], 1);
      }
  }
  
  reset() {
    this.listaObjetos = [];
    this.indiceObjeto = 0;
  }
}