/* ---------------------Variables----------------------------- */
let seccionMensajes
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let inputLangostelvis
let inputTucapalma 
let inputPydos 

let ataqueJugador 
let ataqueEnemigo 
let btnAtaqueAgua
let btnAtaqueFuego
let btnAtaqueTierra
let btnReiniciar
let resultadoCombate = ""
let vidasJugador = 3
let vidasEnemigo = 3

/* -------------------Fin--Variables----------------------------- */

/* --------------------Funciones---------------------- */
function iniciarJuego(){
    
    seccionMensajes = document.getElementById('mensajes')
    inputHipodoge = document.getElementById('hipodoge')
    inputCapipepo = document.getElementById('capipepo')
    inputRatigueya = document.getElementById('ratigueya')
    inputLangostelvis = document.getElementById('langostelvis')
    inputTucapalma = document.getElementById('tucapalma')
    inputPydos = document.getElementById('pydos')
    
    seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'

    btnMascotaJugador = document.getElementById('btn-mascota')
    btnMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    btnAtaqueFuego = document.getElementById('btn-fuego')
    btnAtaqueFuego.addEventListener('click', ataqueFuego) 

    btnAtaqueAgua = document.getElementById('btn-agua')
    btnAtaqueAgua.addEventListener('click', ataqueAgua)

    btnAtaqueTierra = document.getElementById('btn-tierra')
    btnAtaqueTierra.addEventListener('click', ataqueTierra)

    btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.addEventListener('click', reiniciar)
}

function selecionarMascotaJugador(){

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

function verificarMascota() {
    if((inputHipodoge.checked)||(inputCapipepo.checked)||(inputLangostelvis.checked)||(inputPydos.checked)||(inputRatigueya.checked)||(inputTucapalma.checked)){
        return true
    }else {
        return false
    }
}

function ataqueFuego(){
    if(verificarMascota()){
        ataqueJugador  = 'Fuego🔥'
        ataqueAleatorioEnemigo()
    }else {
        alert("Debe selecionar una mascota antes de atacar.")
    }
}
function ataqueAgua(){
    if(verificarMascota()){
        ataqueJugador = 'Agua💦'
        ataqueAleatorioEnemigo()
    }else {
        alert("Debe selecionar una mascota antes de atacar.")
    }
}
function ataqueTierra(){
    if(verificarMascota()){
        ataqueJugador = 'Tierra🌱'
        ataqueAleatorioEnemigo()
    }else {
        alert("Debe selecionar una mascota antes de atacar.")
    }
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego🔥'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua💦'
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'Tierra🌱'
    } else {
        ataqueEnemigo = ataqueAleatorio
    }
    combate()
}

function crearMensaje(resultadoCombate){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota de tu enemigo ataco con ' + ataqueEnemigo + " " + resultadoCombate
    seccionMensajes.appendChild(parrafo)
}


function crearMensajeFinal(resultado){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultado
    seccionMensajes.appendChild(parrafo)
}

function verificarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES, GANASTE!🎉🎉')
        deshabilitarBotonesAtaque()

    } else if(vidasJugador == 0){
        crearMensajeFinal('LO SIENTO😥, PERDISTE!😭😭')
        deshabilitarBotonesAtaque()
      
    }
    mostrarReiniciar()   
}

/* function verificarVidas(){
    if(vidasJugador == 0){
        alert("GAME OVER--PERDEDOR❌")
        window.location.reload()
    } else if(vidasEnemigo == 0){
        alert("GANASTE🎉🎇🎉")
        window.location.reload()
    }
} */

function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("🦆🦆 EMPATADOS 🦆🦆")
    } else if(ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱"){
        crearMensaje("🥳🎉 GANASTE 🥳🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Agua💦" && ataqueEnemigo == "Fuego🔥"){
        crearMensaje("🥳🎉 GANASTE 🥳🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua💦"){
        crearMensaje("🥳🎉 GANASTE 🥳🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("❌ PERDISTE ❌")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    verificarVidas()
}

function mostrarReiniciar(){
    if(vidasEnemigo == 0 || vidasJugador == 0){
        seccionReiniciar.style.display = 'block'
    }
}

function reiniciar(){
    location.reload()
}

function deshabilitarBotonesAtaque(){
    btnAtaqueAgua.setAttribute('disabled', 'disabled')
    btnAtaqueFuego.setAttribute('disabled', 'disabled')
    btnAtaqueTierra.setAttribute('disabled', 'disabled')
    
}


/* function vidaPerdidaEnemigo(){
    let vidasEnemigo = document.getElementById('vidas-enemigo')
    vidasEnemigo = vidasEnemigo - 1
    return vidasEnemigo.innerHTML = vidasEnemigo
}
function vidaPerdidaJugador(){
    let vidasJugador = document.getElementById('vidas-jugador')
    vidasJugador = vidasJugador - 1
    return vidasJugador.innerHTML = vidasJugador
} */
/* --------------fin funciones-------------- */
window.addEventListener('load',iniciarJuego)






