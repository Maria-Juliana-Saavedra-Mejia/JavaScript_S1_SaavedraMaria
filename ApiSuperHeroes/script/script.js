async function abrirInfo(){
    let mostrarInfo = document.querySelector('.seccion');
    mostrarInfo.innerHTML=`
     <div class="caja">
        <p class="titulo">Mis Heroes</p>
    </div>
    <div class="formulario" 
    style=" height:60vw; 
     grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;" 
     >
        <h1 class="gestion">Gestion de Heroes</h1>
        <h3 class="nombre">Nombre Personaje</h3>
        <input type="text" class="nombrei">
        <h3 class="nombreActor">Nombre Actor</h3>
        <input type="text" class="nombreActori">
        <h3 class="edadActor">Edad Actor</h3>
        <input class="edadActori"type="text">
        <h3 class="ubicacion">Ubicación</h3>
        <input type="text" class="ubicacioni">
        <h3 class="poster">Poster</h3>
        <input type="text" class="posteri">
        <h3 class="fecha">Fecha</h3>
        <input class="fechai"type="date">
        <h3 class="productora">Productora</h3>
        <select  id="drawfs" class="productorai">
            <option>Marvel</option>
            <option>DComics</option>
        </select>


        <div class="Botones" style="    
        grid-column-end: 1;
        grid-column-start: 3;
        grid-row-end:14;
        grid-row-start: 14;">
            <button id="nuevo">Nuevo Heroe</button>
            <button id="guardar">Guardar Heroe</button>
            <a href="../index.html"><button id="cancelar"> Cancelar</button></a>
        </div>
    </div>

    `
}

const inputs= document.getElementById("nuevo");
inputs.addEventListener("click",function(){
   abrirInfo()
})

const inputss= document.getElementById("guardar");
inputss.addEventListener("click",function(){

})