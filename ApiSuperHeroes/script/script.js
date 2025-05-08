async function abrirInfo(){
    let mostrarInfo = document.getElementById('form');
    mostrarInfo.innerHTML=`
    <div>
    <h1>Gestion de Heroes</h1>
    <form>
        <div class="row mb-3">
            <div class="col-6">
            <label for="nameper" class="form-label">Nombre Del Personaje</label>
            <input  type="text" class="form-control" id="nameper" aria-describedby="emailHelp">
          </div>
          <div class="col-6">
            <label for="nameAct" class="form-label">Nombre Del Actor</label>
            <input type="text" class="form-control" id="nameAct" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
            <label for="edadAct" class="form-label">Edad Del Actor</label>
            <input type="text" class="form-control" id="edadAct" aria-describedby="emailHelp">
          </div>
          <div class="col-6">
            <label for="ubicacion" class="form-label">Ubicacion</label>
            <input type="text" class="form-control" id="ubicacion" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
            <label for="pposter" class="form-label">Poster</label>
            <input  type="text" class="form-control" id="pposter" aria-describedby="emailHelp">
          </div>
          <div class="col-6">
            <label for="datee" class="form-label">Ubicacion</label>
            <input type="date" class="form-control" id="datee" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
            <label for="product" class="form-label">Productora</label>
            <select  class="form-control" id="product" aria-describedby="emailHelp">
                <option value="MARVEL">MARVEL</option>
                <option value="DCOMICS">DCOMICS</option>
            </select>
          </div>
        </div>
    </form>
     <div class="Suits">
        <div id="form" class="container my-5 p-5 shadow">
            <table class="table" style="border-top-right-radius: 1vw; border-top-left-radius: 1vw;">
                <tr class="table-active">
                    <td class="table-secondary">Registro de trajes</td>
                </tr>
                <tr>
                    <td>
                        <font color="blue">
                            <h1>Trajes del personaje</h1>
                            <h2>En esta seccion podra registrar los nombres de los trajes usados por el actor en cada una de las peliculas</h2>
                            <button id="prp" type="button" class="btn btn-warning">+</button>
                            <div id="nss" class="container"></div>
                        </font>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <button id="buttonADD" type="button" class="btn btn-dark">Nuevo Heroe</button>
    <button id="buttonSave" type="button" class="btn btn-primary">Guardar Heroe</button>
    <a href="../index.html"><button id="buttonCancel" type="button" class="btn btn-danger">Cancelar</button></a>
    </div>`;
    const pp = document.getElementById('prp');
pp.addEventListener('click',function suit(){
    const ns = document.getElementById('nss');
    ns.innerHTML += `
    <form>
        <div class="row mb-3">
            <div class="col-12">
            <label for="exampleInputEmail1" class="form-label">Nombre traje</label>
                <div class="fle">
                    <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <button type="button" class="btn btn-danger btn-lg" id="botoncito">-</button>
                <div>
            </div>
        </div>
    </form>`})



const ee = document.getElementById('botoncito');
ee.addEventListener('click',function elim(){
    const ns = document.getElementById('nss');
    ns.innerHTML -= `
    `
})
}

const inputs= document.getElementById("nuevo");
inputs.addEventListener("click",function(){
   abrirInfo()
})

