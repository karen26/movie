// Whatever you want here...

fetch('https://pelec4.herokuapp.com/movies')
    .then (resp => resp.json())
    .then(movies => {
        console.log ('MOVIES',movies);

        movies.forEach(movie => {
           movielist.append(movie.poster)
        });
    })


   