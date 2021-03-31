import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import PokemonList from './Pages/PokemonList';
import Header from './Components/Header';
import Pokemon from './Pages/Pokemon';
import Erro from './Pages/Erro';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/PokemonList" component={PokemonList}/>
              <Route exact path="/Pokemon/:id" component={Pokemon}/>
              <Route path='/Error' component={Erro}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;