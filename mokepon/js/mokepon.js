/* ---------------------Variables----------------------------- */
let btnMascotaJugador = document.getElementById('btn-mascota')
let btnAtaqueFuego = document.getElementById('btn-fuego')
let btnAtaqueAgua = document.getElementById('btn-agua')
let btnAtaqueTierra = document.getElementById('btn-tierra')
let seccionMensajes = document.getElementById('mensajes')

let ataqueJugador 
let ataqueEnemigo 
let resultadoCombate = ""
/* -------------------Fin--Variables----------------------------- */

/* --------------------Funciones---------------------- */
function selecionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    let mascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        mascotaJugador.innerHTML = ' Hipodoge'
    } else if(inputCapipepo.checked){
        mascotaJugador.innerHTML = ' Capipepo'
    } else if(inputRatigueya.checked){
        mascotaJugador.innerHTML = ' Ratigueya'
    } else if(inputLangostelvis.checked){
        mascotaJugador.innerHTML = ' Langostelvis'
    } else if(inputTucapalma.checked){
        mascotaJugador.innerHTML = ' Tucapalma'
    } else if(inputPydos.checked){
        mascotaJugador.innerHTML = ' Pydos'
    } else {
        alert("Debe seleccionar una masota ")
    }

    selecionarMascotaEnemigo()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selecionarMascotaEnemigo (){
    let ataqueAleatorio = aleatorio(1,6)
    let mascotaEnemigo = document.getElementById('mascota-enemigo')


    if(ataqueAleatorio == 1){
        mascotaEnemigo.innerHTML = ' Hipodoge'
    } else if(ataqueAleatorio == 2){
        mascotaEnemigo.innerHTML = ' Capipepo'
    } else if(ataqueAleatorio == 3){
        mascotaEnemigo.innerHTML = ' Ratigueya'
    } else if(ataqueAleatorio == 4){
        mascotaEnemigo.innerHTML = ' Langostelvis'
    } else if(ataqueAleatorio == 5){
        mascotaEnemigo.innerHTML = ' Tucapalma'
    } else if(ataqueAleatorio == 6){
        mascotaEnemigo.innerHTML = ' Pydos'
    } else {
        mascotaEnemigo.innerHTML = ataqueAleatorio
    }
}

function ataqueFuego(){
    ataqueJugador  = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'Tierra'
    } else {
        ataqueEnemigo = ataqueAleatorio
    }
    combate()
    crearMensaje()
}

function crearMensaje(){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota de tu enemigo ataco con ' + ataqueEnemigo + " " + resultadoCombate
    seccionMensajes.appendChild(parrafo)
}

function combate(){
    if(ataqueJugador == ataqueEnemigo){
        resultadoCombate = "EMPATADOS 🦆🦆"
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        resultadoCombate = "GANASTE 🥳🎉"
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        resultadoCombate = "GANASTE 🥳🎉"
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        resultadoCombate = "GANASTE 🥳🎉"
    } else {
        resultadoCombate = "PERDISTE❌"
    }
}

/* --------------fin funciones-------------- */

btnMascotaJugador.addEventListener('click', selecionarMascotaJugador)
btnAtaqueFuego.addEventListener('click', ataqueFuego)                           
btnAtaqueAgua.addEventListener('click', ataqueAgua)
btnAtaqueTierra.addEventListener('click', ataqueTierra)

