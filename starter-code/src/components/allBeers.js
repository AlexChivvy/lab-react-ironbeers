import React from "react";

const BeerListItem = props => {
    return (
<div id="individual-beer">
    <div id="individual-left">
        <p>{props.image}</p>
    </div>
    <div id="individual-right">
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
        <p><b>Created by: </b>{props.contributed_by}</p>
        <p> {props.image}</p>
        <hr />                
    </div>
</div>
    )
} 

export default BeerListItem;
