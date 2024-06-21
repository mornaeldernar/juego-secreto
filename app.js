let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        numeroDeUsuario > numeroSecreto ? asignarTextoElemento('p', 'El número secreto es menor') : asignarTextoElemento('p', 'El número secreto es mayor');
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    // Ya sorteamos todos los números?
    if(listaNumeroSorteados.length == numeroMaximo){
        listaNumeroSorteados=[];
    }
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    // si el numero generado esta incluido en la lista 
    if(listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();