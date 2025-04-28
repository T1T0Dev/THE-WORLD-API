
// components/ButtonComponent.js
import Button from 'react-bootstrap/Button';
import React from 'react';

export const ButtonComponent = ({ onClick, variant = 'primary', children }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      style={{
        margin: '10px',
        width: '100%',
        background: 'black',
        color: 'white',
        border: '2px solid red',
      }}
    >
      {children}
    </Button>
  );
};