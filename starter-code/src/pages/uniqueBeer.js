import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';


class uniqueBeer extends Component {

    constructor(){
        super()
        this.state = {
            randomBeer: {}
        }
    }

    // Don't mess with this name
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/:id")
        .then(response => {
            this.setState({uniqueBeer: response.data})
        })
    }

    render() {
        return(
        <div id="uniqueBeerFullPage"> 
            <div id = "Beer-List">
                <p>{this.state.uniqueBeer.name}</p>
                <img src={this.state.uniqueBeer.image_url} alt="Alt-Text"></img>
                <p>{this.state.uniqueBeer.tagline}</p>
                <p>{this.state.uniqueBeer.contributed_by}</p>
            </div>
        </div>
        )
    }

}

export default uniqueBeer;