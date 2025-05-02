import React from "react";
import "./styles/HomePage.css"; // Importa el archivo CSS para estilos adicionales

import { apiLinks } from "../data/apiLinks";

//Hooks
import { useNavigate } from "react-router-dom";



export const HomePage = () => {
  const navigate = useNavigate(); // Hook para la navegación

    
  return (
    <div className="home-container">
      <div className="api-icons-container">
        {apiLinks.map(({ img, alt, route }, index) => (
          <img
            key={index}
            src={img}
            alt={alt}
            className="profile-pic"
            onClick={() => navigate(route)}
            style={{ cursor: "pointer" }}
            title={alt}
          />
        ))}
      </div>

      <h1 className="home-title">¡Bienvenido a The World API!</h1>
      <p className="home-subtitle">
        Explora un mundo de datos fascinantes de múltiples APIs en un solo
        lugar.
      </p>
      <p className="home-description">
        Este proyecto combina la magia de laa APIs para ofrecerte una
        experiencia única. ¡Selecciona una opción del menú y comienza tu
        aventura!
      </p>
    </div>
  );
};
