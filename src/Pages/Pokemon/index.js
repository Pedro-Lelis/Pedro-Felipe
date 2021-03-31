import React, {Component} from 'react';
import PokemonArray from '../../constants/PokemonsArray';
import {withRouter} from 'react-router-dom';
import PokemonSpecific from '../../Components/PokemonSpecific/PokemonSpecific'; 


class Pokemon extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokemon: undefined
        }
        
        this.teste = this.teste.bind(this);
    }
    

    componentWillMount(){
        this.teste();
    }

    teste(){
        const pokemonId = this.props.match.params.id;
        let pokemon = PokemonArray.find((poke) => {
            
            return(poke.national_pokedex_number == pokemonId);
            
        })
        if(!pokemon){

            return(this.props.history.push("/Error"));
        }

        this.setState({pokemon: pokemon});
        console.log(pokemon);
        
        
    }
    
    

    render(){



        return(
            <div>
                {this.state.pokemon && <PokemonSpecific pokemon={this.state.pokemon}/>}
            </div>
        );
    
    }

}

export default withRouter(Pokemon);