async function abrirInfo(){
    let mostrarInfo = document.getElementById('form');
    mostrarInfo.innerHTML=`
    <div class="ContenedorMayor">
            <h1>Gestion de Heroes</h1>
            <form id="heroForm">
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
                    <label for="datee" class="form-label">Fecha</label>
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
                <div class="container my-5 p-5 shadow">
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
            <div id="mensajeContainer" class="alert mt-3 mb-3" style="display: none;"></div>
            <button id="buttonADD" type="button" class="btn btn-dark">Nuevo Heroe</button>
            <button id="buttonSave" type="button" class="btn btn-primary">Guardar Heroe</button>
            <a href="../index.html"><button id="buttonCancel" type="button" class="btn btn-danger">Cancelar</button></a>
    </div>`;
    
    const pp = document.getElementById('prp');
    pp.addEventListener('click', function() {
        const ns = document.getElementById('nss');

        const trajeContainer = document.createElement('div');
        trajeContainer.className = 'traje-item mb-3';
        
        trajeContainer.innerHTML = `
        <div class="row mb-3">
            <div class="col-12">
            <label class="form-label">Nombre traje</label>
                <div class="d-flex">
                    <input type="text" class="form-control traje-input" aria-describedby="emailHelp">
                    <button type="button" class="btn btn-danger ms-2">-</button>
                </div>
            </div>
        </div>`;
        
        ns.appendChild(trajeContainer);
        
        const deleteButton = trajeContainer.querySelector('.btn-danger');
        deleteButton.addEventListener('click', function() {
            trajeContainer.remove();
        });
    });

    const saveButton = document.getElementById('buttonSave');
    saveButton.addEventListener('click', function() {
        guardarHeroe();
    });
}

function mostrarMensaje(mensaje, esError = false) {
    const mensajeContainer = document.getElementById('mensajeContainer');
    if (mensajeContainer) {
        mensajeContainer.textContent = mensaje;
        mensajeContainer.style.display = 'block';
        mensajeContainer.className = 'alert mt-3 mb-3';
        mensajeContainer.classList.add(esError ? 'alert-danger' : 'alert-success');

        setTimeout(() => {
            mensajeContainer.style.display = 'none';
        }, 3000);
    } else {
        console.error('Elemento mensajeContainer no encontrado');
    }
}


async function guardarHeroe() {

    const nombrepersonaje = document.getElementById('nameper').value;
    const nombreactor = document.getElementById('nameAct').value;
    const edadactor = document.getElementById('edadAct').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const poster = document.getElementById('pposter').value;
    const date = document.getElementById('datee').value;
    const productora = document.getElementById('product').value;
    

    const trajesInputs = document.querySelectorAll('.traje-input');
    const trajes = [];
    trajesInputs.forEach(input => {
        if (input.value.trim() !== '') {
            trajes.push(input.value.trim());
        }
    });

    if (!nombrepersonaje || !nombreactor || !edadactor || !ubicacion || !poster || !date || !productora) {
        mostrarMensaje("Todos los campos son obligatorios", true);
        return;
    }

    if (trajes.length === 0) {
        mostrarMensaje("Debe agregar al menos un traje", true);
        return;
    }

    const datosHeroe = {
        personaje: nombrepersonaje,
        actor: nombreactor,
        edad: edadactor,
        ubicacion: ubicacion,
        poster: poster,
        fecha: date,
        productora: productora,
        trajes: trajes
    };

    try {
        const respuesta = await fetch('https://681b4aa417018fe5057af2c9.mockapi.io/Superheroes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosHeroe)
        });

        if (!respuesta.ok) {
            throw new Error('Error al guardar los datos');
        }

        const datos = await respuesta.json();
        mostrarMensaje('Héroe guardado exitosamente');
        
        const form = document.getElementById('heroForm');
        if (form) form.reset();
        
        const nss = document.getElementById('nss');
        if (nss) nss.innerHTML = '';
        
    } catch (error) {
        console.error('Error:', error);
        mostrarMensaje('Error al guardar los datos: ' + error.message, true);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const nuevoBtn = document.getElementById("nuevo");
    if (nuevoBtn) {
        nuevoBtn.addEventListener("click", function() {
            abrirInfo();
        });
    }
});

