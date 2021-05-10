//ubicamos elemento dentro del DOM
    var caja = document.getElementById('caja');

// creamos funciones de control
    function ocultar()
    {
        caja.style.display = 'none';
    }
    function mostrar()
    {
        caja.style.display = 'block';
    }
    function mostrarOcultar()
    {
        if( caja.style.display == 'none' ){
            //caja.style.display = 'block';
            mostrar();
        }
        else{
            //caja.style.display = 'none';
            ocultar();
        }
    }