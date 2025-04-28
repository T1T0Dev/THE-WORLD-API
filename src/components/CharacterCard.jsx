import Card from 'react-bootstrap/Card';
import React from 'react';


export const CharacterCard = ({ character }) => {
  return (
    <Card 
      border="primary" 
      className="mx-auto my-3" 
      style={{ maxWidth: '20rem', height: '35rem', border: 'solid' }}
    >
      <Card.Header 
        style={{ fontFamily: 'Arial', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center' }}
      >
        {character.name}
      </Card.Header>
      <Card.Body style={{ padding: '6px' }}>
        <Card.Img 
          style={{ borderRadius: '10px', width: '100%', height: 'auto' }} 
          variant="top" 
          src={character.image} 
          alt={character.name} 
        />
        <Card.Text style={{ marginTop: '10px', textAlign: 'left', fontSize: '0.9rem' }}>
          <strong className="character-info">Especie:</strong> {character.species}
          <br />
          <strong className="character-info">Estado:</strong> {character.status}
          <br />
          <strong className="character-info">Género:</strong> {character.gender}
          <br />
          <strong className="character-info">Ubicación:</strong> {character.location.name}
          <br />
          <strong className="character-info">Origen:</strong> {character.origin.name}
          <br />
          <strong className="character-info">Tipo:</strong> {character.type ? character.type : 'N/A'}
          <br />
          <strong className="character-info">Fecha de creación:</strong> {new Date(character.created).toLocaleDateString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
