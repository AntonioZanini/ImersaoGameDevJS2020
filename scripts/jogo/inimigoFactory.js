class InimigoFactory {

  constructor(resources) {
    this.resources = resources;
  }

  create(inimigo) {
    switch (inimigo.tipoInimigo) {
      case tipoInimigo.slime:
        return new Inimigo(
          [new sprite(
            this.resources.getImagem('sp_slime'),
            104,
            104,
            16,
            4,
            0,
            tipoColisao.circle, {
              x: 10,
              y: 5,
              d: 1
            })],

          52,
          52,
          width,
          30,
          inimigo.velocidade
        );
      case tipoInimigo.wingedSlime:
        return new Inimigo(
          [new sprite(
            this.resources.getImagem('sp_winged_slime'),
            200,
            150,
            16,
            3,
            0,
            tipoColisao.circle, {
              x: 0,
              y: 0,
              d: 1
            })],

          100,
          75,
          width,
          200,
          inimigo.velocidade
        );
      case tipoInimigo.troll:
        return new Inimigo(
          [new sprite(
            this.resources.getImagem('sp_troll'),
            400,
            400,
            28,
            5,
            0,
            tipoColisao.circle, {
              x: 1,
              y: 1,
              d: 0.75
            })],

          200,
          200,
          width,
          0,
          inimigo.velocidade
        );
      default:
    }
  }

}