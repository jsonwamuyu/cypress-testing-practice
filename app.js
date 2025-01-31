document.getElementById('load-movies').addEventListener('click', loadMovies)

async function loadMovies(){
    const resp = await fetch('/api/movies')
    if(!resp.ok) return
    const movies = resp.json()

    // Loop thro the movies
    movies.forEach(movie => {
        const 
    });
}