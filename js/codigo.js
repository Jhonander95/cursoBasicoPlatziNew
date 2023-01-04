function combate(){
        while (trinfus < 3 && perdidas < 3){
            jugador = parseInt(prompt("Elige; 1 piedra, 2 papel, 3 tijera"),10)
            pc = Math.floor(Math.random()*(max-min+1)+min)
            alert("El jugador" + devolverEleccion(jugador))
            alert("El PC" + devolverEleccion(pc))
            //Duelo
            if(jugador == pc){
                alert("Empatados 🦆🦆");
            }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
                alert("GANASTE!🎉");
                trinfus = trinfus + 1
            } else {
                alert("PERDISTE!❌");
                perdidas = perdidas + 1
            }
        }
        alert("Perdiste " + perdidas + " veces")
        alert("Ganaste " + trinfus + " veces")
    }
function devolverEleccion(jugada){
        resultado = ""
        switch(jugada){
                case 1: resultado = " Eligio 🥌";
                break;
                case 2: resultado = " Eligio 🧻";
                break;
                case 3: resultado = " Eligio ✂";
                break;
                default: resultado = "Debe elegir entre 1,2 y 3";
            }
                return resultado
    }
        let min = 1
        let max = 3
        let jugador = 0
        let pc = 0  
        let trinfus = 0
        let perdidas = 0             
        combate()