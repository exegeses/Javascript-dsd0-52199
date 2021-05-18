    var fotos = document.getElementById('fotos');
    var nombres = [
                    'arq1.jpg', 'arq2.jpg', 'arq3.jpg',
                    'dancer1.jpg', 'dancer2.jpg', 'dancer3.jpg',
                    'moda1.jpg', 'moda2.jpg', 'moda3.jpg'
                ];
    var n = 0;
    var cantidad = nombres.length;
    var contenido = '';

    while( n < cantidad ){
        contenido = contenido + '<article>\n' +
            '            <img src="imagenes/'+nombres[n]+'">\n' +
            '            <h2>Nombre de la imagen</h2>\n' +
            '        </article>'
        n++;
    }

    fotos.innerHTML = contenido;