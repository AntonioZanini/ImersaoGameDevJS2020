class ObjetosJogo {
  constructor(cenario, personagem, placar, vida, resources, inimigoManager, sentimentoFactory, objetoManager, projetilManager) {
    this.cenario = cenario;
    this.personagem = personagem;
    this.resources = resources;
    this.vida = vida;
    this.placar = placar;
    this.inimigoManager = inimigoManager;
    this.sentimentoFactory = sentimentoFactory;
    this.objetoManager = objetoManager;
    this.projetilManager = projetilManager;
  }
}