import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setPokemons: (state, action) => {
          const pokemons = action.payload
          return pokemons
        }
        

    }
})

export const getPokemonsThunk = () => (dispatch) => {
    
    return axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40")
        .then((res) => dispatch(setPokemons(res.data.results)))
        
}

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
