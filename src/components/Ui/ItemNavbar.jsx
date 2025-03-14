import React from "react";
import { NavLink } from "react-router-dom";

export const ItemNavbar = ({style="HeardLiDefaul", text, link}) => {
    return(
        <li className={style}>
            <NavLink to={link}>{text}</NavLink>
        </li>
    )
}