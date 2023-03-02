import { configureStore } from '@reduxjs/toolkit'
import consumoApiSlice from './slices/consumoApi.slice'
import  contadorSlice  from './slices/contador.slice'
import  pokemonSlice  from './slices/pokemons.slice'

export default configureStore({
    reducer: {
      contador: contadorSlice,
      consumoApi: consumoApiSlice,
      pokemons: pokemonSlice
    }
})
