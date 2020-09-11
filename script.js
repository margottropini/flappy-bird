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

  context.drawImage(
    img, // dans img
    432, // prend l'oiseau qui commence à 432 sur l'axe des x
    Math.floor((index % 9) / 3) * size[1], //sur l'axe des Y math floor de index, on divise par 3 X la taille en hauteur de l'oiseau. En gros ça me permet de changer les 3 images de l'oiseau
    ...size, // const
    canvas.width / 2 - size[0] / 2, // la largeur du canvas /2 - la taille de la largeur de l'oiseau
    flyHeight, // const
    ...size // const
  );

  flyHeight = canvas.height / 2 - size[1] / 2; // la hauteur de vol : on prend la hauteur du  canvas on divise par 2, on prend la taille de l'oiseau et on  divise par 2

  window.requestAnimationFrame(render); // on fait tourner en boucle
};
img.onload = render; // au chargement de l'image, tu peux commencer à lancer render
