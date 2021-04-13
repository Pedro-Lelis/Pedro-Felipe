import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./erro.css";

class Erro extends Component{
    render(){
        return(
            <div className="containerError">
                <h1>Sorry, wrong way...</h1>
                <Link to='/PokemonList' className="errorLink"> Back to the pokemon list.</Link>
            </div>
        );
    }
}

export default Erro;