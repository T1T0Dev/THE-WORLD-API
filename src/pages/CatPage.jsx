import React from 'react'
// Endpoint para obtener un random fact
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
import { useState, useEffect } from 'react';



export const CatPage = () => {

    const [catFact, setCatFact] = useState();

  const [catImage, setCatImage] = useState();
  
  const getRandomFact = () => {
    fetch (CAT_ENDPOINT_RANDOM_FACT)
    .then ((res) => res.json())
    .then ((data) => {
      // Desestructurando el objeto data
      const { fact } = data;
      setCatFact(fact);
    })
  }

  // Se ejecuta una vez al cargar la página
  useEffect(getRandomFact,[]);


  //Para recuperar la imagen cada vez que tengamos un catFact nuevo
  useEffect(() => {

    // Si no hay catFact, no se ejecuta el código
    if(!catFact) return

    //Toma las tres primeras palabras del catFact
    const threeFirstWords = catFact?.split(' ', 3).join(' ');
    console.log(threeFirstWords);


    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=small&color=white&json=true`)
    .then((res) => res.json())
    .then((data) => {
      const {url} = data;
      setCatImage(url);
    })
  }, [catFact]);


  return (

    <div>
      <h1>Random Cat Fact</h1>
      {catFact && <h2>{catFact}</h2>}
      {catImage && <img style={{ width: '50%' }} src={catImage} alt="cat" />}
      <br></br>
      <button onClick={getRandomFact}>Nueva Factura </button>
    </div>

  )
}