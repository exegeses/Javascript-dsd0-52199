// ubicamos elemento dentro del DOM
    var muestras = document.getElementById('muestras');

// arrays con códigos de colores y sus nombres

    var codigos = [
            '#03a', '#a00', '#ff0',
            '#0ee', '#7d2181', '#a3a',
            'magenta', '#fa8072', 'aquamarine'
    ];
    var colores = [
            'azul', 'rojo', 'amarillo',
            'celeste', 'purpura', 'violeta',
            'magenta', 'salmon', 'aguamarina'
    ];

    var cantidad = codigos.length;
    var contenido = '';

    for( var i=0; i<cantidad; i++ )
    {
        contenido += '<span style="background-color: '+codigos[i]+'" class="item"></span> '+colores[i]+'\n' +
            '            <br>';
    }

    muestras.innerHTML = contenido;