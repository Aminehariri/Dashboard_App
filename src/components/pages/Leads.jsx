import React, { useState ,useEffect } from 'react';
import { FaRegEye } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoFile } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import ReactPaginate from 'react-paginate';
import { Link  } from 'react-router-dom';
import Lead from './Lead';
import leadsData from '../../data/data.json'
import data from '../../data/data.json'

export default function Leads(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const leadsPerPage = 5; // Nombre de leads à afficher par page

  const [leadsData, setleadsData] = useState([]);

  useEffect(() => {
      
      setleadsData(data); 
  }, []);

  

  const offset = currentPage * leadsPerPage;
  console.log(offset);
  // (offset === 0 ? {} :{});
 

  const currentLeads = data.slice(offset, offset + leadsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="leads-boxs">
        <div className="l-box">
          <span><FaRegEye /></span>
          <h4>43</h4>
          <p>Visite / mois</p>
        </div>
        <div className="l-box">
          <span><IoMailOutline /></span>
          <h4>{data.length}</h4>
          <p>Nouveau Lead</p>
        </div>
        <div className="l-box">
          <span><HiOutlineShoppingBag /></span>
          <h4>22</h4>
          <p>Vente /mois</p>
        </div>
        <div className="l-box">
          <span><HiOutlineShoppingBag /></span>
          <h4>22</h4>
          <p>Vente /mois</p>
        </div>
      </div>
      <div className="leads-nav">
        <ul>
          <li><a href="#">Tout</a></li>
          <li><a href="#">Nouveau</a></li>
          <li><a href="#">Modifier</a></li>
          <li><a href="#">Supprumer</a></li>
        </ul>
      </div>
      <div className="leads-table">
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Nom</th>
              <th>Email</th>
              <th>La date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.map(row => (
              <tr key={Lead} >
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.date}</td>
                <td className="l-btns"><span className="l-one"><Link  to={`/Lead?id=${row.id}`} title='Consulter' ><GoFile /></Link></span> <span className="l-two"><AiOutlineDelete /></span></td>

              </tr>
            ))}
          </tbody>
        </table>
        <p className="lead-num">Vous avez {data.length} leads en total</p>
        <ReactPaginate
          previousLabel={'Précédent'}
          nextLabel={'Suivant'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(data.length / leadsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={8}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
        
      </div>
    </>
  );
  
  
}
