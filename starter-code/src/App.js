import React, { Component } from 'react';
import './App.css';
import allBeers from './components/allBeers.js'
import BeerListItem from './components/allBeers.js'
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {

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

    getAllBeers(){

    }

    render() {
        return (
            <div>
                <Link to={'/allBeers'}>
                    <button>Get All Beers</button>
                </Link>

                <Switch>
                    <Route exact path="/allBeers" component={allBeers}/>
                </Switch>
                            


                <div id = "Beer-List">
                    {this.state.beers.map(element => {
                        return (<BeerListItem name={element.name} image={element.image_url} tagline={element.tagline} contributed_by={element.contributed_by} />);
                    })}              
                </div>
            </div>
        );
    }
}

export default App;

