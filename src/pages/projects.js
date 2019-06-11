import React, { Component } from "react"
import Layout from "../incl/Layout"
// import Button from "../components/Button"

import Hero from "../incl/Hero"
import { graphql } from "gatsby"

export default class projects extends Component {
  render() {
    return (
      <Layout>
        <Hero img={this.props.data.projectHero.childImageSharp.fluid} />
        {/* <div>
          <Button big>1st button</Button>
          <Button color="#f15025">2nd button</Button>
        </div> */}
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    projectHero: file(relativePath: { eq: "homeHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
