import React, { Component } from 'react';
import BeerListItem from '../components/individualBeer.js'
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';


class AllBeers extends Component {

    constructor(){
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render() {
        return(
        <div id="AllBeersFullPage"> 
            <div id = "Beer-List">
            {this.state.beers.map(element => {
                return (<BeerListItem name={element.name} image={element.image_url} tagline={element.tagline} contributed_by={element.contributed_by} code={element._id} />);
            })}              
            </div>
        </div>
        )
    }

}

export default AllBeers;
