const urltoken = `https://api.petfinder.com/v2/oauth2/token`;
const urlapi = `https://api.petfinder.com/v2/animals`;
const cpets = document.getElementById('pets_container');

function almacenamiento(){
    fetch(urltoken,{
        method:"POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: '06UB8dDlw16WdbnuPPsT8BmSNelq8o4xuoXfeLu6A1qgeaMpAl',
          client_secret: 'u5t7i2Hfs72KQ4vZTge8h6HuKriSQS6ovXSR853P'
        })
      })
      .then(res=>res.json())
      .then(data=>{
        const token = data.access_token;
        fetch(urlapi,{
            method:"GET",
            headers:{
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response=>response.json())
        .then(data =>{
            for (i=0;i<data.animals.length;i++){
                let mascotas = data.animals[i]
                let imagesrc = mascotas.photos[0]?.full || mascotas.photos[0]?.large || mascotas.photos[0]?.medium || mascotas.photos[0]?.small || 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png';
                let age= mascotas.age
                let gender= mascotas.gender
                let size=mascotas.size
                let ubicacion=mascotas.contact.address.address1
                let country=mascotas.contact.address.country
                let city=mascotas.contact.address.city
                let raza=mascotas.breeds.primary
                let especie= mascotas.species
                cpets.innerHTML += `
                <div class="ContenedorAnimales">
                  <img class="PetImages" src="${imagesrc}"/>
                  <h1 class="PetName">Nombre: ${mascotas.name}</h1>
                  <h1 class="age">Edad y Tamaño: ${age}, ${size}</h1>
                  <h1 class="location">Ubicación:  ${country}, ${city}</h1>
                  <h1 class="breed">Especie, Genero y Raza: ${especie}, ${gender}, ${raza}</h1>
                  <img src="../img/mas.svg" class="simboloEstrella">
                  <img src="../img/estrellaVacia.svg" class="simboloMas">
                </div>
                `;
            }
        })
      })
}

document.addEventListener("DOMContentLoaded",almacenamiento)