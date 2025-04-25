//Desarrollado por : Maria Juliana Saavedra Mejia - T.I.1.097.100.816
function shufflecards(){
    const baraja = "c1yl0h3nremp";
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/shuffle`;
    let cartas = new XMLHttpRequest();
    cartas.open(`GET`, url);
    cartas.send();
};

function cards(){
    shufflecards();
    let baraja = "c1yl0h3nremp";
    const card_hu = document.getElementById("JuegoPoker__api.img");
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=1`;
    let cartas = new XMLHttpRequest();
    cartas.open(`GET`, url);
    cartas.onreadystatechange = (function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            card_hu.innerHTML = `<img class="img_Cards" src="${response["cards"][0]["image"]}">`;
            console.log("lo logramos")
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
Bajando.addEventListener("click",function(){
    cards()
})