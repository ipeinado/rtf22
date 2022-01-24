import * as React from "react"
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

import { Helmet } from "react-helmet"

import {
  mainBanner
} from './index.module.css'

const IndexPage = () => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Raising the Floor</title>
        <meta name="description" content="Raising the Floor is an international organization working on digital inclusion for all"></meta>
      </Helmet>

      <Header page="RtF"></Header>

      <section role="banner" className={mainBanner}>
        <div class="container">
          <h1>Digital Inclusion Matters</h1>
        </div>
      </section>
      <section className="container">
      <p><span role="heading" aria-level="2">15% of the population</span> is affected by some form of disability, and many of these people are not able to benefit from the use of technologies as their peers do. Moreover, most of us are or will be affected as well during our lives, whether it's due to an injury, illness or aging.</p>
      
      We need an inclusive approach that promotes one-size-fits-one digital experiences, an open, collaborative and empowering approach.
      </section>
      <section className="container">
        <h2>A digital world for everyone to enjoy</h2>
        <p>Raising the Floor is committed to the advancement of social equity through digital inclusion. We apply collaborative, participatory and open source research, design and development practices to create the digital environments and solutions that meet the needs of our wider community.</p>
        <Link to="/">Learn more about our work</Link>
      </section>
      <section className="container">
        <h2>Morphic is now available!</h2>
        <p>Morphic makes computers easier to use by helping you take control of your computer experience.</p>
        <p><a className="home-button" href="https://morphic.org/" title="Try Morphic">Try it now!</a></p>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default IndexPage