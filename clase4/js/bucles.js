//ubicar elemento dentro del DOM
    var txt = document.getElementById('txt');

    var marcas = [
                    'Samsung', 'HTC', 'Xiaomi',
                    'Huawuei', 'Alcatel', 'iPhone'
                 ];
    console.log(marcas);
    var n = 0;
    var cantidad = marcas.length;
    var frase = '';
    while( n < cantidad ){
        frase = frase + marcas[n] + '<br>';
        n++;//n=n+1;
    }
    //txt.innerText = marcas[0];
    txt.innerHTML = frase;