

// Called whe the page is loaded
window.onload = () =>  {
    getOriginals();
    getTrendingNow();
    getTopRated();
    getActionMovies();
    getComedyMovies();
    getFantasyMovies();
}

function showMovies(mov, element_selector, path_type ){
    var moviesEl = document.querySelector(element_selector);
    for(var m of mov.results){
        var image = `
            <img src="https://image.tmdb.org/t/p/original${m[path_type]}"></img>
        `
        moviesEl.innerHTML += image;
    }
}

function fetchMovies(url, element_selector, path_type ){
    fetch(url)
    .then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    })
    .then((data)=>{
        showMovies(data, element_selector, path_type);
    })
    .catch((error_data)=>{
        console.log(error_data);
    })
}

function getOriginals(){
    var url = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
    fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow(){
    var url = "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045"
    fetchMovies(url, '#trending', 'backdrop_path' );
}

function getTopRated(){
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
    fetchMovies(url, "#top_rated", "backdrop_path");
}

function getActionMovies(){
    var url = "https://api.themoviedb.org/3/movie/10759/similar?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
    fetchMovies(url, "#action_movies", "backdrop_path");
}

function getComedyMovies(){
    var url = "https://api.themoviedb.org/3/movie/35/similar?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
    fetchMovies(url, "#comedy_movies", "backdrop_path");
}

function getFantasyMovies(){
    var url = "https://api.themoviedb.org/3/movie/18/similar?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
    fetchMovies(url, "#fantasy_movies", "backdrop_path");
}