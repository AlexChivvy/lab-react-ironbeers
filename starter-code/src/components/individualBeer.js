import React from "react";
import { Link, Switch, Route } from 'react-router-dom';

const BeerListItem = props => {
    return (
<div id="individual-beer">
    <Link to={props.code}>
        <div id="individual-left">
            <p>{props.image}</p>
        </div>
        <div id="individual-right">
            <h1>{props.name}</h1>
            <h2>{props.tagline}</h2>
            <p><b>Created by: </b>{props.contributed_by}</p>
            <img src={props.image} alt="Alt-Text"></img>
            <hr />                
        </div>
    </Link>
</div>
    )
} 

export default BeerListItem;
