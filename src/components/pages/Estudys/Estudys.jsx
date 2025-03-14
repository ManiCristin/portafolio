import './Estudys.css'
import { ItemEstudys } from '../../Ui/ItemEstudys'
export const Estudys = () =>{
return (
    <>
    <div className="Estudys-container">
   
    <h1 className="Studys-title">Mis Estudioss</h1>
        <div className="skills-grid">
        <div className="Studys-category">
                  <h2 className="category-title">
                    <i className="fas fa-code"></i> Educacion Basica
                  </h2>
                  <ItemEstudys titulo="Ballicher tecnico en programacion de software." parafo="Institucion Educativa Los Fundadores - SENA" Textbutton="graduado 2023" />
    </div>

    <div className="Studys-category">
                  <h2 className="category-title">
                    <i className="fas fa-code"></i> cursos
                  </h2>
                  <ItemEstudys titulo="Curso de JAvaScript : manipulacion del DOM" parafo="platzi" Textbutton="graduado 2024" />
                  <ItemEstudys titulo="Curso de ingles basico A2:Preguntas y respuestas comunes" parafo="platzi" Textbutton="graduado 2024" />
                  <ItemEstudys titulo="Curso de ingles basico  para principiastes" parafo="platzi" Textbutton="graduado 2024"  />
    </div>

    <div className="Studys-category">
                  <h2 className="category-title">
                    <i className="fas fa-code"></i> Educacion Superior
              
                  </h2>
                  <ItemEstudys titulo="tecnologo en analizis y desarrollo de software" parafo="SENA" Textbutton="en curso   " StyleButton='Bt-other' />

    </div>

    </div>
    </div>
    </>
)
}