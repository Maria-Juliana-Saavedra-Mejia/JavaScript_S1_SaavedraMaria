//Desarrollado por : Maria Juliana Saavedra Mejia - T.I.1.097.100.816
let valor_inicial = 0;
let valor_anterior = 0;
let puntos_jugador = 0;
let puntos_maquina = 0;
let primera_carta = false;


//Funcion en la que se barajan las cartas
function shufflecards(){
    const baraja = "c1yl0h3nremp";
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/shuffle`;
    let cartas = new XMLHttpRequest();
    cartas.open(`GET`, url);
    cartas.send();
};

//Funcion en la que se imprimen las cartas y la informacion reelevante de la api
function cards(){

    let baraja = "c1yl0h3nremp";
    const card_hu = document.getElementById("JuegoPoker__api.img");
    const card_2 = document.getElementById("JuegoPoker__api.img2");
    const card_text = document.getElementById("JuegoPoker__api.textos");


    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=1`;
    let cartas = new XMLHttpRequest();
    cartas.open(`GET`, url);

    cartas.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            let Carta1 = response["cards"][0]["image"];
            
            // Tomar los datos de la carta para almacenarlos
            if (primera_carta) {
                // Mover la carta 
                card_2.innerHTML = card_hu.innerHTML;
                valor_anterior = valor_inicial;
                
                // Actualizar el texto con el valor de la carta 2 (anterior)
                card_text.innerHTML = `<p class="numeros">${valor_anterior}</p>`;
            } else {
                primera_carta = true;
            }
            
            // Colocar la nueva carta en la posición actual
            card_hu.innerHTML = `<img class="img_Cards" src="${Carta1}">`;
            
            // Se estipulan los valores para todas las cartas, basandonos de la informacion de la api
            if (response["cards"][0]["value"] === "ACE") {
                valor_inicial = 1;
            } else if (response["cards"][0]["value"] === "JACK") {
                valor_inicial = 11;
            } else if (response["cards"][0]["value"] === "QUEEN") {
                valor_inicial = 12;
            } else if (response["cards"][0]["value"] === "KING") {
                valor_inicial = 13;
            } else {
                valor_inicial = parseInt(response["cards"][0]["value"]);
            }
            
            // Si es la primera carta se muestra su valor, ya que no se tiene una antes de esta
            if (!card_2.querySelector('img')) {
                card_text.innerHTML = `<p class="numeros">${valor_inicial}</p>`;
            }
            
            actualizarPuntos();
            console.log("Carta actual:", valor_inicial, "Carta anterior:", valor_anterior);
        }
    };
    
    cartas.send();
}

function actualizarPuntos() {
     // se llaman los div en los que tengo los diferentes puntajes
    const puntos_j1 = document.getElementById("JuegoPoker__CasillaPuntos--puntos1");
    const puntos_j2 = document.getElementById("JuegoPoker__CasillaPuntos--puntos2");
     // se modifican dichos valores
    if (puntos_j1 && puntos_j2) {
        puntos_j1.textContent = puntos_jugador;
        puntos_j2.textContent = puntos_maquina;
    }
}

// Comienza el juego
window.onload = function() {
    shufflecards();
    
    // Tanto maquina como jugador empiezan con un puntaje de 0
    document.getElementById("JuegoPoker__CasillaPuntos--puntos1").textContent = "0";
    document.getElementById("JuegoPoker__CasillaPuntos--puntos2").textContent = "0";
    
    // Mostar una carta al iniciar el juego sin necesidad de apretar los botones
    cards();
};








// Si se pulsa el boton va a mover la carta y va a realizar la comparacion con la anterior
// Por lo tanto al hacer esto se va a modificar el resultado de los puntos
// Tnto los de la computadora, como los del jugador

const subiendo = document.getElementById("JuegoPoker__botones--mas");
subiendo.addEventListener("click", function() {
    if (valor_anterior !== 0) {
        // cuando el jugador dice que la carta que va a salir va a ser mayor
        const acierto = valor_inicial > valor_anterior;
        
        if (acierto) {
            puntos_jugador += 1;
        } else {
            puntos_maquina += 1;
        }
        
        actualizarPuntos();
    }
    
    // sacar la carta que sigue
    cards();
});

const bajando = document.getElementById("JuegoPoker__botones--menos");
bajando.addEventListener("click", function() {
    if (valor_anterior !== 0) {
          // cuando el jugador dice que la carta que va a salir va a ser menor
        const acierto = valor_inicial < valor_anterior;
        
        if (acierto) {
            puntos_jugador += 1;
        } else {
            puntos_maquina += 1;
        }
        
        actualizarPuntos();
    }
    
    // sacar la carta que sigue
    cards();
});