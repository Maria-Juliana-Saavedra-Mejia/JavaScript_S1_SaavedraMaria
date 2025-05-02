//Imprimir Informaciòn 
async function ImprimirUsuarios(){
    let opcionesSolicitud ={
        method:"GET"
    }
    console.log("jijijiji");
    let anoAfuera = document.getElementById('anos').value;
    console.log(anoAfuera);
    let paisesAfuera = document.getElementById('paises').value;
    console.log(paisesAfuera);
    await fetch(`https://681423fb225ff1af1627fe07.mockapi.io/users`,opcionesSolicitud)
    .then(response =>{
        if(!response.ok){
            console.log("Hubo error!");
        }else{
            return response.json();
        }
    })
    .then((edgar)=>{
        console.log(edgar);
        displayHoly(edgar);
    });
};
ImprimirUsuarios()

function displayHoly(datica) {
    
    let mostrarInfo = document.getElementById('daticosConsumidos');
    mostrarInfo.innerHTML=``;
    console.log(datica.length);
    for (let i = 0; i < datica.length; i++) {
        mostrarInfo.innerHTML = mostrarInfo.innerHTML + `<h2>La festividad # ${i} es ${datica[i]["localName"]} y es en esta fecha:${datica[i]["date"]}</h2>`
    }


}
let elementoBoton = document.getElementById('botonMandar');
elementoBoton.addEventListener("click", ImprimirUsuarios());

//Agregar Informaciòn 


//Editar Informaciòn 


//Eliminar Informaciòn 