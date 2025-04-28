import React from 'react'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { useState } from 'react';

export const PokePage = () => {

    // Definimos el estado inicial del nombre del pokemon
  const [pokemonName, setPokemonName] = useState("");

    // Desestructuramos el objeto devuelto por usePokemonSearch
    // para obtener pokemonImage y error
  const{pokemonImage,error} = usePokemonSearch(pokemonName);

  return (
    <div>
      <h1>Mini Pokédex 🔥</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Escribí el nombre de un Pokémon"
        
      />
      <br />
      <div>
        {error && <p>{error}</p>}
        {pokemonImage && (
          <img
            src={pokemonImage}
            alt={pokemonName}
          />
        )}
      </div>
    </div>

  )
}
