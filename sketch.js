let myResources;
let jogo;

function preload() {
  myResources = new Resources();
  myResources.addCaminhosImagens([
    ['bg_floresta', 'imagens/cenario/floresta.png'],
    ['sp_pers_correndo', 'imagens/personagem/correndo.png'],
    ['sp_pers_pulando', 'imagens/personagem/pulando.png'],
    ['it_lampada', 'imagens/objetos/lampada.png'],
    ['it_coracao', 'imagens/assets/coracao.png'],
    ['sp_slime', 'imagens/inimigos/gotinha.png'],
    ['sp_winged_slime', 'imagens/inimigos/gotinha-voadora.png'],
    ['sp_troll', 'imagens/inimigos/troll.png'],
    ['it_gameover', 'imagens/assets/game-over.png'],
    ['bg_telainicial', 'imagens/cenario/telaInicial.png'],
    ['bg_introducao', 'imagens/cenario/introducao.png'],
    ['it_moeda', 'imagens/assets/moeda.png'],
    ['it_golpe', 'imagens/assets/golpe.png']
  ]);

  myResources.addCaminhosSons([
    ['st_principal', 'sons/trilha_jogo.mp3'],
    ['st_titulo', 'sons/tituloJogo.mp3'],
    ['st_gameOver', 'sons/gameOver.mp3'],
    ['st_introducao', 'sons/introducao.mp3'],
    ['se_pulo', 'sons/somPulo.mp3'],
    ['se_dano', 'sons/dano.mp3'],
    ['se_moeda', 'sons/moeda.mp3']
  ]);

  myResources.addCaminhosFontes([
    ['ft_telainicial', 'fontes/fonteTelaInicial.otf']
  ]);

  myResources.addTextos([
    ['tx_introducao', `
Enquanto explorava a Floresta Misteriosa, que 
era cheia de descobertas e aventuras. 
Hipsta se viu atacada por um bando de trolls
desocupados e seus mínions slimes. Eles impediam
insistentemente sua jornada por novos conhecimentos.
Nossa protagonista se viu obrigada a enfrentá-los,
e assim poder retornar à sua busca por novas
experiências!
`]
  ]);

  myResources.addTextos([
    ['tx_creditos', `
As Aventuras de Hipsta

PROGRAMAÇÃO:

Programador por:

Antonio Zanini de Farias
em:
   https://www.linkedin.com/in/a-zanini/
   https://github.com/AntonioZanini







Conceito e Curso aplicado por:

Alura Cursos Online 
em:
  https://www.alura.com.br/

Juliana Negreiros
em:
  https://twitter.com/juunegreiros

Guilherme Lima
em:
  https://twitter.com/guilhermebzlima
  https://www.instagram.com/gui.lima.2020/

Paulo Silveira
em:
  https://twitter.com/paulo_caelum
  https://instagram.com/paulo_hipster

Biblioteca p5.js
Criado Lauren McCarthy e mantido por 
Processing Foundation e NYU ITP.





RECURSOS ARTÍSTICOS:

Recursos Gráficos

Sprites por
ぴぽ 
em: 
  https://pipoya.itch.io/

Imagens Background de Floresta por
https://craftpix.net

Rpg Vectors por 
Vecteezy
em: 
  https://www.vecteezy.com/free-vector/rpg

Moedas por
GameArtGuppy.com

Fonte Zelda Breath of Wild por
Chequered Ink
em: 
  https://chequered.ink/




Efeitos Sonoros:

UI Quirky28 
SynthChime11 por
Eric Matyas
em:
  www.soundimage.org




Música:

Moonlight Flying (Looping)
Surreal Chase (Looping)
The Island of Dr Sinister por
Eric Matyas
em:
  www.soundimage.org
`]
  ]);
  
  myResources.load();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo(myResources);

  myResources = undefined;

  frameRate(40);

}

function draw() {
  jogo.draw();
}

function mouseClicked() {
  jogo.click();
}

function keyPressed() {
  jogo.keyPressed(key, keyCode);
}