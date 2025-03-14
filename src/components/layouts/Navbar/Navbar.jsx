import React from "react";
import {ItemNavbar} from '../../Ui/ItemNavbar'

export const Navbar = ({style="styleNav"}) => {

return(
   <>
   <ul className={style}>
<ItemNavbar link="/"  text={"inicio"}/>
<ItemNavbar  link="/Estudys" text={"estudios"}/>
<ItemNavbar  link="/Skils" text={"habilidades"}/>
<ItemNavbar  link="/Experince" text={"experiencia"}/>

      
   </ul>
  
   </>
)
}