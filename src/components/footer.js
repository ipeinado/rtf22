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
        <li className={footerLinkItem}><a href="https://twitter.com/raisingthefloor" className={footerLinkText} rel="external">Twitter</a></li>
        <li className={footerLinkItem}><Link to="/terms" className={footerLinkText}>Terms</Link></li>
        <li className={footerLinkItem}><Link to="/privacy" className={footerLinkText}>Privacy</Link></li>
        <li className={footerLinkItem}><a className={footerLinkText} href="https://github.com/RtF-I" rel="external">Github</a></li>
      </ul>
    </footer>
  )
}

export default Footer