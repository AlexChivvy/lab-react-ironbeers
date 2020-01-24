import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';


class randomBeer extends Component {

    constructor(){
        super()
        this.state = {
            randomBeer: {}
        }
    }

    // Don't mess with this name
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            this.setState({randomBeer: response.data})
        })
    }

    render() {
        return(
        <div id="RandomBeerFullPage"> 
            <div id = "Beer-List">
                <p>{this.state.randomBeer.name}</p>
                <img src={this.state.randomBeer.image_url} alt="Alt-Text"></img>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.contributed_by}</p>
            </div>
        </div>
        )
    }

}

export default randomBeer;