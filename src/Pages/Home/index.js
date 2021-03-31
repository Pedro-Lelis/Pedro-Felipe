import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Home.css"


class Home extends Component{
    render(){
        return(
            <div className='containerHome'>
                <h1>Welcome trainer!</h1>
                <Link to='/PokemonList' className="linkText">Click here to see first generation pokemons.</Link>
            </div>
        );
    }
}


export default Home;