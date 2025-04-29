
// components/ButtonComponent.js
import Button from 'react-bootstrap/Button';
import React from 'react';
import './ButtonComponent.css'

export const ButtonComponent = ({ onClick, variant = 'primary'}) => {
  return (
    <div className='d-flex justify-content-center'>
        <Button
          onClick={onClick}
          variant={variant}
          className="button-component"
        >
          <p className='title-button'>VER MAS PERSONAJES</p>
        </Button>
      </div>
    
  );
};