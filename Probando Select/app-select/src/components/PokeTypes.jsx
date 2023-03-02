import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokeTypes = () => {

    const [pokeTypes, setPokeTypes] = useState([]);
    
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => {
            setPokeTypes(res.data.results)
        })
      }, [])
      
      console.log(pokeTypes)
      const handleSelectChange = (event) => {
          axios.get(`${event}`)
         .then(res => {
            setPokemons(res.data.moves)
          })           
        }
        
        console.log(pokemons)
    return (
        <div className='pokemons-types-container'>
            <select name="" id="" onChange={(e) => handleSelectChange(e.target.value)} >
                <option value="">Select Pokemon Type</option>
                {pokeTypes.map(type => (
                  <option key={type.url} value={type.url}>{type.name}</option>
                ))}
                
            </select>
              <>
                <ul>
                  {pokemons.map((poke) => (
                  <PokemonCard url={poke.url} key={poke.url} />
                  ))}
                 </ul>
               </>
        </div>
    );
};

export default PokeTypes;