function addMovie(item){

    return {
        type: "AddMovie",
        movieData: {
            movieName: item.movieName,
            moviePoster: item.moviePoster
        }
    }
}

export default addMovie