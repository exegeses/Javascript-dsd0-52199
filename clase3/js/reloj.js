    var txt = document.getElementById('txt');

// generamos funcion/es de control
    function reloj()
    {
        //creamos un objeto de fecha
        var fecha = new Date();
        //obtenemos horas
        var horas = fecha.getHours();
        //obtenemos minutos
        var minutos = fecha.getMinutes();
            if( minutos < 10 ){
                minutos = '0' + minutos;
            }
        //obtenemos segundos
        var segundos = fecha.getSeconds();
            if ( segundos<10 ) {
                segundos = '0' + segundos;
            }

        //imprimimos
        txt.innerText = horas+':'+minutos+':'+segundos;
    }

//invocamos la función
    reloj();
//actualizamos ejecución de la función
    setInterval( reloj, 1000 );