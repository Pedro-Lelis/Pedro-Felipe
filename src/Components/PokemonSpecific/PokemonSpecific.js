import React, { Component } from 'react';
import Pokemon from '../../Pages/Pokemon';
import './PokemonSpecific.css';


class PokemonSpecific extends Component {

    constructor(props) {
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

  render() {

      return (
        
          <div className="container">
            <div className="title">
              <h3>Pokedex ID: {this.props.pokemon.national_pokedex_number}</h3>
              <h3 className="type">{this.type()}</h3>
            </div>
            
            <div className="StatsAndImg">
              <div className="nameAndSprite">
                <h1>{this.props.pokemon.name}</h1>
                <img src={`/Sprites/${this.props.pokemon.national_pokedex_number}.png`} className="imgSpecific"/>
              </div>
              
              <div className="stats">
                <div className="hp"> 
                  <h3>Min hp: {this.props.pokemon.baseStats.hp}</h3>
                  <h3>Max hp: {this.props.pokemon.maxStats.maxHp}</h3>
                </div>
                
                <div className="attack"> 
                  <h3>Min atk: {this.props.pokemon.baseStats.attack}</h3>
                  <h3>Max atk: {this.props.pokemon.maxStats.maxAtack}</h3>
                </div>
                

                <div className="defense"> 
                  <h3>Min def: {this.props.pokemon.baseStats.defense}</h3>
                  <h3>Max def: {this.props.pokemon.maxStats.maxDefense}</h3>
                </div>

                <div className="speed"> 
                  <h3>Min spd: {this.props.pokemon.baseStats.speed}</h3>
                  <h3>Max spd: {this.props.pokemon.maxStats.maxSpeed}</h3>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>{this.props.pokemon.description}</h4>
            </div>
          </div>
        
      );
  }
}

export default PokemonSpecific;

