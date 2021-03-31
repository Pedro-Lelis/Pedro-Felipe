import React, {Component} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import PokemonArray from '../../constants/PokemonsArray';
class PokemonList extends Component{


    render(){
        return(
            <div className="pokemons">

                {PokemonArray.map(pokemon => {
                    return(<PokemonCard pokemon={pokemon}/>)
                })}
            </div>
        );
    }
}

export default PokemonList;