function setup() {
  createCanvas(600, 400);
}
//dados bola
let eixoXbola = 300;
let eixoYbola = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXbola = 2;
let velocidadeYbola = 2;

//dados raquete1
let eixoXraquete = 5;
let eixoYraquete = 150;
let larguraRaquete = 15;
let alturaRaquete = 80;

//dados raquete2
let eixoXraquete2 = 580;
let eixoYraquete2 = 150;
let larguraRaquete2 = 15;
let alturaRaquete2 = 80;
let velocidadeYraquete2;

//funcoes da bola
function velocidade() {
eixoXbola += velocidadeXbola
eixoYbola += velocidadeYbola
}

function colisao (){
if (eixoXbola + raio > width ||
    eixoXbola - raio < 0){
    velocidadeXbola *= -1;
  }
if (eixoYbola + raio > height ||
     eixoYbola - raio < 0){
    velocidadeYbola *= -1;
  }
}

//funcoes da raquete1
function movimentoRaquete(){
  if (keyIsDown (UP_ARROW)){
    eixoYraquete -= 10;
 }
  if (keyIsDown (DOWN_ARROW)){
    eixoYraquete += 10;
  }
}

function colisaoRaquete(){
  if (eixoXbola - raio < eixoXraquete + larguraRaquete && eixoYbola - raio < eixoYraquete + alturaRaquete && eixoYbola + raio > eixoYraquete){
    velocidadeXbola *= -1;
  }
}

function colisaoRaquete2(){
  if (eixoXbola - raio > eixoXraquete2 - larguraRaquete2 && eixoYbola - raio < eixoYraquete2 + alturaRaquete2 && eixoYbola + raio < eixoYraquete){
    velocidadeXbola *= -1;
  }
}




//funcoes raquete 2
function movimentoraquete2(){
  velocidadeYraquete2 = eixoYbola - eixoYraquete2 - alturaRaquete2 / 2 - 30;
  eixoYraquete2 += velocidadeYraquete2;
  
}


//inicio
function draw() {
  background(0);
  circle (eixoXbola, eixoYbola, diametro)
  velocidade()
  colisao()
  colisaoRaquete2()
  
  
  rect (eixoXraquete, eixoYraquete, larguraRaquete, alturaRaquete)
  movimentoRaquete()
  colisaoRaquete()
  
  rect (eixoXraquete2, eixoYraquete2, larguraRaquete2, alturaRaquete2)
  movimentoraquete2()
  
  
  
  
  
  
  
   
}
