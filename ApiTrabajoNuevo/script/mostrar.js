console.log("holiiiii")
async function mostrarAnimales() {
    let solicitudAnimal={
        method:"GET"
    }
    console.log("holas")
    let busqueda= document.querySelector("#busqueda").value;
    console.log(busqueda)
    await fetch(`https://68163e4332debfe95dbddca2.mockapi.io/animal/${busqueda}`,solicitudAnimal)
    .then(response =>{
        if(!response.ok){
            console.log("Hubo error!");
        }else{
            return response.json();
        }
    })
    .then((respuesta)=>{
        console.log(respuesta);
        ImpresionAnimal(respuesta);
    });
}

function ImpresionAnimal(data){
    let mostrarInfo = document.getElementById('infoApi');
    mostrarInfo.innerHTML=`
    <h3 class="name" >Name: ${data["name"]}<h3>
    <img class="img" src="${data["image"]}">
    <h3 class="scientific_name" >Scientific Name: ${data["scientific_name"]}<h3>
    <h3 class="description" >Description: ${data["description"]}<h3>
    `;
}

const input=document.getElementById("busqueda");
input.addEventListener("keydown",function(event){
    if (event.key==="Enter"){
        mostrarAnimales()
    }
})

const inputs= document.getElementById("enviar");
inputs.addEventListener("click",function(){
     mostrarAnimales()
})
