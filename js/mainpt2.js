let btnCalifEjer1 = document.getElementById("btnCalifEjer1");
let btnCalifEjer2 = document.getElementById("btnCalifEjer2");
let btnCalifEjer6 = document.getElementById("btnCalifEjer6");

btnCalifEjer1.addEventListener("click", function (event) {
    event.preventDefault();// Elimina sus acciones a realizar por default

    let numInicial = document.getElementById("btnCalifEjer1");

    let numMax = parseInt(numInicial[0]);
    for (let i = 0; i < numInicial.length; i++) {
        if (parseInt(numInicial[i]) > numMax) {
            numMax = parseInt(numInicial[0]);
        }

    }
    let resultado = document.getElementById("alertaResultado1");
    //resultado.innerHTML = calificacion(score);
    resultado.innerHTML = "El numero mas grande es: " + numMax; //iner coy a meter esta info adentro del html, en la etiqueta sel.


});

btnCalifEjer2.addEventListener("click", function (event) {
    event.preventDefault();// Elimina sus acciones a realizar por default

    let numInicial2 = document.getElementById("btnCalifEjer2");

    let numMin2 = parseInt(numInicial2[0]);
    for (let i = 0; i < numInicial2.length; i++) {
        if (parseInt(numInicial2[i]) < numMin2) {
            numMin2 = parseInt(numInicial2[0]);
        }

    }
    let resultado2 = document.getElementById("alertaResultado2");
    //resultado.innerHTML = calificacion(score);
    resultado2.innerHTML = "El numero mas grande es: " + numMin2 + numInicial2; //iner coy a meter esta info adentro del html, en la etiqueta sel.


});

/*

btnMult33.addEventListener("click", function (event) {
    event.preventDefault();// Elimina sus acciones a realizar por default


    let numero = document.getElementById("btnMult3");
    let resultado = document.getElementById("alertaResultado4");
    if ((numero % 3) == 0) {
       resultado.innerHTML = "es multiplo de 3 "  
    } else {
        resultado.innerHTML = "no es multiplo de 3 " 
    }
});*/


let numero = parseInt(document.getElementById("btnMult3").value);
function calificacion(numero){
    if ((numero % 3) == 0) {
        return "Es multiplo de 3";
    }else {
        return "No es multiplo de 3";
    }
}//get score*/

let btnMult3 = document.getElementById("btnMult3");

btnMult3.addEventListener("click", function (event){
    event.preventDefault();// Elimina sus acciones a realizar por default
    let n1 = parseInt(document.getElementById("calf").value); //parseInt pasara los datos a entero
    let resultado = document.getElementById("alertaResultado4");
    

    resultado.innerHTML = "Su numero es " + calificacion(numero); //iner coy a meter esta info adentro del html, en la etiqueta sel.
    document.getElementById("calf").focus();// llevar el campo a ese campo
    document.getElementById("calf").select(); // selecciono el campo 

});


btnCalifEjer6.addEventListener("click", function (event) {
    event.preventDefault();// Elimina sus acciones a realizar por default

    let numInicial = document.getElementById("btnCalifEjer1");

    let numMax = parseInt(numInicial[0]);
    for (let i = 0; i < numInicial.length; i++) {
        if (parseInt(numInicial[i]) > numMax) {
            numMax = parseInt(numInicial[0]);
        }

    }
    let resultado = document.getElementById("alertaResultado1");
    //resultado.innerHTML = calificacion(score);
    resultado.innerHTML = "El numero mas grande es: " + numMax; //iner coy a meter esta info adentro del html, en la etiqueta sel.


});