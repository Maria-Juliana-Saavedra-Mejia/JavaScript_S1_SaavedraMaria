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

async function EditarAnimales() {
    let busqueda = document.querySelector("#busqueda").value;
    let name = document.querySelector("#name").value;
    let image = document.querySelector("#image").value;
    let scientific_name = document.querySelector("#scientific-name").value;
    let description = document.querySelector("#Description").value;
    
    console.log("Nombre:", name);
    console.log("Imagen:", image);
    console.log("Nombre científico:", scientific_name);
    console.log("Descripción:", description);
    
    try {
        const getResponse = await fetch(`https://68163e4332debfe95dbddca2.mockapi.io/animal/${busqueda}`, {
            method: "GET"
        });
        
        if (!getResponse.ok) {
            mostrarMensaje("Error al buscar el animal", true);
            return;
        }
        
        const animalExistente = await getResponse.json();
        const animalData = {
            name: name || animalExistente.name,
            image: image || animalExistente.image,
            scientific_name: scientific_name || animalExistente.scientific_name,
            description: description || animalExistente.description
        };
        
        // Ahora hacer la solicitud PUT con los datos
        const response = await fetch(`https://68163e4332debfe95dbddca2.mockapi.io/animal/${busqueda}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalData)
        });
        
        if (!response.ok) {
            mostrarMensaje("Error al editar el animal", true);
            return;
        }
        
        const respuesta = await response.json();
        console.log("Animal editado:", respuesta);
        
        let mostrarInfo = document.getElementById('infoApi2');
        mostrarInfo.innerHTML = `
            <h3 class="name">¡Animal editado correctamente!</h3>
            <p>Se ha editado el animal: ${respuesta.name}</p>
        `;
        console.log(`¡Animal editado correctamente! Se ha editado: ${respuesta.name}`);
        
    } catch (error) {
        mostrarMensaje("Error al intentar editar el animal", true);
        console.log("Error en la petición:", error);
    }
}


const botonEnviar = document.getElementById("ENVIAR");
botonEnviar.addEventListener("click", function() {
    EditarAnimales();
    document.querySelector("#name").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#scientific-name").value = "";
    document.querySelector("#Description").value = "";
});


