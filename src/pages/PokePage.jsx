import React from 'react'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { useState } from 'react';
import './styles/PokePage.css'; // Importa el archivo CSS para estilos adicionales

export const PokePage = () => {

    // Definimos el estado inicial del nombre del pokemon
  const [pokemonName, setPokemonName] = useState("");

    // Desestructuramos el objeto devuelto por usePokemonSearch
    // para obtener pokemonImage y error
  const{pokemonImage,error} = usePokemonSearch(pokemonName);

  return (
    <div className='pokedex-wrapper'>
      <div className='pokedex-container'>
        <h1 className='title-poke'>Mini Pokédex 🔥</h1>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Escribí el nombre de un Pokémon"
          className='input-poke'
          
        />
        <br />
        <div>
          {error && <p className='error-poke'>{error}</p>}
          {pokemonImage && (
            <img
              src={pokemonImage}
              alt={pokemonName}
              className='image-poke'
            />
          )}
        </div>
      </div>
    </div>

  )
}
