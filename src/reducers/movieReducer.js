function movieReducer(state, action) {
    if (state === undefined) {
        return { 
            movieList: [
                {
                    movieName: "Coco",
                    moviePoster: 'https://images-na.ssl-images-amazon.com/images/I/81FZFvGhSVL._SY679_.jpg'
                },
                {
                    movieName: "The Devil Wears Prada",
                    moviePoster: 'https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg'
                },
                {
                    movieName: "Mamma Mia!",
                    moviePoster: 'https://images-na.ssl-images-amazon.com/images/I/71QmHTRLllL._SY606_.jpg'
                }
            ]
            
        };
    }

    switch(action.type){
        case "addMovie":
        return{
            ...state,
            movieList: [
                ...state.movieList,
                {
                    movieName: action.movieData.movieName,
                    moviePoster: action.movieData.moviePoster
                }
            ] 
        }
        
        case "deleteMovie":

            const updatedArray =  state.movieList.filter( product =>
                {
                    return product.movieName !== action.movieData.movieName
                }
            )

            return{
                ...state,
                movieList: updatedArray

            }
        default:
            return (state)
    }
}

export default movieReducer;