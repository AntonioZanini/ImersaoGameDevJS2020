class Placar{
  constructor(){
    this.placares = [];
    this.placares.push(0);
  }
  
  exibePlacarAtual(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(Math.floor(this.placares[this.placares.length-1]), width -30, 50);
  }
  
  exibePlacares(){
    let placares = [].concat(this.placares);
    if (placares.length > 5) {
      placares.splice(0, this.placares.length-5);
    }
    let posY = width -30;
    let row = 1;
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text("Placares:", posY, 50 * row++);
    placares.forEach((placar) => {
      text(Math.floor(placar), posY, 50 * row++);
    });
  }
  
  exibeMaiorPlacar() {
    let posY = width -30;
    textAlign(RIGHT);
    textSize(50);
    text("Maior Placar:", posY, 50);
    text(Math.floor(Math.max(...this.placares)), posY, 100);
    
  }
  
  adicionarPontos(valor) {
    this.placares[this.placares.length-1] += valor;
  }
  
  novoPlacar() {
    this.placares.push(0);
  }
  
  verificaPlacares(){
    return (this.placares.length > 1);
  }
}