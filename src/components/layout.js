import * as React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Header from './header'
import Footer from './footer'

import {
  main,
  container
} from './layout.module.css';

const Layout = ({ title, pageContext, children }) => {
  const { breadcrumb } = pageContext
  const disableLinks = ['/about', '/work']

  return (
    <div>
      <Header />
      <main className={main}>
        {/* <Breadcrumb location={location} crumbLabel={title} title="Home" /> */}
        <Breadcrumb
          crumbs={breadcrumb.crumbs}
          crumbSeparator=" > "
          disableLinks={disableLinks}
          crumbLabel={title}
        />
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
