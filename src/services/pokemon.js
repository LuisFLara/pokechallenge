import axios from 'axios';
const pokeUrl = 'https://pokeapi.co/api/v2';
class Pokemon {
  static getPokemon(id) {
    return axios.get(`${pokeUrl}/pokemon-form/${id}`);
  }
  static getPokemons(page = 0, limit = 20) {
    return axios.get(`${pokeUrl}/pokemon?offset=${page}&limit=${limit}`)
  }
}

export default Pokemon;