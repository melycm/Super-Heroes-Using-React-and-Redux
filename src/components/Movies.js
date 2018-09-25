import React, { Component } from 'react';
import AddMovie from './AddMovie'

class Movies extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                <h1 >Movies</h1>
            </div>
            <AddMovie />
            <br />
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    this.props.movieList.map(movieData =>{
                    return <div><img src={movieData.moviePoster} style={{width: '20%'}}/> <br />
                            {movieData.movieName} <br />
                            <button onClick={() => {this.props.onDeleteMovie(movieData)}}>X</button></div>
                    })
                }
                </div>
                {/* <div style={{display: 'flex', flexDirection: 'column'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" />
                    <h1> Coco </h1>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" />
                    <h1> Coco </h1>
                </div> */}
            </div>
            </div>
        );
    }
}

export default Movies;