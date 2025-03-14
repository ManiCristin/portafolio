import React from "react";
import { ItemFooter } from "../../Ui/ItemFooter";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = ({style="styleFooter"}) => {
    return(
        <footer className={style}>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul className="footer-links">
                        <ItemFooter 
                            link="https://github.com" 
                            text="GitHub" 
                            icon={FaGithub}
                            external={true}
                        />
                        <ItemFooter 
                            link="https://linkedin.com" 
                            text="LinkedIn" 
                            icon={FaLinkedin}
                            external={true}
                        />
                        <ItemFooter 
                            link="mailto:tu@email.com" 
                            text="Email" 
                            icon={MdEmail}
                            external={true}
                        />
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <ul className="footer-links">
                        <ItemFooter 
                            link="https://twitter.com" 
                            text="Twitter" 
                            icon={FaTwitter}
                        />
                        <ItemFooter 
                            link="https://instagram.com" 
                            text="Instagram" 
                            icon={FaInstagram}
                        />
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Maria Cristina Moreno Sanchez - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}