class ObjetoFactory {

  constructor(resources, cenario) {
    this.resources = resources;
    this.cenario = cenario;
  }

  create(objeto, posX, posY) {
    switch (objeto) {
      case tipoObjeto.moeda:
        let spriteMoeda = new sprite(
          this.resources.getImagem('it_moeda'),
          211,
          178,
          6,
          6,
          0,
          tipoColisao.circle, {
            x: 0,
            y: 0,
            d: 0.9
          });


        spriteMoeda.addAnimacao([0, 0, 0,
                                 1, 1, 1,
                                 2, 2, 2, 
                                 3, 3, 3,
                                 4, 4, 4,
                                 5, 5, 5]);
        
        let moeda = new Objeto(
          [spriteMoeda],
          53,
          44,
          posX,
          posY,
          this.cenario,
          this.resources.getSom('se_moeda')
        );
        moeda.anima(1);
        return moeda;
      default:
    }
  }

}