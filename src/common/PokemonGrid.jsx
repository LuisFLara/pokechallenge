import React from 'react';
import { isEmpty } from 'lodash';
import {
  Link
} from "react-router-dom";

const PokemonGrid = (props) => {
  if(isEmpty(props.pokemonList)) return 'no pokemon loaded';
  return props.pokemonList.map((i, id) => (
    <div className="card col-3 d-flex">
      <div className="card-body">
        <Link to={`/pokemon?url=${i.url}`} className="text-info card-text" ><p id={id+1}>{id+1} - {i.name}</p></Link>
      </div>
    </div>
  ));
}

export default PokemonGrid;
