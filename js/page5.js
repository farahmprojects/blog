//declarations de variables 
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

canvas.style.background = "black";




//lignes grises sur les cotes
context.fillStyle ="gray";
context.fillRect(700, 50, 500, 15);

context.fillStyle ="gray";
context.fillRect(200, 535, 500, 15);




//cercles gris sur les cotes
context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 100, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 200, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 300, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 400, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 500, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 100, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 200, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 300, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 400, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 500, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();




//debut du coeur, courbe bezier degres 3
context.lineWidth = 6; 
context.beginPath(); 
context.moveTo(400, 200);
context.bezierCurveTo(250,70,250,300,400,350);
context.strokeStyle="gray";
context.fillStyle ="hotpink";
context.stroke();
context.fill();
context.closePath();

context.lineWidth= 1;
context.beginPath();
context.moveTo(400,200);
context.lineTo(250,70);
context.lineTo(250,300);
context.lineTo(400,350);
context.strokeStyle="gray";
context.stroke();

context.lineWidth = 6; 
context.beginPath(); 
context.moveTo(400, 200);
context.bezierCurveTo(550,70,550,300,400,350);
context.strokeStyle="hotpink";
context.fillStyle ="gray";
context.stroke();
context.fill();
context.closePath();

context.lineWidth= 1;
context.beginPath();
context.moveTo(400,200);
context.lineTo(550,70);
context.lineTo(550,300);
context.lineTo(400,350);
context.strokeStyle="hotpink";
context.stroke();

//debut cone
context.lineWidth = 6;
context.beginPath();
context.moveTo(800, 350);
context.quadraticCurveTo(950, 500, 1100, 350);
context.strokeStyle = "hotpink";
context.fillStyle = "gray";
context.stroke();
context.fill();
context.closePath();

context.lineWidth = 1;
context.beginPath();
context.moveTo(800, 350);
context.lineTo(950, 500);
context.lineTo(1100, 350);
context.strokeStyle = "hotpink";
context.stroke();


//debut des boules de glace


//boule bleue etage 3
context.beginPath();
context.lineWidth = 1; 
context.arc(950, 270, 40, 0, Math.PI*2, false);
context.strokeStyle ="blue";
context.fillStyle= "blue";
context.stroke();
context.fill();
context.closePath();

//boules etage 2
context.beginPath();
context.lineWidth = 1; 
context.arc(895, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(950, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="violet";
context.fillStyle= "violet";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1005, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="pink";
context.fillStyle= "pink";
context.stroke();
context.fill();
context.closePath();

//boules etage 1
context.beginPath();
context.lineWidth = 1; 
context.arc(840, 350, 40, 0, Math.PI, true);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(895, 350, 40, 0, Math.PI, true);
context.strokeStyle ="pink";
context.fillStyle= "pink";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(950, 350, 40, 0, Math.PI, true);
context.strokeStyle ="blue";
context.fillStyle= "blue";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1000, 350, 40, 0, Math.PI, true);
context.strokeStyle ="violet";
context.fillStyle= "violet";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1060, 350, 40, 0, Math.PI, true);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();


