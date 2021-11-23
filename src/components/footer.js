import * as React from 'react'
import { Link } from 'gatsby'

import {
  footer,
  footerLinks,
  footerLinkItem,
  footerLinkText
} from './footer.module.css'

const Footer = () => {
  return (
    <footer role="contentinfo" className={footer}>
      <ul className={footerLinks}>
        <li className={footerLinkItem}><a href="https://twitter.com/raisingthefloor" className={footerLinkText}>Twitter</a></li>
        <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Terms</Link></li>
        <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Privacy</Link></li>
      </ul>
    </footer>
  )
}

export default Footer