import React from 'react';
import './styles/HomePage.css'; // Importa el archivo CSS para estilos adicionales

export const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">¡Bienvenido a la PokeAPI y más!</h1>
            <p className="home-subtitle">
                Explora un mundo de datos fascinantes de múltiples APIs en un solo lugar.
            </p>
            <p className="home-description">
                Este proyecto combina la magia de la PokeAPI con otras APIs para ofrecerte una experiencia única. 
                ¡Selecciona una opción del menú y comienza tu aventura!
            </p>
        </div>
    );
};
