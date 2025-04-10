//#####################################// 
// Ejercicios DIA 1// 
// #####################################// 

// Importaciones// 
import * as menus from './menus.js'
import * as campers from './campers.js'
import * as trainers from './trainers.js'
import * as coordinador from './coordinador.js'

// muestra del menu principal// 
menus.menuPrincipal();
// elige del menu principal// 
let n=prompt("Digite su elección de como quiere ingresar 👀")

if (n==1){
    // muestra del menu camper//
    menus.menuEstudiante();
    let n1=prompt("Digite el número de lo que quiere realizar ✔");
    if(n1==1){
        campers.inscripcion();
    }else if(n1==2){
        campers.IngresarPerfil();
    }else if(n1==3){
        campers.salir();
    }else {
        alert("Eleccion Incorrecta")
    }

} else if(n==2){
    // muestra del menu trainer// 
    menus.menuTrainer();
    let n2=prompt("Digite el número correspondiente a su perfil 😆");
    if (n2==1){
        trainers.Pedro();
    } else if (n2==2){
        trainers.Miguel();
    } else if (n2==3){
        trainers.Juan();
    } else if (n2==4){
        trainers.Santiago();
    } else if (n2==5){
        trainers.carlos();
    } else if (n2==6){
        trainers.Antonio();
    }else{
        alert("Eleccion Incorrecta")
    }   
} else if (n==3){
    // muestra del menu Coordinador// 
    menus.menuCoordinador();
    let n3=prompt("Digite el número de lo que quiere realizar 😎")

}else{
    alert("Eleccion Incorrecta")
}




//Desarrollado por : Maria Juliana Saavedra Mejia - C.C.1.097.100.816