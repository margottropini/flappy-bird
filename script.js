const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d"); // me permettra d'animer de la 2d dans le canvas
const img = new Image(); //J'appelle mon set d'image
img.src = "../media/flappy-bird-set.png";

//General settings
let generalPlaying = false;
const gravity = 0.5;
const speed = 6.2;
const size = [51, 36]; //taille oiseau
const jump = -11.5;
const cTenth = canvas.width / 10;

let index = 0, // Me permettra de créer l'effet d'optique, le fond bouge a une allure et les poteaux bouge 2 fois plus vite que le fond
  bestScore = 0,
  flight,
  flyHeight,
  currentScore,
  pipe;

const render = () => {
  // cette fonction va rendre l'animation
  index++; // des que j'appelle le render index fera ++

  // background
  context.drawImage(
    img,
    0, // tu commences a 0 sur les X
    0, // tu commences a 0 sur les Y
    canvas.width, // tu vas jusqu'a canvas.width
    canvas.height, // tu vas jusqu'à canvas.height
    -((index * (speed / 2)) % canvas.width) + canvas.width, // en mettant l'index en négatif le décors ira de la droite vers la gauche. On divise la speed par 2 pour qui'l défile 2x moin vite que les poteaux. modulo de canvas.width pour pas qu'il aille à l'infini. Tout ça dà destinatin de canvas.width et de canvas.height
    0,
    canvas.width,
    canvas.height
  );

  context.drawImage(
    img, // dans img
    432, // prend l'oiseau qui commence à 432 sur l'axe des x
    Math.floor((index % 9) / 3) * size[1], //sur l'axe des Y math floor de index, on divise par 3 X la taille en hauteur de l'oiseau. En gros les 3 images d'oiseau se mettent les unes sur les autres et on dirait qu'il bat des ailes
    ...size, // const
    canvas.width / 2 - size[0] / 2, // la largeur du canvas /2 - la taille de la largeur de l'oiseau
    flyHeight, // const
    ...size // const
  );

  flyHeight = canvas.height / 2 - size[1] / 2; // la hauteur de vol : on prend la hauteur du  canvas on divise par 2, on prend la taille de l'oiseau et on  divise par 2

  window.requestAnimationFrame(render); // on fait tourner en boucle
};
img.onload = render; // au chargement de l'image, tu peux commencer à lancer render
