import React from 'react';
import Pokemon from '../services/pokemon';
import { get } from 'lodash';

class PokemonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    Pokemon.getPokemon(window.location.search.substring(39, window.location.search.length-1)).then((response) => {
      this.setState({ pokemon: response.data });
    }).catch((error) => alert(error));
  }

  render() {
    const pokemon = this.state.pokemon;
    console.log(pokemon)
    return (
      <div>
        <h1>#{pokemon.id} - {pokemon.name}</h1>
        <img src={get(pokemon, 'sprites.front_default', '')} alt='' />
        <img src={get(pokemon, 'sprites.front_shiny', '')} alt='' />
        {pokemon.sprites && pokemon.sprites.back_default && <img src={get(pokemon, 'sprites.back_default', '')} alt='' />}
        {pokemon.sprites && pokemon.sprites.back_shiny && <img src={get(pokemon, 'sprites.back_shiny', '')} alt='' />}
      </div>
    );
  }

}

export default PokemonContainer;