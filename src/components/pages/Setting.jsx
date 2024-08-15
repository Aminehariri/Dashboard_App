import contactImg from '../../assets/Mypassword.svg'
import { useState } from 'react';
import banner1 from '../../assets/banners/bann.jpeg'
import banner2 from '../../assets/banners/bann2.jpeg'
import banner3 from '../../assets/banners/bann3.jpeg'
import banner4 from '../../assets/banners/bann4.jpeg'
import banner5 from '../../assets/banners/bann5.jpeg'
import noImg from '../../assets/no-photo.png'


export default function Setting(){
 
  return(
    <>
      <div className="setting-box">
        <div className="s-box s-box1">
          <img src={contactImg} alt="Contact img" />
        </div>
        
        <div className="s-box s-box2">
        <h2 className="main-title">Gestion des informations personnelles </h2>

          <form action="#" className='s-form'>
            <div className="form-flex">
            
          

              <div className="form-group"><span>Nom</span>
                <input type="text"  defaultValue='Amine HARIRI' name=""  className='settingNom' />
              </div>
              <div className="form-group"><span>Telephone</span>
                <input type="number"  defaultValue='0612365489' min={0} name=""  className='settingTel' />
              </div>
            </div>
            <div className="form-flex">
              <div className="form-group"><span>Adresse</span>
                <input type="text"  defaultValue='CASABLANCA' name=""  className='settingAdresse' />
              </div>
              <div className="form-group"><span>Email</span>
                <input type="mail"  defaultValue='a.hariri@gmail.com' name=""  className='settingMail' />
              </div>
            </div>
          <button  className="btn-principal">Validé</button>
          </form>
          <h2 className="main-title">Securite </h2>

          <form action="#" className='s-form'>
            <div className="form-flex">
              <div class="form-group"><span>Login</span>
                <input type="text" defaultValue='a.hariri@gmail.com' name=""  className='settingUser' />
              </div>
              <div class="form-group"><span>Password</span>
                <input type="password"  defaultValue='0612365489' name=""  className='settingPass' />
              </div>
            </div>
          <button  className="btn-principal">Validé</button>
            
          </form>
          
        </div>
      </div>
      <div className="banners">
        <h2 className="main-title">Gestion des bannieres</h2> 
        <div className="banners-boxes">
          <div className="banner banner1">
            <p>Photo par default</p>
            <img src={banner1} alt="" />
            <div className="cta">
              <button className='btn-principal'>Supprimer</button>
              <button className='btn-principal'>Modifier la photo</button>
            </div>
          </div>
          <div className="banner banner2">
            <p>Photo de Accueil</p>
            <img src={banner2} alt="" />
            <div className="cta">
              <button className='btn-principal'>Supprimer</button>
              <button className='btn-principal'>Modifier la photo</button>
            </div>
          </div>
          <div className="banner banner3">
            <p>Photo de Qui-somme-nous</p>
            <img src={banner3} alt="" />
            <div className="cta">
              <button className='btn-principal'>Supprimer</button>
              <button className='btn-principal'>Modifier la photo</button>
            </div>
          </div>
          <div className="banner banner4">
          <p>Photo de Service</p>
            <img src={banner4} alt="" />
            <div className="cta">
              <button className='btn-principal'>Supprimer</button>
              <button className='btn-principal'>Modifier la photo</button>
            </div>
          </div>
          <div className="banner banner5">
            <p>Photo de Galerie</p>
            <img src={banner4} alt="" />
            <div className="cta">
              <button className='btn-principal'>Supprimer</button>
              <button className='btn-principal'>Modifier la photo</button>
            </div>
          </div>
          <div className="banner banner6">
            <p>Photo de Contact</p>
            <img src={banner4} alt="" />
            <div className="cta">
              <button className='btn-principal'>Ajouter </button>
              {/* <button className='btn-principal'>Modifier la photo</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}