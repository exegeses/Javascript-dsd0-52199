    //mostrar fecha formato: Lunes 03/05/2021

    //ubicamos elemento dentro del DOM
    var txt = document.getElementById('txt');

    //creamos objeto de fecha
    var fecha = new Date();

    //obtenemos día de la semama | del 0 al 6
    var diaSemana = fecha.getDay();
    switch( diaSemana ){
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miércoles';
            break;
        case 4:
            diaSemana = 'Jueves';
            break;
        case 5:
            diaSemana = 'Viernes';
            break;
        default:
            diaSemana = 'Sábado';
            break;
    }

    //obtenemos dia del mes de 1 al 31
    var diaMes = fecha.getDate();
        if( diaMes < 10 ){
            diaMes = '0' + diaMes;
        }
    //obtenemos número del mes actual
    var mes = fecha.getMonth()+1;
        if( mes < 10 ){
            mes = '0' + mes;
        }
    //obtenemos el año actual
    var anio = fecha.getFullYear();

    // escribimos dentro del span
    txt.innerText = diaSemana+' '+diaMes+'/'+mes+'/'+anio;


/*
    if( diaSemana == 0 ){
        diaSemana = 'Domingo';
    }else if( diaSemana == 1 ){
        diaSemana = 'Lunes';
    }else if( diaSemana == 2 ){
        diaSemana = 'Martes';
    }else if( diaSemana == 3 ){
        diaSemana = 'Miércoles'
    }else if( diaSemana == 4 ){
        diaSemana = 'jueves';
    }
*/

/*
    switch ( varibleTestigo ){
        case x:
            algo;
            break;
    }
*/