import { useState, useEffect } from "react";
import { POKE_API_URL } from "../routes/routes";

export const usePokemonSearch = (pokemonName) => {
  const [pokemonImage, setPokemonImage] = useState(null);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchPokemon = async () => {
        try {
          
          if (pokemonName.trim() === ""){
            setPokemonImage(null);
            setError("");
            return;
          }

          const res = await fetch(`${POKE_API_URL}${pokemonName}`);
          const data = await res.json();

          if (!data.sprites?.front_default) {
            setError("No se encontró el Pokémon. Intenta con otro nombre.");
            setPokemonImage(null);
          } else {
            setPokemonImage(data.sprites.front_default);
            setError("");
          }
        } catch (error) {
          setError("Hubo un problema al buscar el Pokémon.");
          setPokemonImage(null);
        }
      };

      fetchPokemon();
    }, 800); // espera 800ms antes de buscar

    return () => clearTimeout(timeoutId); // limpia el timeout si se vuelve a escribir
  }, [pokemonName]);

  return { pokemonImage, error };
};
