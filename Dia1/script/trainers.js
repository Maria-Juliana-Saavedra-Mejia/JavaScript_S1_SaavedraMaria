// #####################################
// Ejercicios DIA 1
// #####################################

export function Pedro(){
    alert(
        "Bienvenido trainer Pedro Gomez\n"+
        "Para agregar notas a clase P_1 ingrese (1)\n"+
        "Para agregar notas a clase P_2 ingrese (2)\n"+
        "Para ver su horario digite (3)\n"+
        "Para salir digite (4).\n"
        )
    let pedrito=prompt("Digite el numero de su elección 😃");
    if (pedrito==1){
        alert("Bienvenido a la clase P_1");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  

    }else if (pedrito==2){
        alert("Bienvenido a la clase P_2");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }
    else if (pedrito==3){
        alert("Este es su horario");
        alert(
            "Grupo: "+(trainer[0]["grupo"])+"\n"+
            "Salon: "+(trainer[0]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[0]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[0]["Fecha de finalizacion"])+"\n"+
            "Horario: "+(trainer[0]["Horario"])+"\n"+
            "Ruta: "+(trainer[0]["Ruta"])+"\n"+
            "Modulos: "+(trainer[0]["Modulos"])+"\n"+
            "Grupo: "+(trainer[1]["grupo"])+"\n"+
            "Salon: "+(trainer[1]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[1]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[1]["Fecha de finalizacion"])+"\n"+
            "Horario: " +(trainer[1]["Horario"])+"\n"+
            "Ruta: "+(trainer[1]["Ruta"])+"\n"+
            "Modulos: "+(trainer[1]["Modulos"])
        );
    }
    else if (pedrito==4){
        alert("Vuelva Pronto 😃");
    }
    else {
        alert("Eleccion Incorrecta");
    }
}






export function Miguel(){
    alert(
        "Bienvenido trainer Miguel Rodriguez\n"+
        "Para agregar notas a clase M_1 ingrese (1)\n"+
        "Para agregar notas a clase M_2 ingrese (2)\n"+
        "Para ver su horario digite (3)\n"+
        "Para salir digite (4)\n"
    )
    let migue=prompt("Digite el numero de su elección 😃");
    if (migue==1){
        alert("Bienvenido a la clase M_1");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }else if (migue==2){
        alert("Bienvenido a la clase M_2");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }
    else if (migue==3){
        alert("Este es su horario");
        alert(
            "Grupo: "+(trainer[2]["grupo"])+"\n"+
            "Salon: "+(trainer[2]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[2]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[2]["Fecha de finalizacion"])+"\n"+
            "Horario: "+(trainer[2]["Horario"])+"\n"+
            "Ruta: "+(trainer[2]["Ruta"])+"\n"+
            "Modulos: "+(trainer[2]["Modulos"])+"\n"+
            "Grupo: "+(trainer[3]["grupo"])+"\n"+
            "Salon: "+(trainer[3]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[3]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[3]["Fecha de finalizacion"])+"\n"+
            "Horario: " +(trainer[3]["Horario"])+"\n"+
            "Ruta: "+(trainer[3]["Ruta"])+"\n"+
            "Modulos: "+(trainer[3]["Modulos"])
        );
    }
    else if (migue==4){
        alert("Vuelva Pronto 😃");
    }
    else {
        alert("Eleccion Incorrecta");
    }
}






export function Juan() {
    alert(
        "Bienvenido trainer Juan Nariño\n"+
        "Para agregar notas a clase J_1 ingrese (1)\n"+
        "Para agregar notas a clase J_2 ingrese (2)\n"+
        "Para ver su horario digite (3)\n"+
        "Para salir digite (4)\n"
    )
    let juancho=prompt("Digite el numero de su elección 😃");
    if (juancho==1){
        alert("Bienvenido a la clase J_1");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }else if (juancho==2){
        alert("Bienvenido a la clase J_2");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }
    else if (juancho==3){
        alert("Este es su horario");
        alert(
            "Grupo: "+(trainer[4]["grupo"])+"\n"+
            "Salon: "+(trainer[4]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[4]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[4]["Fecha de finalizacion"])+"\n"+
            "Horario: "+(trainer[4]["Horario"])+"\n"+
            "Ruta: "+(trainer[4]["Ruta"])+"\n"+
            "Modulos: "+(trainer[4]["Modulos"])+"\n"+
            "Grupo: "+(trainer[5]["grupo"])+"\n"+
            "Salon: "+(trainer[5]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[5]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[5]["Fecha de finalizacion"])+"\n"+
            "Horario: " +(trainer[5]["Horario"])+"\n"+
            "Ruta: "+(trainer[5]["Ruta"])+"\n"+
            "Modulos: "+(trainer[5]["Modulos"])
        );
    }
    else if (juancho==4){
        alert("Vuelva Pronto 😃");
    }
    else {
        alert("Eleccion Incorrecta");
    }
}







