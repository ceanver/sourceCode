import React from "react"
import Layout from "../incl/Layout"

import Hero from "../incl/Hero"
import { graphql } from "gatsby"

import Contact from "../incl/Contact/Contact"

export default function contact({ data }) {
  return (
    <Layout>
      <Hero img={data.contactHero.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactHero: file(relativePath: { eq: "contactHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
