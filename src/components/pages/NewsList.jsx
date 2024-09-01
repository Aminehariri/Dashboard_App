import React from "react";
import servicesData from '../../data/services.js'
import actuData from '../../data/news.js'
import { GoFile } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import Swal from 'sweetalert2';
import newsData from "../../data/news.js";

export default function NewsLIst(){
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
          <p className="btn-principal">Liste des actualites</p>
          <Link className="btn-principal" to='/newsAdd' >Ajouter</Link>
        </div>
      <div>
      <table className="servicesListTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Auteur</th>
            <th>Titre</th>
            <th>Date de publications</th>
            <th>Texte</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
        {newsData.map(actu => (
          <tr key={actu.id}>
            <td>
              <img src={actu.image} alt={actu.title} style={{ width: '100px', height: 'auto' }} />
            </td>
            <td>{actu.author}</td>
            <td><p className="news-title">{actu.title}</p></td>
            
            <td className="tNewsDate">{actu.date}</td>
            <td><p className="news-text">{actu.text}</p></td>
            <td className="l-btns">
              <Link className="l-one" to={`/actualite?id=${actu.id}`} title="Consulter" >
                <FaRegEye />
              </Link>
              <span className="l-two" onClick={showDeleteAlert}>
                <AiOutlineDelete />
              </span>
            </td>
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