export function Santiago() {
    alert(
        "Bienvenido trainer Santiago Melo\n"+
        "Para agregar notas a clase S_1 ingrese (1)\n"+
        "Para agregar notas a clase S_2 ingrese (2)\n"+
        "Para ver su horario digite (3)\n"+
        "Para salir digite (4)\n"
    )
    let santi=prompt("Digite el numero de su elección 😃");
    if (santi==1){
        alert("Bienvenido a la clase S_1");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }else if (santi==2){
        alert("Bienvenido a la clase S_2");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }
    else if (santi==3){
        alert("Este es su horario");
        alert(
            "Grupo: "+(trainer[6]["grupo"])+"\n"+
            "Salon: "+(trainer[6]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[6]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[6]["Fecha de finalizacion"])+"\n"+
            "Horario: "+(trainer[6]["Horario"])+"\n"+
            "Ruta: "+(trainer[6]["Ruta"])+"\n"+
            "Modulos: "+(trainer[6]["Modulos"])+"\n"+
            "Grupo: "+(trainer[7]["grupo"])+"\n"+
            "Salon: "+(trainer[7]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[7]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[7]["Fecha de finalizacion"])+"\n"+
            "Horario: " +(trainer[7]["Horario"])+"\n"+
            "Ruta: "+(trainer[7]["Ruta"])+"\n"+
            "Modulos: "+(trainer[7]["Modulos"])
        );
    }
    else if (santi==4){
        alert("Vuelva Pronto 😃");
    }
    else {
        alert("Eleccion Incorrecta");
    }
}







export function carlos() {
    alert(
        "Bienvenido trainer Carlos Rueda\n"+
        "Para agregar notas a clase S_1 ingrese (1)\n"+
        "Para agregar notas a clase S_2 ingrese (2)\n"+
        "Para ver su horario digite (3)\n"+
        "Para salir digite (4)\n"
    )
    let carlos=prompt("Digite el numero de su elección 😃");
    if (carlos==1){
        alert("Bienvenido a la clase C_1");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }else if (carlos==2){
        alert("Bienvenido a la clase C_2");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }
    else if (carlos==3){
        alert("Este es su horario");
        alert(
            "Grupo: "+(trainer[8]["grupo"])+"\n"+
            "Salon: "+(trainer[8]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[8]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[8]["Fecha de finalizacion"])+"\n"+
            "Horario: "+(trainer[8]["Horario"])+"\n"+
            "Ruta: "+(trainer[8]["Ruta"])+"\n"+
            "Modulos: "+(trainer[8]["Modulos"])+"\n"+
            "Grupo: "+(trainer[9]["grupo"])+"\n"+
            "Salon: "+(trainer[9]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[9]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[9]["Fecha de finalizacion"])+"\n"+
            "Horario: " +(trainer[9]["Horario"])+"\n"+
            "Ruta: "+(trainer[9]["Ruta"])+"\n"+
            "Modulos: "+(trainer[9]["Modulos"])
        );
    }
    else if (carlos==4){
        alert("Vuelva Pronto 😃");
    }
    else {
        alert("Eleccion Incorrecta");
    }
}







