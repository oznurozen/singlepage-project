import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import logo from '../../assetst/Images/logo.png';
import '../../assetst/css/sass/main.scss';

function Footer
() {
  return (
    <div className="container-fluid footer" >
      <footer className="row border-top p-5 text-center" >
        <div className="col-lg-4 mb-3" >
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src={logo} alt="logo" className='logo m-auto'/>
          </a>
         
        </div>

        <div className="col-lg-4 mb-3">
          <h5>Yol Haritası</h5>
          <ul className="nav flex-column">
          <NavLink to="/" className="listItem">Anasayfa</NavLink>
            <NavLink to="/about" className="listItem">Hakkımızda</NavLink>
            <NavLink to="/personal" className="listItem">Kodromuz</NavLink>
            <NavLink to="/contact" className="listItem">İletişim</NavLink>
            <NavLink to="/policy" className="listItem">Politika</NavLink>
          </ul>
        </div>

        <div className="col-lg-4 mb-3">
          <h5>Social</h5>
          <ul className="nav flex-column">
          <a href='#/' className='icons'><FaTwitter/></a>
                <a href='#/' className='icons'><FaInstagram/></a>
                <a href='#/' className='icons'><FaFacebookSquare/></a>
          </ul>
        </div>
        <hr></hr>
        <p className='text-white'>Rise Of Software&copy; 2023</p>
      </footer>
    </div>
  )
}

export default Footer
