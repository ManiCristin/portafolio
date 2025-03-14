import React from "react"
import {Home} from './components/pages/Home/Home.jsx'
import { Routes,Route } from "react-router-dom"
import { Container } from './components/Container/Container';
import {Estudys} from './components/pages/Estudys/Estudys.jsx'
import {Skils} from './components/pages/Skils/Skils.jsx'
import {Experince} from './components/pages/Experience/Experience.jsx'

import { Header } from "./components/layouts/Header/Header.jsx"
import { Footer } from "./components/layouts/Footer/Footer";

export const App = ()=>{
    return (
    //react fragment    
    <>
<Header />
<Container>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Estudys" element={<Estudys/>}/>
        <Route path="/Skils" element={<Skils/>}/> 

        <Route path="/Experince" element={<Experince/>}/>
     </Routes>
</Container>
<Footer/>
</>
  
 )
} 
//portales-<modulo
