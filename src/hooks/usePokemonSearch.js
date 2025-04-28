
import {useState,useEffect} from 'react'
import {POKE_API_URL} from '../routes/routes'

// Creamos un Custom Hook que recibe como parametro el nombre del pokemon
// Dependiendo el nombre del Pokemon devuelve la Imagen del Pokemon
export const usePokemonSearch = (pokemonName) => {
  const [pokemonImage, setPokemonImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() =>{

    try
    {
        fetch(`${POKE_API_URL}${pokemonName}`)
        .then((res => res.json()))
        .then((data)=>
        {
          setPokemonImage(data.sprites.front_default);
          setError("");

        })
    }
    catch(error)
    {
      setError(error.message);
      setPokemonImage(null);
    }

  },[pokemonName])

  return { pokemonImage, error };
}
