import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../../Modulo-2/25enero/app-ecomerce/src/store/slices/poducts.slice';
import { getApiThunk, setConsumo } from '../store/slices/consumoApi.slice';
import { setContador } from '../store/slices/contador.slice';
import { getPokemonsThunk } from '../store/slices/pokemons.slice';

const Acciones = () => {

  const contador = useSelector(state => (state.contador))
 
  const dispatch = useDispatch();

  dispatch(setContador(100))

  useEffect(() => {
    dispatch(getApiThunk())
  },[])

  return (
    <div>
      <h1>{contador}</h1>
    </div>
  );
};

export default Acciones;