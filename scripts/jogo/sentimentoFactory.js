
class SentimentoFactory {
  create(personagem, sentimento, gameResources) {
    switch (sentimento) {
      case tipoSentimento.ideia:
        return new Sentimento(
          personagem,
          gameResources.getImagem('it_lampada'),
          480,
          480,
          personagem.largura * 2,
          personagem.altura * 2,
          0.3,
          15,
          3
        );
      case tipoSentimento.amor:
        break;
      default:
    }
  }

}