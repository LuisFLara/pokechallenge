import React from 'react';
import { isEmpty } from 'lodash';
import {
  Link
} from "react-router-dom";

const getIdFromUrl = (url) => {
  return url.substring(34, url.length-1);
}

const PokemonGrid = (props) => {
  if(isEmpty(props.pokemonList)) return 'no pokemon loaded';
  return props.pokemonList.map((i, id) =>{
    const pokemonId= getIdFromUrl(i.url);
    return(
     <div className="card col-3 d-flex">
       <div className="card-body">
         <Link to={`/pokemon/${pokemonId}/`} className="text-info card-text" ><p id={id}>{pokemonId} - {i.name}</p></Link>
       </div>
     </div>
   );
  });
}

export default PokemonGrid;
