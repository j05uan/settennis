const Calcularganador = function () {
    const Jugador1 = parseFloat(document.getElementById("Jugador1").value);
    const Jugador2 = parseFloat(document.getElementById("Jugador2").value);

    let mayor, men;
    
    if (Jugador1 > Jugador2) {
        mayor = Jugador1;
        men = Jugador2;
    } else {
        mayor = Jugador2;
        men = Jugador1;
    }

    const diferencia = mayor - men;
    let resultado = "";

    if (diferencia > 2) {
        resultado = "El Juego se Termino";
    } else if (diferencia < 2) {
        resultado = "El Juego Termino";
    } else {
        resultado = "Operador no valido";
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
