// #####################################
// Ejercicios DIA 1
// #####################################

// Funcion de la Inscripción
export function inscripcion() {
    // Se ingresan los datos al sistema
    const idn = prompt("Digite su numero de Identificación 🎂");
    const nombre = prompt("Digite sus nombre 🤳");
    const apellido = prompt("Digite sus apellidos 😜");
    const direccion = prompt("Ingrese su dirección 🐱‍🏍");
    const acudiente = prompt("Ingrese el nombre de su acudiente 🐱‍👓");
    const numcel = prompt("Ingrese su número de celular 👍");
    const numfijo = prompt("Ingrese su número de teléfono fijo 😉");
    const curso = "";
    campers.push({
        "ID": idn,
        "Nombre": nombre,
        "Apellido": apellido,
        "Direccion": direccion,
        "Acudiente": acudiente,
        "Numero de celular": numcel,
        "Numero de telefono fijo": numfijo,
        "Estado": {
            "En proceso": false,
            "Inscrito": true,
            "Aprobado": true,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulsado": false,
            "Retirado": false
        },
        "Riesgo": false,
        "grupo": curso,
        "notas": {
            "modulo1": 0.0,
            "modulo2": 0.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    }
    
    )
    const fin = prompt("Gracias por realizar la inscripción 😃");
}


let campers = [
    {
        "ID": 6677889501,
        "Nombre": "Andrés Felipe",
        "Apellido": "Garcia Vargas",
        "Direccion": "Cra 15 #18-09",
        "Acudiente": "María Garcia",
        "Numero de celular": 3152334455,
        "Numero de telefono fijo": 6123456789,
        "Estado": {
            "En proceso": false,
            "Inscrito": true,
            "Aprobado": true,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulsado": false,
            "Retirado": false
        },
        "Riesgo": true,
        "grupo": "P_2",
        "notas": {
            "modulo1": 15.533333333333333,
            "modulo2": 90.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    },
    {
        "ID": 346436,
        "Nombre": "fguhu",
        "Apellido": "kdfjshsth",
        "Direccion": "jkhnkgfgn",
        "Acudiente": "fkgjrtjgr",
        "Numero de celular": 4375348753,
        "Numero de telefono fijo": 454698734,
        "Estado": {
            "En proceso": true,
            "Inscrito": true,
            "Aprobado": true,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulado": false,
            "Retirado": false
        },
        "Riesgo": false,
        "grupo": "M_2",
        "notas": {
            "modulo1": 100.0,
            "modulo2": 0.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    },
    {
        "ID": 1,
        "Nombre": "a",
        "Apellido": "a",
        "Direccion": "a",
        "Acudiente": "a",
        "Numero de celular": 1,
        "Numero de telefono fijo": 1,
        "Estado": {
            "En proceso": false,
            "Inscrito": true,
            "Aprobado": true,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulado": false,
            "Retirado": false
        },
        "Riesgo": false,
        "grupo": "",
        "notas": {
            "modulo1": 0.0,
            "modulo2": 0.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    },
    {
        "ID": 1,
        "Nombre": "dssd",
        "Apellido": "dsds",
        "Direccion": "ddsed",
        "Acudiente": "dfsfs",
        "Numero de celular": 43434,
        "Numero de telefono fijo": 43435,
        "Estado": {
            "En proceso": false,
            "Inscrito": true,
            "Aprobado": true,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulado": false,
            "Retirado": false
        },
        "Riesgo": false,
        "grupo": "",
        "notas": {
            "modulo1": 0.0,
            "modulo2": 0.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    },
    {
        "ID": 1234,
        "Nombre": "Sara",
        "Apellido": "Diaz",
        "Direccion": "Cr 34",
        "Acudiente": "Adriana Rodriguez",
        "Numero de celular": 34567897,
        "Numero de telefono fijo": 6543234567,
        "Estado": {
            "En proceso": false,
            "Inscrito": true,
            "Aprobado": false,
            "Rechazado": false,
            "Cursando": false,
            "Graduado": false,
            "Expulado": false,
            "Retirado": false
        },
        "Riesgo": false,
        "grupo": "",
        "notas": {
            "modulo1": 0.0,
            "modulo2": 0.0,
            "modulo3": 0.0,
            "modulo4": 0.0,
            "modulo5": 0.0
        }
    }
]




























//Desarrollado por : Maria Juliana Saavedra Mejia - C.C.1.097.100.816