import React from 'react';
import '../assets/styles/App.css';
import Pokemon from '../services/pokemon';
import PokemonGrid from './PokemonGrid';
import PokemonContainer from './PokemonContainer'
import InfiniteScroll from 'react-infinite-scroll-component';
import { isEmpty } from 'lodash';
import {
  Switch,
  Route,
} from "react-router-dom";

class ScrollList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      page: 0,
      limit: 50,
      hasNext: true
    };
    this.getPokemonList = this.getPokemonList.bind(this);
    this.setLimit = this.setLimit.bind(this);

  }
  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList(){
    Pokemon.getPokemons(this.state.page, this.state.limit).then((response) => {
      this.setState({
        pokemonList: this.state.pokemonList.concat(response.data.results),
        page: this.state.page + 50,
        hasNext: !isEmpty(response.data.next)
      });
    }).catch((error) => {
      alert("Error on getting pokemon list");
      this.setState({ pokemonList: this.state.pokemonList });
    });
  }

  setLimit(limit) {
    this.setState({ limit })
  }

  render() {
    return (
      <Switch>
        <Route path={'/:pokemonId'}>
          <PokemonContainer/>
        </Route>
        <Route path='/'>
          <div className="App">
            <h1>PokeDex</h1>
            <InfiniteScroll
              dataLength={this.state.pokemonList.length} //This is important field to render the next data
              next={ this.getPokemonList }
              hasMore={ this.state.hasNext }
              loader={<h4>Loading...</h4>}
              endMessage={
                <p>
                  <b>You have seen all pokemons!(until now...)</b>
                </p>
              }>
                <div className="row m-1">
                  <PokemonGrid pokemonList={this.state.pokemonList} />
                </div>
            </InfiniteScroll>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default ScrollList;