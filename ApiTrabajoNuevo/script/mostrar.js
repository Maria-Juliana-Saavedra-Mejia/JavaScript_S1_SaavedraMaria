async function mostrarAnimales() {
    let solicitudAnimal = {
        method: "GET"
    }
    console.log("holas")
    let busqueda = document.querySelector("#busqueda").value;
    console.log(busqueda)
    
    try {
        const response = await fetch(`https://68163e4332debfe95dbddca2.mockapi.io/animal/${busqueda}`, solicitudAnimal);
        
        if (!response.ok) {
            console.log("Hubo error!");
            console.log("holiiiii"); 
            let mostrarInfo = document.getElementById('infoApi');
            mostrarInfo.innerHTML = `<h3 class="name">No se Tiene Conocimiento de este animal</h3>`;
            return; 
        }
        
        const respuesta = await response.json();
        console.log(respuesta);
        ImpresionAnimal(respuesta);
    } catch (error) {
        console.log("Error en la petición:", error);
        console.log("holiiiii"); 
        let mostrarInfo = document.getElementById('infoApi');
        mostrarInfo.innerHTML = `<h3 class="name">No se Tiene Conocimiento de este animal</h3>`;
    }
}

function ImpresionAnimal(data){
    let mostrarInfo = document.getElementById('infoApi');
    mostrarInfo.innerHTML=`<h3 class="name" >Name: ${data["name"]}<h3>
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
