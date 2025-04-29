import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      border="primary"
      className={`mx-auto my-3 ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(o => !o)}
      style={{ cursor: 'pointer' }}
    >
      <Card.Header>{character.name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={character.image} alt={character.name} />
        <Card.Text>
          <strong>Especie:</strong> {character.species}<br/>
          <strong>Estado:</strong> {character.status}<br/>
          <strong>Género:</strong> {character.gender}<br/>
          <strong>Ubicación:</strong> {character.location.name}<br/>
          <strong>Origen:</strong> {character.origin.name}<br/>
          <strong>Tipo:</strong> {character.type || 'N/A'}<br/>
          <strong>Fecha:</strong> {new Date(character.created).toLocaleDateString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
