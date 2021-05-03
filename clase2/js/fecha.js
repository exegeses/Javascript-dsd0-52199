    //mostrar fecha formato: 03/05/2021

    //ubicamos elemento dentro del DOM
    var txt = document.getElementById('txt');

    //creamos objeto de fecha
    var fecha = new Date();

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
    txt.innerText = diaMes+'/'+mes+'/'+anio;


