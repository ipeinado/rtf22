import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoFull from '../assets/logo_full.svg'
import DropdownMenu from './dropdown-menu'

import {
  banner,
  brand,
  menuToggle,
  navbarCollapse,
  nav,
  navLinks,
  navLinkItem,
  navLinkText
} from './header.module.css'

import {
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [expanded, setExpanded] = useState(false);  

  return (
    <header role="banner" className={banner}>
      <Link to="/" className={brand}><LogoFull className="logo"/></Link>
      <nav className={nav}>
        <button className={menuToggle} aria-haspopup="true" aria-controls="navbar-collapse" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          
          { expanded 
            ? <><FontAwesomeIcon icon={faTimes} size="1x" />close menu</> 
            : <><FontAwesomeIcon icon={faBars} size="1x" />open menu</> 
          }
        </button>
        <div className={navbarCollapse}>
          <h2 id="menu-header">Menu</h2>
          <ul className={navLinks} id="main-menu" aria-labelledby='menu-header' role="menu">
            <DropdownMenu className={navLinkItem} base="/about" title="About Us">
              <li><Link to="/about/overview" activeClassName='active' role="menuitem">Overview</Link></li>
              <li><Link to="/about/mission-and-vision" activeClassName='active' role="menuitem">Mission and Vision</Link></li>
              <li><Link to="/about/team" activeClassName='active'>Team</Link></li>
            </DropdownMenu>
            <DropdownMenu className={navLinkItem} title="Our Work">
                <li><Link to="/work/projects-and-tools">Projects And Tools</Link></li>
            </DropdownMenu>
            <li className={navLinkItem} role='menuitem'><Link to="/services" className={navLinkText}>Services</Link></li>
            <li className={navLinkItem} role='menuitem'><Link to="/get-involved" className={navLinkText}>Get Involved</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header