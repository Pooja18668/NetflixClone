let movie_id = location.pathname;


console.log( movie_id);
// fetching movie details 
fetch(`${movie_detail_http}${movie_id}?` + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {

    console.log(data);
    setupMovieInfo(data);
})

const setupMovieInfo = (data) => {
    const movieName = document.querySelector('.movie-name');
    const genres = document.querySelector('.genres');
    const des = document.querySelector('.des');
    const title = document.querySelector('title');
    const backdrop = document.querySelector('.movie-info');

    title.innerHTML = movieName.innerHTML = data.title;

    genres.innerHTML = `${data.release_data.split('-')[0]}`;
    for(let i=0; i< data.genres.length; i++){
        genres.innerHTML += data.genres[i].name;
    }
    
}