export function Antonio() {
    alert(
        "Bienvenida trainer Antonio Vega\n"+
        "Para agregar notas a clase A_1 ingrese (1)\n"+
        "Para agregar notas a clase A_2 ingrese (2)n"+
        "Para ver su horario digite (3)\n"+
        "Para salir digite (4)\n"
    )
    let anton=prompt("Digite el numero de su elección 😃");
    if (anton==1){
        alert("Bienvenido a la clase A_1");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }else if (anton==2){
        alert("Bienvenido a la clase A_2");
        alert("¿Que nota desea ingresar?");
        cosita=prompt(
            "1. Proyecto \n"+
            "2. Examen \n"+
            "3. Otros \n"
            )
        if(cosita==1){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==2){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else if(cosita==3){
            for(i=1; i<30; i=i+1){
                numerito=prompt("Ingrese la nota #"+i)
            }
        }else{
            alert("Eleccion Incorrecta");
        }  
    }
    else if (anton==3){
        alert("Este es su horario");
        alert(
            "Grupo: "+(trainer[10]["grupo"])+"\n"+
            "Salon: "+(trainer[10]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[10]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[10]["Fecha de finalizacion"])+"\n"+
            "Horario: "+(trainer[10]["Horario"])+"\n"+
            "Ruta: "+(trainer[10]["Ruta"])+"\n"+
            "Modulos: "+(trainer[10]["Modulos"])+"\n"+
            "Grupo: "+(trainer[11]["grupo"])+"\n"+
            "Salon: "+(trainer[11]["Salon"])+"\n"+
            "Fecha de Inicio :"+(trainer[11]["Fecha de inicio"])+"\n"+
            "Fecha de finalizacion: "+(trainer[11]["Fecha de finalizacion"])+"\n"+
            "Horario: " +(trainer[11]["Horario"])+"\n"+
            "Ruta: "+(trainer[11]["Ruta"])+"\n"+
            "Modulos: "+(trainer[11]["Modulos"])
        );
    }
    else if (anton==4){
        alert("Vuelva Pronto 😃");
    }
    else {
        alert("Eleccion Incorrecta");
    }
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

let trainer = [
    {
        "grupo": "P_1",
        "Profesor": "Pedro Gomez",
        "Salon": "Apolo",
        "Fecha de inicio": "14 enero, 2024",
        "Fecha de finalizacion": "14 Noviembre, 2025",
        "Horario": [
            "Inicio = 6:00 am",
            "finalizacion : 10:00 am"
        ],
        "Ruta": "Java",
        "Modulos": []
    },
    {
        "grupo": "P_2",
        "Profesor": "Pedro Gomez",
        "Salon": "Apolo",
        "Fecha de inicio": "23 Diciembre, 2024",
        "Fecha de finalizacion": "3 Noviembre, 2025",
        "Horario": [
            "Inicio = 2:00 pm",
            "finalizacion : 6:00 pm"
        ],
        "Ruta": "Java",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "M_1",
        "Profesor": "Miguel Rodriguez",
        "Salon": "Artemis",
        "Fecha de inicio": "25 febrero, 2025",
        "Fecha de finalizacion": "20 Diciembre, 2025",
        "Horario": [
            "Inicio = 6:00 am",
            "finalizacion : 10:00 am"
        ],
        "Ruta": "NodeJS",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "M_2",
        "Profesor": "Miguel Rodriguez",
        "Salon": "Artemis",
        "Fecha de inicio": "6 enero, 2025",
        "Fecha de finalizacion": "6 Noviembre, 2025",
        "Horario": [
            "Inicio = 2:00 pm",
            "finalizacion : 6:00 pm"
        ],
        "Ruta": "NodeJS",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "J_1",
        "Profesor": "Juan Nariño",
        "Salon": "Sputnik",
        "Fecha de inicio": "20 enero, 2025",
        "Fecha de finalizacion": "20 Noviembre, 2025",
        "Horario": [
            "Inicio = 6:00 am",
            "finalizacion : 10:00 am"
        ],
        "Ruta": "Java",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "J_2",
        "Profesor": "Juan Nariño",
        "Salon": "Sputnik",
        "Fecha de inicio": "13 Marzo, 2025",
        "Fecha de finalizacion": "20 Enero, 2026",
        "Horario": [
            "Inicio = 2:00 pm",
            "finalizacion : 6:00 pm"
        ],
        "Ruta": "Java",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "S_1",
        "Profesor": "Santiago Melo",
        "Salon": "Artemis",
        "Fecha de inicio": "30 Diciembre, 2024",
        "Fecha de finalizacion": "1 Noviembre, 2025",
        "Horario": [
            "Inicio = 10:00 am",
            "finalizacion : 2:00 pm"
        ],
        "Ruta": ".NET",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "S_2",
        "Profesor": "Santiago Melo",
        "Salon": "Artemis",
        "Fecha de inicio": "15 diciembre, 2024",
        "Fecha de finalizacion": "1 Septiembre, 2025",
        "Horario": [
            "Inicio = 10:00 am",
            "finalizacion : 2:00 pm"
        ],
        "Ruta": ".NET",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "C_1",
        "Profesor": "Carlos Rueda",
        "Salon": "Artemis",
        "Fecha de inicio": "10 Febrero, 2025",
        "Fecha de finalizacion": "1 Diciembre, 2025",
        "Horario": [
            "Inicio = 2:00 pm",
            "finalizacion : 10:00 pm"
        ],
        "Ruta": ".NET",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "C_2",
        "Profesor": "Carlos Rueda",
        "Salon": "Artemis",
        "Fecha de inicio": "26 diciembre, 2024",
        "Fecha de finalizacion": "1 Noviembre, 2025",
        "Horario": [
            "Inicio = 2:00 pm",
            "finalizacion : 10:00 pm"
        ],
        "Ruta": ".NET",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "A_1",
        "Profesor": "Antonio Vega",
        "Salon": "Sputnik",
        "Fecha de inicio": "8 Febrero, 2025",
        "Fecha de finalizacion": "5 Diciembre, 2025",
        "Horario": [
            "Inicio = 10:00 am",
            "finalizacion : 2:00 pm"
        ],
        "Ruta": "NodeJS",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    },
    {
        "grupo": "A_2",
        "Profesor": "Antonio Vega",
        "Salon": "Sputnik",
        "Fecha de inicio": "8 Mayo, 2025",
        "Fecha de finalizacion": "5 Marzo, 2026",
        "Horario": [
            "Inicio = 2:00 pm",
            "finalizacion : 6:00 pm"
        ],
        "Ruta": ".NET",
        "Modulos": [
            "Fundamentos de programación",
            "Programacion Web",
            "Programacion Formal",
            "Base de datos",
            "Backend"
        ]
    }
]