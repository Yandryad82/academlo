import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Forms from './Forms';

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return (
    <div onClick={() => navigate(`/pokemon/${pokemon.id}`)} >
      <img src={pokemon.sprites?.other.home.front_default} alt="" />
      <h2>{pokemon.name}</h2> 
    </div>
  );
};

export default PokemonCard;