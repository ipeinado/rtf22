import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

export default function Template({pageContext, data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title} pageContext={pageContext}>
      <Helmet>
        <title>{ frontmatter.title }</title>
        <meta name="description" content={ frontmatter.description } />
      </Helmet>
      <article>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        >
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        date
        title
        description
      }
    }
  }
`
