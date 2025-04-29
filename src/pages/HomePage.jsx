import React from 'react';
import './styles/HomePage.css'; // Importa el archivo CSS para estilos adicionales
import rickmortyImg from '../assets/rickandmorty.jpg'; // Importa la imagen de Rick y Morty

export const HomePage = () => {
    return (
        <div className="home-container">

            <img src={rickmortyImg} alt="Rick and Morty" className="profile-pic" />

            <h1 className="home-title">¡Bienvenido a The World API!</h1>
            <p className="home-subtitle">
                Explora un mundo de datos fascinantes de múltiples APIs en un solo lugar.
            </p>
            <p className="home-description">
                Este proyecto combina la magia de laa APIs para ofrecerte una experiencia única. 
                ¡Selecciona una opción del menú y comienza tu aventura!
            </p>
        </div>
    );
};
