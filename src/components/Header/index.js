import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import logo from '../../assetst/Images/logo.png'
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import '../../assetst/css/sass/main.scss'


function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/home"><img src={logo} alt="logo" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <NavLink to="/" className="listItem" activeClassName="active" exact="true" >Anasayfa</NavLink>
            <NavLink to="/about" className="listItem" activeClassName="active">Hakkımızda</NavLink>
            <NavLink to="/personal" className="listItem" activeClassName="active">Kodromuz</NavLink>
            <NavLink to="/contact" className="listItem" activeClassName="active">İletişim</NavLink>
            <NavLink to="/policy" className="listItem" activeclassname="active">Politika</NavLink>
          </Nav>
          <Nav className="d-flex">
            <a href='#/' className='icons'><FaTwitter/></a>
            <a href='#/' className='icons'><FaInstagram/></a>
            <a href='#/' className='icons'><FaFacebookSquare/></a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header