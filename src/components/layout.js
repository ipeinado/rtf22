import * as React from 'react'

import Header from './header'
import Footer from './footer'

import {
  container
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header></Header>
      <main className={container}>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
