import React from "react";
import servicesData from '../../data/services'
import { GoFile } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";


export default function ServicesList(){

  
 
  
  return(
    
    <>
    <h2 className="main-title">Voici la list des services</h2>
    <div className="service-list">
      <div className="services-box">
        test
        <div className="cta">
          <p className="btn-principal">Liste des services</p>
          <button className="btn-principal" >Ajouter</button>
        </div>
      <div>
      <table className="servicesListTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Titre</th>
            <th>Sous titre</th>
            <th>Texte</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.services.map(service => (
            <tr key={service.id}>
              <td>
                <img src={service.image} alt={service.title} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{service.title}</td>
              <td>{service.subtitle}</td>
              <td><p className="service-text">{service.texte}</p></td>
              <td className="l-btns"><Link className="l-one"   to={`/service?id=${service.id}`}  title="Consulter" ><FaRegEye /></Link> <span className="l-two"><AiOutlineDelete /></span></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
    </>
  )
}