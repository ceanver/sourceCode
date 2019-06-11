import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../incl/Layout"
import Banner from "../incl/Banner"
import About from "../incl/Home/About"
import Skills from "../incl/Home/Skills"

import Hero from "../incl/Hero"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <Hero home="true" img={data.homeHero.childImageSharp.fluid}>
      <Banner title="Cecil Vega" info="Data, engineering and learning in Chile">
        <AniLink fade to="/projects" className="btn-white">
          Explore Projects
        </AniLink>
      </Banner>
    </Hero>
    <About />
    <Skills />
  </Layout>
)

export const query = graphql`
  query {
    homeHero: file(relativePath: { eq: "homeHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
