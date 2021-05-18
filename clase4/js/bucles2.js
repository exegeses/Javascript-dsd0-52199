    var txt = document.getElementById('txt');

    var italianos = [
                        'Masseratti', 'Pagani',
                        'Lambirghini', 'Ferrari',
                        'Alfa Romeo', 'Lancia',
                        'Abarth', 'Mazzanti',
                        'Fornasari', 'Bugatti'
                    ];
    var n = 0;
    var cantidad = italianos.length;
    var marca = '';
    while( n < cantidad ){
        marca = marca + '<li>'+ italianos[n] +'</li>';
        n++;
    }
    txt.innerHTML = marca;