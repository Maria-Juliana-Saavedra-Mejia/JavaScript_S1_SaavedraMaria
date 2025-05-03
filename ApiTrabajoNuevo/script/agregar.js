async function agregarAnimal() {
    let name = document.querySelector("#name").value;
    let image = document.querySelector("#image").value;
    let scientific_name = document.querySelector("#scientific-name").value;
    let description = document.querySelector("#Description").value;
    
    console.log("Nombre:", name);
    console.log("Imagen:", image);
    console.log("Nombre científico:", scientific_name);
    console.log("Descripción:", description);
        
    // Validar que los campos obligatorios no estén vacíos
    if (!name || !image || !scientific_name || !description) {
        mostrarMensaje("Todos los campos son obligatorios", true);
        return;
    }
    
    // Crear el objeto con los datos del animal
    const animalData = {
        name: name,
        image: image,
        scientific_name: scientific_name,
        description: description
    };
    
    // Configurar la solicitud con el método POST y los datos
    let solicitudAnimal = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(animalData)
    };
    
    try {
        const response = await fetch("https://68163e4332debfe95dbddca2.mockapi.io/animal", solicitudAnimal);
            
        if (!response.ok) {
            mostrarMensaje("Error al agregar el animal", true);
            return;
        }
        
        const respuesta = await response.json();
        console.log("Animal agregado:", respuesta);
            
        let mostrarInfo = document.getElementById('infoApi');
        mostrarInfo.innerHTML = `
            <h3 class="name">¡Animal agregado correctamente!</h3>
            <p>Se ha agregado el animal: ${respuesta.name}</p>
        `;
        console.log(`¡Animal agregado correctamente! Se ha agregado: ${respuesta.name}`);
            
        // Dejar limpios los espacios a llenar
        document.querySelector("#name").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#scientific-name").value = "";
        document.querySelector("#Description").value = "";
        
    } catch (error) {
        mostrarMensaje("Error al intentar agregar el animal", true);
        console.log("Error en la petición:", error);
    }
}

const botonEnviar = document.getElementById("ENVIAR");
botonEnviar.addEventListener("click", function() {
    agregarAnimal();
});
