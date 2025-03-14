import React from "react"
import './Home.css';


export const Home = () => {
  return (
    <div className="home">
      <div className="profile-container">
        
        <div className="profile-image">
     
          <img src="/src/assets/img/perfil.jpeg" alt="Foto de perfil" />
          <h2>Maria Cristina Moreno Sanchez</h2>
        </div>
        <div className="profile-content">
        <div className="profile-summary">
            <h3>Perfil Profesional</h3>
            <p>Breve descripción de tu experiencia y objetivos profesionales...</p>
          </div>
          <div className="contact-info">
          <h3>informacion de contacto</h3>
            <p><i className="fas fa-phone"></i> +57 310539926</p>
            <p><i className="fas fa-envelope"></i> manicristin11@ejemplo.com</p>
            <p><i className="fas fa-map-marker-alt"></i>montenegro quindio, Colombia</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}