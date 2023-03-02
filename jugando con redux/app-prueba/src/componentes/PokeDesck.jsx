import { bindActionCreators } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiThunk } from '../store/slices/consumoApi.slice';
import pokemonsSlice, { getPokemonsThunk } from '../store/slices/pokemons.slice';
import PokemonCard from './PokemonCard';

const PokeDesck = () => {
    
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => (state.pokemons))

    const consumoApi = useSelector((state) => (state.consumoApi))
                 
    useEffect(() => {
        dispatch(getPokemonsThunk())
        dispatch(getApiThunk())
      }, [])
           
    
    return (
        <div>
          <ul className='container-pokedex'>
            {pokemons.map(pokemon => (
                <PokemonCard
                url={pokemon.url}
                key={pokemon.url}
                />
            ))}
          </ul>
          
        </div>
    );
};

export default PokeDesck;