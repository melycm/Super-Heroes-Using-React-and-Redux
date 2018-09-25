import React, { Component } from 'react';
import addMovie from '../actions/addMovie'
import '../index.css'

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName:  "",
            moviePoster: "",
            product: [{
                movieName: "",
                moviePoster: ""
            }]
        }
    }

    movieNameChangedHandler(e){
        this.setState({movieName: e.target.value});
    }

    moviePosterChangedHandler(e){
        this.setState({moviePoster: e.target.value});
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>

            <input type="text"
            placeholder="Movie Name"
            onChange={this.movieNameChangedHandler.bind(this)}
            value={this.state.movieName}
            />

            <input type="text"
            placeholder="Poster Path"
            onChange={this.moviePosterChangedHandler.bind(this)}
            value={this.state.moviePoster}
            />
            
            <button
            onClick={() =>  this.props.addMovie({
                movieName: this.state.movieName,
                moviePoster: this.state.moviePoster
            })}>
                Add Movie
            </button>
        </div> 
        );
    }
}


export default AddMovie;