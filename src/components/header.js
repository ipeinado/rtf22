import * as React from 'react'
import { Link } from 'gatsby'

import {
  banner,
  bannerContent,
  brand,
  nav,
  navLinks,
  navLinkItem,
  navLinkText
} from './header.module.css'

const Header = () => {
  return (
    <header role="banner" className={banner}>
      <div className={bannerContent}>
        <Link to="/" className={brand}>Raising the Floor</Link>
        <nav className={nav}>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/who-we-are" className={navLinkText}>Who We Are</Link></li>
            <li className={navLinkItem}><Link to="/what-we-do" className={navLinkText}>What We Do</Link></li>
            <li className={navLinkItem}><Link to="/get-involved" className={navLinkText}>Get Involved</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header