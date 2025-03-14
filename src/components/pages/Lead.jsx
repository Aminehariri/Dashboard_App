import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import data from '../../data/data.json'
import leadimg from '../../assets/message.svg'
import { Link } from 'react-router-dom';
import img2 from '../../assets/text-pana.svg'
import Swal from 'sweetalert2';

export default function Lead() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [leadsData, setleadsData] = useState([]);

    useEffect(() => {
        
        setleadsData(data); 
    }, []);

    const id = queryParams.get('id');
    const lead = data.find(item => item.id === parseInt(id));

    if (!lead) {
        return <p>No lead found with ID {id}</p>;
    }

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


    return (
        <>
            <h2 className='main-title'>Le lead en detail</h2>

            <div className="lead-block">
                <div className="lead-infos">
                <div className='lead-box'>
                    <div className="lead-one">
                       
                        <div className="lead-info">
                            <span>le nom: </span>
                            <p>{lead.name}</p>
                        </div>
                        <div className="lead-info">
                            <span>l'objet: </span>
                            <p>Demmande de devis</p>
                        </div>
                        <div className="lead-info">
                            <span>la date: </span>
                            <p>{lead.date}</p>
                        </div>
                        <div className="lead-info">
                            <span>l'email: </span>
                            <p>{lead.email}</p>
                        </div>
                        
                        <div className="lead-info">
                            <span>le message: </span>
                            <p>{lead.message}</p>
                        </div>

                        <div className="cta">
                            <a href="#" className="btn-principal">Repondu</a>
                            <NavLink to='/leadsList' className="btn-principal">Retour</NavLink>
                            <button title='Supprimer' onClick={showDeleteAlert} className="btn-principal delete">Supprimer</button>
                        </div>

                       
                    </div>
                    <div className="lead-two">
                        <img src={img2} alt="" />
                    </div>

                </div>
                </div>
            </div>

        </>
    );
}

