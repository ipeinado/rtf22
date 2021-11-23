import * as React from 'react'
import { Link } from 'gatsby'

import { 
         banner,
         brand,
         nav,
         navLinks,
         navLinkItem,
         navLinkText,
         footer,
         footerLinks,
         footerLinkItem,
         footerLinkText
        } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <header role="banner" className={banner}>
        <Link to="/" className={brand}>Raising the Floor</Link>
        <nav className={nav}>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/who-we-are" className={navLinkText}>Who We Are</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer role="contentinfo" className={footer}>
        <ul className={footerLinks}>
          <li className={footerLinkItem}><a href="https://twitter.com/raisingthefloor" className={footerLinkText}>Twitter</a></li>
          <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Terms</Link></li>
          <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Privacy</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
