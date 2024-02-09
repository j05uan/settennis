const Calcularganador = function () {
    const Jugador1 = parseFloat(document.getElementById("Jugador1").value);
    const Jugador2 = parseFloat(document.getElementById("Jugador2").value);

    let men= Jugador1
    let mayor=function(){
        if (Jugador1 > Jugador2);
            may=Jugador1
            men=Jugador2
        }

    diferencia=may-men

    let resultado = "" ;

    switch (diferencia) {
        case diferencia>2:
            resultado = "El Juego se Termino";
            break;
        case diferencia<2:
            resultado =  "El Juego Termino";
            break;
        default:
            resultado="Operador no valido";
    }

    document.getElementById("resultado").innerHTML="Resultado: "+resultado;





}
