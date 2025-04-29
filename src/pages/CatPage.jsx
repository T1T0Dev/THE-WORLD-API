import React, { useState, useEffect } from 'react'
import './styles/CatPage.css'
import { CAT_ENDPOINT_RANDOM_FACT } from '../routes/routes';

export const CatPage = () => {
  const [catFact, setCatFact] = useState();
  const [catImage, setCatImage] = useState();

  const getRandomFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(({ fact }) => setCatFact(fact));
  }

  useEffect(getRandomFact, []);

  useEffect(() => {
    if (!catFact) return;

    const threeFirstWords = catFact.split(' ', 3).join(' ');

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=small&color=white&json=true`)
      .then(res => res.json())
      .then(({ url }) => setCatImage(url));
  }, [catFact]);

  return (
    <div className="cat-container">
      <h1 className="cat-title">🐾 Random Cat Fact</h1>
      {catFact && <p className="cat-fact">"{catFact}"</p>}
      {catImage && <img className="cat-img" src={catImage} alt="cat" />}
      <button className="cat-btn" onClick={getRandomFact}>Meow otra vez 🐱</button>
    </div>
  );
}
