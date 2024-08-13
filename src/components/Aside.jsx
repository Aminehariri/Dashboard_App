import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link  , NavLink} from 'react-router-dom';
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuMails } from "react-icons/lu";
import { MdQueryStats } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { FaRegImages } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { LuUserSquare2 } from "react-icons/lu";
import { BsQuestionOctagon } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { FaList } from "react-icons/fa6";
import logo from '../assets/logo.png'



export default function Aside(){
  return(
    <aside className="left-aside">
      <div className="head-logo">
         <Link to="/leadsList" className=""><img src={logo} className="logo react" alt="React logo" /></Link>
      </div>

      <p className="">Outils</p>
      <ul>
        <li><NavLink to="/leadsList"><IoMailUnreadOutline /> Leads</NavLink></li>
        <li><NavLink to={'/stats'}><MdQueryStats />Statistic</NavLink></li>
        <li><NavLink to={'/setting'}><IoSettingsOutline />Parametres</NavLink></li>
      </ul>
      <p className="">Les pages</p>
        <ul>
          <li><NavLink to="/accueil"><LuHome />Accueil</NavLink></li>
          <li><NavLink to='/presentation'><BsShop />Qui sommes-nous</NavLink></li>
          <li><NavLink to="/serviceslist"><FaList />Services</NavLink></li>
          <li><NavLink to="/galerie"><FaRegImages />Galerie</NavLink></li>
          <li><NavLink to="/contact"><RiContactsLine />Contact</NavLink></li>
        </ul>   
      <p className="">Autres</p>
      <ul>
      <li><NavLink to="/profile"><LuUserSquare2 />Profile</NavLink></li>
        <li><BsQuestionOctagon />FAQ</li>
        <li><FiFileText />Condition general</li>
      </ul>
    </aside>
  )
}