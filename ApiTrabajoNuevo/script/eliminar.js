async function eliminarAnimal() {
    let solicitudAnimal = {
        method: "DELETE"
    }
    console.log("Iniciando eliminación");
    let busqueda = document.querySelector("#busqueda").value;
    console.log("ID a eliminar:", busqueda);
    
    function mostrarMensaje(mensaje, esError = false) {
        console.log(mensaje);
        let mostrarInfo = document.getElementById('infoApi');
        if (esError) {
            console.log("holiiiii"); 
        }
        mostrarInfo.innerHTML = `<h3 class="name">${mensaje}</h3>`;
    }
    
    try {
        const response = await fetch(`https://68163e4332debfe95dbddca2.mockapi.io/animal/${busqueda}`, solicitudAnimal);
        
        if (!response.ok) {
            mostrarMensaje("El animal que quiere eliminar no se encuentra", true);
            return;
        }
        const respuesta = await response.json();
        console.log("Animal eliminado:", respuesta);
        
        let mostrarInfo = document.getElementById('infoApi');
        mostrarInfo.innerHTML = `
            <h3 class="name">¡Animal eliminado correctamente!</h3>
            <p>Se ha eliminado el animal: ${respuesta.name}</p>
        `;
        console.log(`¡Animal eliminado correctamente! Se ha eliminado: ${respuesta.name}`);
        document.querySelector("#busqueda").value = "";
        
    } catch (error) {
        mostrarMensaje("Error al intentar eliminar el animal", true);
        console.log("Error en la petición:", error);
    }
}

const input=document.getElementById("busqueda");
input.addEventListener("keydown",function(event){
    if (event.key==="Enter"){
        eliminarAnimal()
    }
})

const inputs= document.getElementById("enviar");
inputs.addEventListener("click",function(){
        eliminarAnimal()
})
