import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { NavBarStyle } from './Navstyle' 

type Props = {}

const Navbar = (props: Props) => {
  return (
    <NavBarStyle>
        <div className="navbar__logo">
        <img src={logo} alt="Soundwave logo"/><Link to="/"> Soundwave</Link>
      </div>  
      <div className="navbar-links_container">
       <Link to="/discover">Discover</Link>
       <Link to="/join">Join</Link>
      </div>
    </NavBarStyle>
  )
}

export default Navbar