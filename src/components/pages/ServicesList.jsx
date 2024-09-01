import React from "react";
import servicesData from '../../data/services'
import { GoFile } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import Swal from 'sweetalert2';

export default function ServicesList(){

  const showDeleteAlert = () => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'red',
      denyButtonColor:'#22c55e',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Non, annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteLead();
        Swal.fire(
          'Supprimé !',
          'Le lead a été supprimé avec succes.',
          'success'
        );
      }
    });
  };
  return(
    
    <>
    <div className="service-list">
      <div className="services-box">
        <div className="cta">
          <p className="btn-principal">Liste des services</p>
          <NavLink className="btn-principal" to='/serviceAdd'>Ajouter</NavLink>
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
              <td className="l-btns"><Link className="l-one"   to={`/service?id=${service.id}`}  title="Consulter" ><FaRegEye /></Link> <span className="l-two" onClick={showDeleteAlert}><AiOutlineDelete /></span></td>

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