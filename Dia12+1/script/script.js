document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');

    async function fetchData(){
        const res = await fetch('https://68163e4332debfe95dbddca2.mockapi.io/exampleclass');
        data = await res.json();
        return data;
    }
    function displayCapsula(data){

        datosContenedor.innerHTML=``;
        data.forEach(cap =>{
            const capDiv=document.createElement('div');
            if(cap.status==="On hold"){
                capDiv.innerHTML=`<div class="capsula">
            <div class="infoText">
                <p>${cap.task}</p>
            </div>
            <div class="botones">
                <div class="terminado">
                    <img src="./storage/img/pngwing.com (2).png" alt="" data-id="${cap.id}" class="completado">
                </div>
                <div class="eliminado">
                    <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" alt="" class="eliminado">
                </div>

            </div>
        </div>`;
            }else if(cap.status==="ready"){
                capDiv.innerHTML=`<div class="capsulaTerminado">
                <div class="infoText">
                    <p class="cambioTarea">${cap.task}</p>
                </div>
                <div class="botones">
                    <div class="terminado">
                        <img src="./storage/img/pngwing.com (2).png" alt="" data-id="${cap.id}" class="completado">
                    </div>
                    <div class="eliminado">
                        <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" alt="" class="eliminado">
                    </div>

                </div>
            </div>`
            }
            datosContenedor.appendChild(capDiv);
        })
    }

    fetchData().then(data=>{
        console.log(data);
        displayCapsula(data);
    })
})