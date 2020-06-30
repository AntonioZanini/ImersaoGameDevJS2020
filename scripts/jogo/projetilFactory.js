class ProjetilFactory {
  constructor(resources) {
    this.resources = resources;
  }

  create(projetil, posX, posY, velocidade,funcaoEfeito) {
    switch (projetil) {
      case tipoProjetil.magia:
        return new Projetil(
          [new sprite(
            this.resources.getImagem('it_golpe'),
            210,
            210,
            6,
            6,
            0,
            tipoColisao.circle, {
              x: 0,
              y: 0,
              d: 0.9
            })],
          53,
          53,
          posX,
          posY,
          velocidade,
          funcaoEfeito
        );
                /*
        let spriteMoeda = new sprite(
          this.resources.getImagem('it_golpe'),
          210,
          210,
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
          5, 5, 5
        ]);

        let moeda = new Projetil(
          [spriteMoeda],
          53,
          44,
          posX,
          posY,
          velocidade
        );
        moeda.anima(1);
        return moeda;
        */
      default:
    }
  }
}