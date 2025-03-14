import './Experience.css'
import { ItemFooter } from '../../Ui/ItemFooter'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
export const Experince = () =>{
    return(
        <>

        
        <div className="skill-category experience-section">
        <h1 className="Studys-title">Mi Experiencia</h1>
                  <h2 className="category-title">
             
                  </h2>
                  <div className="experience-content">
                    <div className="status-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h3 className="status-title">Empezando mi Carrera Profesional</h3>
                    <p className="status-description">
                      Actualmente me encuentro en búsqueda de mi primera experiencia laboral 
                      en el campo del desarrollo de software en la industria, pero cuento con  proyectos en mi github por si te interan mis habilidades aqui puedes encontrar algunos de mis proyectos.  .
                    </p>
                    <div className="ready-badge">
                      <i className="fas fa-check-circle"></i>
                      <ItemFooter link="https://github.com/ManiCristin"text="ManiCristin" icon={FaGithub}external={true}
                        />
                    </div>
                  </div>
                </div>
        </>
    )
    }