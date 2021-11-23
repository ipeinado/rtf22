import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function Template({data,}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      <div 
        className="container"
        dangerouslySetInnerHTML={{ __html: html }}
      >
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
