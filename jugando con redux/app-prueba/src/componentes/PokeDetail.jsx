import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setContador } from '../store/slices/contador.slice';
import '../componentes/css/styles.css'

const PokeDetail = () => {
  
  const {id} = useParams();

  const [pokeDetail, setPokeDetail] = useState({});

  const [claseNone, setClaseNone] = useState(true)

  const contador = useSelector((state => state.contador))
  
  const dispatch = useDispatch();
  
  const cambioClase = () => {
    setClaseNone(!claseNone)
  }
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => setPokeDetail(res.data))
  }, [])
console.log(pokeDetail)
  
return (
    <div>
      <div className='contenedor-general'>
       <img className={`principal ${claseNone ? '' : 'none'}`} src={pokeDetail.sprites?.other.dream_world.front_default} alt="" />
       <img className={`otra ${claseNone ? 'none' : ''}`} src={pokeDetail.sprites?.other.home.front_default} alt="" />
       <h2>{(pokeDetail.name)}</h2>
      </div>
      <br />
      <img src={pokeDetail.sprites?.other.home.front_default} alt="" onClick={cambioClase} className='muestras' />
      <img src={pokeDetail.sprites?.other.home.front_shiny} alt="" onClick={cambioClase} className='muestras' />            
    </div>
  );
};

export default PokeDetail;