window.onload = function(){
var context = canvas.getContext("2d");
canvas.style.background = "black";

context.lineWidth = 6;
context.beginPath();
context.moveTo(800, 350);
context.quadraticCurveTo(950, 500, 1100, 350);
context.strokeStyle = "hotpink";
context.fillStyle = "gray";
context.stroke();
context.fill();
context.closePath();

context.lineWidth = 1;
context.beginPath();
context.moveTo(800, 350);
context.lineTo(950, 500);
context.lineTo(1100, 350);
context.strokeStyle = "hotpink";
context.stroke();


 // Création de l'interface GUI
      var gui = new dat.GUI();

      var options = {
        couleur: "#ff00ff",
        afficherObjet: true,
        valeurMenu: "Option 1",
        valeurIntervalle: 0.5 // Valeur par défaut pour l'intervalle
      };
      // Ajout des contrôles dans l'interface
      gui.addColor(options, 'couleur').onChange(function() {
        context.fillStyle = options.couleur;
        redraw();
      });

      gui.add(options, 'afficherObjet').onChange(function(value) {
        if (value) {
          redraw();
        } else {
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
      });

      gui.add(options, 'valeurMenu', ['Option 1', 'Option 2', 'Option 3']).onChange(function(value) {
      	if (value === 'Option 1') {
    options.couleur = "#ff00ff"; // Changer la couleur pour Option 1
      	  }else if (value === 'Option 2') {
    options.couleur = "blue"; // Changer la couleur pour Option 2
  } else if (value === 'Option 3') {
    options.couleur = "green"; // Changer la couleur pour Option 3
  }
        console.log("Option sélectionnée :", value);
        redraw();
      });

      gui.add(options, 'valeurIntervalle', 0, 5, 0.2).onChange(function(value) {
        console.log("Valeur d'intervalle :", value);
        redrawobjet(value);
      });

      // Fonction pour redessiner l'objet sur le canvas
      function redraw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (options.afficherObjet) {        
//declarations de variables 
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

canvas.style.background = "black";

          context.lineWidth = 6;
          context.beginPath();
          context.moveTo(800, 350);
          context.quadraticCurveTo(950, 500, 1100, 350);
          context.strokeStyle = "hotpink";
          context.fillStyle = options.couleur;
          context.stroke();
          context.fill();
          context.closePath();

          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(800, 350);
          context.lineTo(950, 500);
          context.lineTo(1100, 350);
          context.strokeStyle = "hotpink";
          context.stroke();
 

//lignes grises sur les cotes
context.fillStyle ="gray";
context.fillRect(700, 50, 500, 15);

context.fillStyle ="gray";
context.fillRect(200, 535, 500, 15);

//cercles gris sur les cotes
context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 100, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 200, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 300, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 400, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 500, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 100, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 200, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 300, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 400, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 500, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

//debut du coeur, courbe bezier degres 3
context.lineWidth = 6; 
context.beginPath(); 
context.moveTo(400, 200);
context.bezierCurveTo(250,70,250,300,400,350);
context.strokeStyle="gray";
context.fillStyle ="hotpink";
context.stroke();
context.fill();
context.closePath();

context.lineWidth= 1;
context.beginPath();
context.moveTo(400,200);
context.lineTo(250,70);
context.lineTo(250,300);
context.lineTo(400,350);
context.strokeStyle="gray";
context.stroke();

context.lineWidth = 6; 
context.beginPath(); 
context.moveTo(400, 200);
context.bezierCurveTo(550,70,550,300,400,350);
context.strokeStyle="hotpink";
context.fillStyle ="gray";
context.stroke();
context.fill();
context.closePath();

context.lineWidth= 1;
context.beginPath();
context.moveTo(400,200);
context.lineTo(550,70);
context.lineTo(550,300);
context.lineTo(400,350);
context.strokeStyle="hotpink";
context.stroke();

//debut des boules de glace

//boule bleue etage 3
context.beginPath();
context.lineWidth = 1; 
context.arc(950, 270, 40, 0, Math.PI*2, false);
context.strokeStyle ="blue";
context.fillStyle= "blue";
context.stroke();
context.fill();
context.closePath();

//boules etage 2
context.beginPath();
context.lineWidth = 1; 
context.arc(895, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(950, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="violet";
context.fillStyle= "violet";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1005, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="pink";
context.fillStyle= "pink";
context.stroke();
context.fill();
context.closePath();

//boules etage 1
context.beginPath();
context.lineWidth = 1; 
context.arc(840, 350, 40, 0, Math.PI, true);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(895, 350, 40, 0, Math.PI, true);
context.strokeStyle ="pink";
context.fillStyle= "pink";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(950, 350, 40, 0, Math.PI, true);
context.strokeStyle ="blue";
context.fillStyle= "blue";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1000, 350, 40, 0, Math.PI, true);
context.strokeStyle ="violet";
context.fillStyle= "violet";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1060, 350, 40, 0, Math.PI, true);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();
        }
        }
        function redrawobjet(intervalleValue) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (options.afficherObjet) {
//declarations de variables 
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

canvas.style.background = "black";

          context.lineWidth = 6* intervalleValue;
          context.beginPath();
          context.moveTo(800, 350);
          context.quadraticCurveTo(950, 500, 1100, 350);
          context.strokeStyle = "hotpink";
          context.fillStyle = options.couleur;
          context.stroke();
          context.fill();
          context.closePath();

          context.lineWidth = 1 * intervalleValue;
          context.beginPath();
          context.moveTo(800, 350);
          context.lineTo(950, 500);
          context.lineTo(1100, 350);
          context.strokeStyle = "hotpink";
          context.stroke();
    
//lignes grises sur les cotes
context.fillStyle ="gray";
context.fillRect(700, 50, 500, 15);

context.fillStyle ="gray";
context.fillRect(200, 535, 500, 15);


//cercles gris sur les cotes
context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 100, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 200, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 300, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 400, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(100, 500, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 100, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 200, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 300, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 400, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle ="gray";
context.lineWidth = 10; 
context.arc(1300, 500, 40, 0, Math.PI * 2, false);
context.stroke();
context.closePath();


//debut du coeur, courbe bezier degres 3
context.lineWidth = 6; 
context.beginPath(); 
context.moveTo(400, 200);
context.bezierCurveTo(250,70,250,300,400,350);
context.strokeStyle="gray";
context.fillStyle ="hotpink";
context.stroke();
context.fill();
context.closePath();

context.lineWidth= 1;
context.beginPath();
context.moveTo(400,200);
context.lineTo(250,70);
context.lineTo(250,300);
context.lineTo(400,350);
context.strokeStyle="gray";
context.stroke();

context.lineWidth = 6; 
context.beginPath(); 
context.moveTo(400, 200);
context.bezierCurveTo(550,70,550,300,400,350);
context.strokeStyle="hotpink";
context.fillStyle ="gray";
context.stroke();
context.fill();
context.closePath();

context.lineWidth= 1;
context.beginPath();
context.moveTo(400,200);
context.lineTo(550,70);
context.lineTo(550,300);
context.lineTo(400,350);
context.strokeStyle="hotpink";
context.stroke();

//debut des boules de glace


//boule bleue etage 3
context.beginPath();
context.lineWidth = 1; 
context.arc(950, 270, 40, 0, Math.PI*2, false);
context.strokeStyle ="blue";
context.fillStyle= "blue";
context.stroke();
context.fill();
context.closePath();

//boules etage 2
context.beginPath();
context.lineWidth = 1; 
context.arc(895, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(950, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="violet";
context.fillStyle= "violet";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1005, 310, 40, 0, Math.PI*2, false);
context.strokeStyle ="pink";
context.fillStyle= "pink";
context.stroke();
context.fill();
context.closePath();

//boules etage 1
context.beginPath();
context.lineWidth = 1; 
context.arc(840, 350, 40, 0, Math.PI, true);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(895, 350, 40, 0, Math.PI, true);
context.strokeStyle ="pink";
context.fillStyle= "pink";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(950, 350, 40, 0, Math.PI, true);
context.strokeStyle ="blue";
context.fillStyle= "blue";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1000, 350, 40, 0, Math.PI, true);
context.strokeStyle ="violet";
context.fillStyle= "violet";
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.lineWidth = 1; 
context.arc(1060, 350, 40, 0, Math.PI, true);
context.strokeStyle ="white";
context.fillStyle= "white";
context.stroke();
context.fill();
context.closePath();
        }
     }
}

