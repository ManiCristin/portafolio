import React from 'react'
        import './Skils.css'
        import {ItemSkils} from '../../Ui/ItemSkils'
        
export const Skils = () =>{
    return(
        <> 
        
            <div className="skills-container">
              <h1 className="skills-title">Mis Habilidades</h1>
        
              <div className="skills-grid">
              
                <div className="skill-category">
                  <h2 className="category-title">
                    <i className="fas fa-users"></i> Habilidades Sociales
                  </h2>
                  <div className="skill-items">
                    <ItemSkils Text="Trabajo en equipo" porsent="75%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Honestidad" porsent="90%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/> 
                    <ItemSkils Text="Responsabilidad" porsent="90%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Puntualidad" porsent="90%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Compromiso" porsent="100%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Capacidad de adaptación" porsent="95%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Capacidad de resolución de problemas" porsent="75%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Capacidad de comunicación" porsent="90%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    
                  </div>
                </div>
        
  
                <div className="skill-category">
                  <h2 className="category-title">
                    <i className="fas fa-code"></i> Habilidades Técnicas
                  </h2>
                  <div className="skill-items">
                    <ItemSkils Text="HTML" porsent="85%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="CSS" porsent="80%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>

                    <ItemSkils Text="JavaScript" porsent="75%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
                    <ItemSkils Text="Git" porsent="70%" styleName="skill-name" styleBar="skill-bar" styleItem="skill-item"/>
 
                  </div>
                </div>
        
              
                <div className="skill-category">
                  <h2 className="category-title">
                    <i className="fas fa-language"></i> Idiomas
                  </h2>
                  <div className="language-section">
                    <div className="language-item">
                      <span className="language-name">Inglés</span>
                      <span className="language-level">B1</span>
                      <p className="language-description">Nivel intermedio con capacidad de comunicación efectiva</p>
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
  
    </>   
    )
    }
