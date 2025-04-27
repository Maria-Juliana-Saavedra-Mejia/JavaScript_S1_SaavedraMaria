//Desarrollado por : Maria Juliana Saavedra Mejia - T.I.1.097.100.816
function shufflecards(){
    const baraja = "c1yl0h3nremp";
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/shuffle`;
    let cartas = new XMLHttpRequest();
    cartas.open(`GET`, url);
    cartas.send();
};

function convertirValor(valorTexto) {
    switch (valorTexto) {
        case "1": return 1;
        case "2": return 2;
        case "3": return 3;
        case "4": return 4;
        case "5": return 5;
        case "6": return 6;
        case "7": return 7;
        case "8": return 8;
        case "9": return 9;
        case "10": return 10;
        case "ACE": return 13;
        case "JACK": return 10;
        case "QUEEN": return 11;
        case "KING": return 12;
        default: return parseInt(valorTexto); 
    }
}

function cards(){
    shufflecards();
    let ValorCarta=0
    let baraja = "c1yl0h3nremp";
    const card_hu = document.getElementById("JuegoPoker__api.img");
    const card_text = document.getElementById("JuegoPoker__api.textos");
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=1`;
    let cartas = new XMLHttpRequest();
    cartas.open(`GET`, url);
    cartas.onreadystatechange = (function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            card_hu.innerHTML = `<img class="img_Cards" src="${response["cards"][0]["image"]}">`;
            card_text.innerHTML = `<p class="numeros"> ${response["cards"][0]["value"]}</p>`;
            console.log("lo logramos")

            if (card_text == "ACE") {
                ValorCarta = 13;
            } else if (card_text == "2") {
                ValorCarta = 2;
            } else if (card_text == "3") {
                ValorCarta = 3;
            } else if (card_text == "4") {
                ValorCarta = 4;
            } else if (card_text == "5") {
                ValorCarta = 5;
            } else if (card_text == "6") {
                ValorCarta = 6;
            } else if (card_text == "7") {
                ValorCarta = 7;
            } else if (card_text == "8") {
                ValorCarta = 8;
            } else if (card_text == "9") {
                ValorCarta = 9;
            } else if (card_text == "10") {
                ValorCarta = 10;
            } else if (card_text == "JACK") {
                ValorCarta = 11;
            } else if (card_text == "QUEEN") {
                ValorCarta = 12;
            } else if (card_text == "KING") {
                ValorCarta = 13;
            }
            console.log(ValorCarta)
        }
    });
    cartas.send();
};

cards();

const subiendo= document.getElementById("JuegoPoker__botones--mas");
subiendo.addEventListener("click",function(){
    cards()
})

const bajando= document.getElementById("JuegoPoker__botones--menos");
bajando.addEventListener("click",function(){
    cards()
})