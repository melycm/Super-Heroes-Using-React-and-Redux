import React, { Component } from 'react';
import AddMovie from './AddMovie'
import '../index.css'

class Movies extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                <img src="https://mbtskoudsalg.com/images/movie-ticket-clipart-png-8.png" width="15%"/>
            </div>
            <br />
            <AddMovie addMovie={this.props.onAddMovie}/>
            <br />
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {
                    this.props.movieList.map(movieData =>{
                    return <div ><img src={movieData.moviePoster} style={{width: '200px'}}/> <br />
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {movieData.movieName} <br />
                            <button onClick={() => {this.props.onDeleteMovie(movieData)}}>X</button></div>
                    </div>
                    })
                }
                </div>
            </div>
        );
    }
}

export default Movies;