import { useEffect, useState } from 'react';
import './App.css'

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

// Creamos un Custom Hook que recibe como parametro el nombre del pokemon
// Dependiendo el nombre del Pokemon devuelve la Imagen del Pokemon
const usePokemonSearch = (pokemonName) => {
  const [pokemonImage, setPokemonImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() =>{

    fetch(`${POKE_API_URL}${pokemonName}`)
    .then((res => res.json()))
    .then((data)=>{
      setPokemonImage(data.sprites.front_default);
      setError("");
    })

  },[pokemonName])

  return { pokemonImage, error };
}


function App() {

  // Definimos el estado inicial del nombre del pokemon
  const [pokemonName, setPokemonName] = useState("");

  // Desestructuramos el objeto devuelto por usePokemonSearch
  // para obtener pokemonImage y error
  const{pokemonImage,error} = usePokemonSearch(pokemonName);

 
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#FF4500" }}>Mini Pokédex 🔥</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Escribí el nombre de un Pokémon"
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
          marginBottom: "10px",
        }}
      />
      <br />
      <div style={{marginTop: "20px" }}>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        {pokemonImage && (
          <img
            src={pokemonImage}
            alt={pokemonName}
            style={{ marginTop: "10px", border: "2px solid #FF4500", borderRadius: "10px" }}
          />
        )}
      </div>
    </div>
  );
   
}

export default App;
