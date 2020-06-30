class Resources {
  constructor(listaCaminhosImagens, listaCaminhosSons, listaCaminhosFontes) {
    this.listaCaminhosImagens = listaCaminhosImagens || [];
    this.listaCaminhosSons = listaCaminhosSons || [];
    this.listaCaminhosFontes = listaCaminhosFontes || [];
    this.listaMatrizTextos = [];
    this.listaImagens = [];
    this.listaSons = [];
    this.listaFontes = [];
    this.listaTextos = [];
  }

  addCaminhosImagens(listaCaminhosImagens) {
    this.listaCaminhosImagens = this.listaCaminhosImagens.concat(listaCaminhosImagens);
  }

  addCaminhosSons(listaCaminhosSons) {
    this.listaCaminhosSons = this.listaCaminhosSons.concat(listaCaminhosSons);
  }

  addCaminhosFontes(listaCaminhosFontes) {
    this.listaCaminhosFontes = this.listaCaminhosFontes.concat(listaCaminhosFontes);
  }
  addTextos(listaMatrizTextos){
    this.listaMatrizTextos = this.listaMatrizTextos.concat(listaMatrizTextos);
  }
  load() {
    this.listaCaminhosImagens.forEach((caminho) => {
      this.listaImagens.push({
        nome: caminho[0],
        imagem: loadImage(caminho[1])
      });
    });

    this.listaCaminhosSons.forEach((caminho) => {
      this.listaSons.push({
        nome: caminho[0],
        som: loadSound(caminho[1])
      });
    });

    this.listaCaminhosFontes.forEach((caminho) => {
      this.listaFontes.push({
        nome: caminho[0],
        fonte: loadFont(caminho[1])
      });
    });
    
    this.listaMatrizTextos.forEach((matriz) =>{
      this.listaTextos.push({
        nome: matriz[0],
        texto: matriz[1]
      });
    });
    
  }

  getImagem(nome) {
    return this.listaImagens.find(i => i.nome == nome).imagem;
  }

  getSom(nome) {
    return this.listaSons.find(s => s.nome == nome).som;
  }
  
  
  getFonte(nome) {
    return this.listaFontes.find(f => f.nome == nome).fonte;
  }

  getTexto(nome) {
    return this.listaTextos.find(t => t.nome == nome).texto;
  }
  
}