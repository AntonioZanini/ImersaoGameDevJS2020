class Cena {
  constructor(
    nome,
    tipoCena,
    objetosJogo
  ) {

    this.nome = nome;
    this.tipoCena = tipoCena;
    this.objetosJogo = objetosJogo;
  }

  draw() {}

  load() {}

  close() {}

  keyPressed(key, keyCode) {}

  click() {}

  iniciarTrilhaSonora(nomeTrilha) {
    setTimeout(() => {
      this.objetosJogo.resources.getSom(nomeTrilha).setVolume(0.5);
      this.objetosJogo.resources.getSom(nomeTrilha).loop();

    }, 500);
  }

  encerrarTrilhaSonora(nomeTrilha) {
    this.objetosJogo.resources.getSom(nomeTrilha).stop();
  }
}