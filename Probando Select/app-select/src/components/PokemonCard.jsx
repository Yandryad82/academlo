import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({});

useEffect(() => {
    axios.get(url)
    .then(res => setPokemon(res.data))
}, [])

console.log(pokemon)
    return (
        <div>
           {url}
           <h2>{pokemon.name}</h2>
            
        </div>
    );
};

export default PokemonCard;