import contactImg from '../../assets/contact.png'
import { useState } from 'react';

export default function Setting(){
 
 
 const hundleInputChage = ()=>{
  document.querySelector('.settingNom').readOnly=false
  document.querySelector('.settingTel').readOnly=false
  document.querySelector('.settingAdresse').readOnly=false
  document.querySelector('.settingMail').readOnly=false
 }
 const hundleInputChageTwo = ()=>{
  document.querySelector('.settingUser').readOnly=false
  document.querySelector('.settingPass').readOnly=false 
  document.querySelector('.settingPass').type='text' 
 }

  return(
    <>
      <div className="setting-box">
        <div className="s-box s-box1">
          <img src={contactImg} alt="Contact img" />
        </div>
        
        <div className="s-box s-box2">
        <h2 className="main-title">Les informations personnelles </h2>

          <form action="#" className='s-form'>
            <div className="form-flex">
            
          

              <div className="form-group"><span>Nom</span>
                <input type="text" readOnly placeholder='Amine HARIRI' name=""  className='settingNom' />
              </div>
              <div className="form-group"><span>Telephone</span>
                <input type="number" readOnly placeholder='0612365489' min={0} name=""  className='settingTel' />
              </div>
            </div>
            <div className="form-flex">
              <div className="form-group"><span>Adresse</span>
                <input type="text" readOnly placeholder='CASABLANCA' name=""  className='settingAdresse' />
              </div>
              <div className="form-group"><span>Email</span>
                <input type="mail" readOnly placeholder='a.hariri@gmail.com' name=""  className='settingMail' />
              </div>
            </div>
            <button onClick={hundleInputChage} className="btn-principal" href='#'>Modifier</button>
          <button  className="btn-principal">Validé</button>
          </form>
          <h2 className="main-title">Securite </h2>

          <form action="#" className='s-form'>
            <div className="form-flex">
            
          

              <div class="form-group"><span>Login</span>
                <input type="text" readOnly placeholder='a.hariri@gmail.com' name=""  className='settingUser' />
              </div>
              <div class="form-group"><span>Password</span>
                <input type="password" readOnly placeholder='0612365489' name=""  className='settingPass' />
              </div>
            </div>
            <button onClick={hundleInputChageTwo} className="btn-principal">Modifier</button>
          <button  className="btn-principal">Validé</button>
            
          </form>
          
        </div>
      </div>
    </>
  )
}