import React, { Component } from 'react';
import './App.css';
import allBeers from './pages/allBeers.js'
import randomBeer from './pages/randomBeer.js'
import uniqueBeer from './pages/uniqueBeer.js'
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Link to={'/'}>
                    <button>Home</button>
                </Link>
                
                <Link to={'/all-beers'}>
                    <button>Get All Beers</button>
                </Link>

                <Link to={'/random-beer'}>
                    <button>Random Beer</button>
                </Link>

                <Switch>
                    <Route exact path="/all-beers" component={allBeers}/>
                </Switch>

                <Switch>
                    <Route exact path="/random-beer" component={randomBeer}/>
                </Switch>

                <Switch>
                <Route exact path="/:id" component={uniqueBeer}/>
                </Switch>
                        
                
            </div>
        );
    }
}

export default App;
