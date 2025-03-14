import React from "react";
import { NavLink } from "react-router-dom";

export const ItemFooter = ({
    style="FooterLiDefault", 
    text, 
    link, 
    icon: Icon, // El componente del icono se pasa como prop
    iconPosition = "left", // puede ser "left" o "right"
    external = false
}) => {
    return(
        <li className={style}>
            {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="footer-link-content">
                        {iconPosition === "left" && Icon && <Icon className="footer-icon" />}
                        {text}
                        {iconPosition === "right" && Icon && <Icon className="footer-icon" />}
                    </div>
                </a>
            ) : (
                <NavLink to={link}>
                    <div className="footer-link-content">
                        {iconPosition === "left" && Icon && <Icon className="footer-icon" />}
                        {text}
                        {iconPosition === "right" && Icon && <Icon className="footer-icon" />}
                    </div>
                </NavLink>
            )}
        </li>
    )
}