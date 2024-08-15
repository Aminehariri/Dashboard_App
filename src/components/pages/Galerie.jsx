import React from "react";
import img1 from '../../assets/qsn/qsn.jpeg'
import img2 from '../../assets/qsn/qsn2.jpeg'
import img3 from '../../assets/qsn/qsn3.jpeg'

export default function Galerie(){

  const qsmImgs = {
    img: img1,
    img2: img2,
    img3: img3,
  }
  
  return(
    <div className="galerie-block">
        <p className="g-text">Qui somme-nous</p>
      <div className="galerie-imgs">
        <div className="galerie-img">
        {
            Object.keys(qsmImgs).map(key => (
              <img key={key} src={qsmImgs[key]} className='current-service-img' alt="" />
            ))
          }
        </div>
        <div className="cta">
        <button className="btn-principal">Ajouter des images</button>
      </div>
      </div>
      <div className="separator">

      </div>
        <p className="g-text"> Galerie photo</p>
      
      <div className="galerie-imgs">
        <div className="galerie-img">
        {
            Object.keys(qsmImgs).map(key => (
              <img key={key} src={qsmImgs[key]} className='current-service-img' alt="" />
            ))
          }
        </div>
        <div className="cta">
          <button className="btn-principal">Ajouter des images</button>
        </div>
      </div>
    </div>

  )
}