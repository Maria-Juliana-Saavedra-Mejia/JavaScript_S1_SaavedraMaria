function BuscarPoke(){
    let pokes = new XMLHttpRequest();
    let numPokemon = document.getElementById("fondo__formBusqueda--formtext").value;
    let link= `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;

    if (numPokemon==0){
        numPokemon=1
        let link= `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;
        //Primer paso es crear(abrir) la solicitud
        pokes.open('GET',link,true);
        //Segundo paso es decir qué hacer con esa solicitud
        pokes.onreadystatechange = function(){
        if(this.readyState === 4 && this.status ===200 ){
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta["sprites"]["other"]["showdown"]["front_default"]);
            printPoke(respuesta);
        }else{
            printPoke({ response: "error" });  // <-- Aquí envías un "objeto de error"
        }
    };
    //El tercer paso es ejecutar la solicitud
    pokes.send();
    }
    else
    {
        //Primer paso es crear(abrir) la solicitud
    pokes.open('GET',link,true);
    //Segundo paso es decir qué hacer con esa solicitud
    pokes.onreadystatechange = function(){
        if(this.readyState === 4 && this.status ===200 ){
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta["sprites"]["other"]["showdown"]["front_default"]);
            printPoke(respuesta);
        }else{
            printPoke({ response: "error" });  // <-- Aquí envías un "objeto de error"
        }
    };
    //El tercer paso es ejecutar la solicitud
    pokes.send();
    }

}

BuscarPoke();

function MenosId(){
    let input = document.getElementById("fondo__formBusqueda--formtext");
    let numPokemon = parseInt(input.value, 10);
    if(numPokemon > 1) {
        numPokemon -= 1;
        input.value = numPokemon;
        BuscarPoke();
    }
}


function MasId(){
    let input = document.getElementById("fondo__formBusqueda--formtext");
    let numPokemon = parseInt(input.value, 10);
    numPokemon += 1;
    input.value = numPokemon;
    BuscarPoke();
}

function printPoke(data){
    let informacionHTML = document.getElementById('fondo__poquemonInfo--name&image');
    if(data.response == "error"){
        informacionHTML.innerHTML=`<p class="nada">Error este pokemon no existe</p>`

    }else{
        informacionHTML.innerHTML=`
        <img class="foto" src=${data["sprites"]["other"]["showdown"]["front_default"]} />
        <p class="id">${data["id"]}-</p>
        <p class="name"> ${data["name"]}</p>`
    }
}





//Cuando le de enter va a tomar ese valor o nombre y va a usarlo para buscar dentro de la api
//Buscando asi el pokemon en esta para luego mostrarlo
const input= document.getElementById("fondo__formBusqueda--formtext");
input.addEventListener("keydown",function(event){
    if (event.key==="Enter"){
        BuscarPoke()
    }

})

const inputs= document.getElementById("fondo__formBusqueda--prev");
inputs.addEventListener("click",function(){
     MenosId()
})

const inputss= document.getElementById("fondo__formBusqueda--next");
inputss.addEventListener("click",function(){
     MasId()
})