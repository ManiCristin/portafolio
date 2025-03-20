import React from "react"
import './Home.css';



export const Home = () => {
  return (
    <div className="home">
      <div className="profile-container">
        
        <div className="profile-image">
     
          <img src="./src/assets/img/perfil.jpg" alt="Foto de perfil" />
          <h2>Maria Cristina Moreno Sanchez</h2>
        </div>
        <div className="profile-content">
        <div className="profile-summary">
            <h3>Perfil Profesional</h3>
            <p>soy una desarolladora de software con 2 años de experiencia tecnica en el desarrollo 
              enfocada en el desarrollo de aplicaciones web me conecnto con el mundo de la tecnologia
               desde 2020 y me apasiona la programacion aunque no cuento con experiencia laboral en el mundo
                de la programacion estoy en busca de nuevos desafios y oportunidades para crecer profesionalmente
                 y adquirir experiencia en el mundo de la programacion</p>
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