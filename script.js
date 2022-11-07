alert('Bienvenidos a esta trivia de Los Simpsons');

let secondName = 'jay';

function start(){
    let ingresar = false;

    for (let i = 2; i >= 0; i--){
        let userPIN = prompt('Para iniciar lo haremos con una pregunta muy sencilla, Cual es el segundo nombre de Homero J. Simpson ? \n Solo tiene 3 oportunidades' );
        if (userPIN.toLowerCase() == secondName){
            alert('Excelente, primer prueba superada, tranquilo mi sobrino de 2 años tambien la sabia');
            ingresar = true;
            break;
        }else if (i >= 1) {
            alert('Nop, te quedan ' + i + ' intentos, vamos que es muy facil...');
        }else{
            alert('Es enserio ? te quedaste sin intentos... toca F5 y volve a intentarlo, pero antes mirate el capitulo "D oh-in In the Wind" ');
        }
                    
    }

return ingresar;    
}


if (start()) {
    let scoreF = 0;
    let scoreI = 0;
    let scoreD = 0;
    let opcion = prompt('Elegí una opción: \n1- Facil. \n2 - Intermedio. \n3 - Dificil. \nPresioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                let questionsE = [
                  ['Que apellido le sugerieron cambiarse a la familia para escaparse de Bob Patiño ?', 'Thompson'],
                  ['Como se llama el hermano gemelo de Bart ?', 'Hugo'],
                  ['Cual es la frase que hizo famoso a Bart en el programa de Krusty', 'Yo no fui'],
                  ['Como se llaman las hermanas de Marge ?', 'Paty y Selma'],
                  ['Que instrumento practica Lisa Simpson', 'Saxofon']
              
              ];

              
                 if(prompt( questionsE[0] + '\n1- Wilson. \n2- Thompson. \n3- Jhonson ') == '2'){
                    scoreF = scoreF + 2;
                }
                if(prompt( questionsE[1] + ' \n1- Bort. \n2- Jorge. \n3- Hugo ') == '3'){
                    scoreF = scoreF + 2;
                }
                if(prompt( questionsE[2] + ' \n1- Comete mis pantalones. \n2- Kawawonga. \n3- Yo no fui ') == '3'){
                    scoreF = scoreF + 2;
                }
                if(prompt( questionsE[3] + ' \n1- Paty y Selma. \n2- Serena y Venus. \n3- Flor y Jazmin ') == '1'){
                    scoreF = scoreF + 2;
                }
                if(prompt(questionsE[4] + ' \n1- Guitarra. \n2- Saxofon. \n3- Violin') == '2'){
                    scoreF = scoreF + 2;
                }
                function showScoreF(){
                  if (scoreF == 10){
                    alert('Excelente respondiste todo muy bien, superaste nivel Facil, casi haces que Maggie hable \n Tu puntaje fue de ' + scoreF);
                  } else if(scoreF >= 6 && scoreF <=8){
                    alert('Ah bueno, ponete a mirar mas capitulos, aprobaste pero era el nivel facil. Ayudante de Santa saco 10! \n Tu puntaje fue de ' + scoreF);
                  } else if(scoreF >= 2 && scoreF <= 4){
                    alert('No aprobaste, miraste algun capitulo alguna vez? Homero es el gordo que toma cerveza y come rosquillas \n Tu puntaje fue de ' + scoreF);
                  } else if(scoreF == 0){
                    alert('.... nada que decir, claramente te estas perdiendo la mejor serie animada de todos los tiempos! \n Tu puntaje fue de ' + scoreF);
                  }
                  questionsE.forEach(element => console.log('Las Respuestas del nivel Fàcil son: ' + element[1]));
                  
                };
                showScoreF();
                scoreF = 0;
                break;
                
                case '2':
                  let questionsI = [
                    ['Que instrumento toca Bart en la banda de Jazz ?', 'Bateria'],
                    ['Con que fruta compara el matrimonio Homero Simpson ?', 'Naranja'],
                    ['Con quien se da su primer beso Lisa Simpson ?', 'Nelson'],
                    ['Como se llama el trago que hizo famoso a Moe ?', 'Llamarada Moe'],
                    ['Como se llama el grupo musical de Homero, Apu, Skiner y Barney ?', 'Los Borbotones'],
                    
                  ];
                  if(prompt(questionsI[0] +' \n1- Bajo. \n2- Saxofon. \n3- Bateria ') == '3'){
                    scoreI = scoreI + 2;
                  }
                  if(prompt(questionsI[1] +' \n1- Manzana. \n2- Naranja. \n3- Banana ') == '2'){
                    scoreI = scoreI + 2;
                  }
                  if(prompt(questionsI[2] +' \n1- Milhouse \n2- Ralph. \n3- Nelson ') == '3'){
                    scoreI = scoreI + 2;
                  }
                  if(prompt(questionsI[3] + ' \n1- Llamarada Moe \n2- El Fuego de Moe. \n3- Moe incendiado ') == '1'){
                    scoreI = scoreI + 2;
                  }
                if(prompt(questionsI[4] + ' \n1- El apuesto Homero Simpsons mas tres. \n2- Los Borbotones  \n3- El cuarteto de Homero') == '2'){
                    scoreI = scoreI + 2;
                  }
                  function showScoreI(){
                    if (scoreI == 10){
                      alert('Wow nivel intermedio excelente, nada mal eh \n Tu puntaje fue de ' + scoreI);
                    } else if(scoreI >= 6 && scoreI <=8){
                      alert('mmmm bueno algo es algo, Ayudante de Santa saco 8 \n Tu puntaje fue de ' + scoreI);
                    } else if(scoreI >= 2 && scoreI <= 4){
                      alert('Que decirte, escuchate la cancion Baby on board, es un TEMON !!!\n Tu puntaje fue de ' + scoreI);
                    } else if(scoreI == 0){
                      alert('Segui mirando capitulos... esto no es lo tuyo \n Tu puntaje fue de ' + scoreI);
                    }
                    
                    questionsI.forEach(element => console.log('Las Respuestas del nivel Intermedio son: ' + element[1]));
                  };
                  showScoreI();
                  scoreI = 0;
                  break;

            case '3':
              let questionsD = [
                ['Como se llama el creador de los Simpsons ?', 'Matt Groening'],
                ['Cual es el nombre del Sr. Smithers ?', 'Wylon'],
                ['Cuantos gatos tuvo la familia Simpsons ?' ,'5'],
                ['Que expresidente de USA se muda enfrente de la familia, luego de la pelea de Homero con Bush ?', 'Gerlad Ford'],
                ['Que cancion toca Lisa Simpson en el final del episodio "El Sax de Lisa"' , 'Baker Street, de Gerry Rafferty']
              ];
                if(prompt(questionsD[0] + ' \n1- William Groening. \n2- Matt Groening. \n3- Abraham Groening') == '2'){
                    scoreD = scoreD + 2;
                  }
                  if(prompt(questionsD[1] + ' \n1- William \n2- Willem \n3- Waylon ') == '3'){
                    scoreD = scoreD + 2;
                }
                if(prompt(questionsD[2] + '\n1- 6 \n2- 5. \n3- 7') == '2'){
                  scoreD = scoreD + 2;
                }
                if(prompt(questionsD [3] + ' \n1- Ronal Regan. \n2- Jimmy Carter. \n3- Gerald Ford') == '3'){
                  scoreD = scoreD + 2;
                }
                if(prompt(questionsD [4] + ' \n1- Baker Street, de Gerry Rafferty. \n2- Careless Whisper, de George Michael. \n3- Jazzman, de Carole King') == '1'){
                  scoreD = scoreD + 2;
                }
                function showScoreD(){
                  if (scoreD == 10){
                    alert('Digno de presidir a los Magios, puntaje perfecto \n Tu puntaje fue de ' + scoreD);
                  } else if(scoreD>= 6 && scoreD <=8){
                    alert('No vamos a decir nada de Ayudante de Santa, pero seguro te sabes algunas frases \n Tu puntaje fue de ' + scoreD);
                  }else if(scoreD>= 2 && scoreD <= 4){
                    alert('Sintoniza el canal de las 3 pelotitas sabados a la tarde, o paga Star +, pero ponete a mirar a la familia amarilla \n Tu puntaje fue de ' + scoreD);
                  }else if(scoreD== 0){
                    alert('Era el nivel Dificil, pero un cero ??? anda a mirar padre de familia, es una serie mas para vos...  \n Tu puntaje fue de ' + scoreD);
                  }
                  questionsD.forEach(element => console.log('Las Respuestas del nivel Dificil son: ' + element[1]));
                  
                };
                showScoreD();
                scoreD = 0;
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }

        opcion = prompt('Elegí una opción: \n1- Facil. \n2 - Intermedio. \n3 - Dificil. \nPresioná X para finalizar.');
        
      }
      
    } else {
      alert('No era tan dificil...');

    }
    

alert('Pusiste salir, jugaste antes ? Gracias');

