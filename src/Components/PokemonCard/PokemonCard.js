import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PokemonCard.css';


class PokemonCard extends Component{

    constructor(props){
        super(props); 
        
        this.type = this.type.bind(this);

    }

    type(){
        
        if (this.props.pokemon.types.length > 1){
            return <h5>Types: {this.props.pokemon.types[0]} and {this.props.pokemon.types[1]}.</h5>
        } else {
            return <h5>Type: {this.props.pokemon.types[0]}.</h5>
        }
    }


    
        


    render(){

        return(
            <Link className="link" to={`/Pokemon/${this.props.pokemon.national_pokedex_number}`}>
                <div className="row">
                    <div className="column" >
                        <div className="card">

                            <h3 className="pokemonName"><b>{this.props.pokemon.name}</b></h3>
                            <h5 className="ID">Pokedex ID: {this.props.pokemon.national_pokedex_number}</h5>
                            
                            <p className="typeCard">{this.type()}</p>
                        </div>
                        <div>
                            
                            <img src={`/Sprites/${this.props.pokemon.national_pokedex_number}.png`} className="img"/>
                        </div>
                    </div>
                    
                </div>
            </Link>
        );
    }
}

export default PokemonCard;