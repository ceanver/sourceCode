import React from "react"
import { Link } from "gatsby"
import Layout from "../incl/Layout"
// import Header from "../components/Header" //StaticQuery
// import RegularHeader from "../components/RegularHeader" //UseStaticQuery
// 3rd option PageQuery (write it here)
// import Images from "../components/Images"

import Hero from "../incl/Hero"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      {/* <RegularHeader />
      <Header /> */}
      <Hero img={data.blogHero.childImageSharp.fluid} />
      hello from blog page<Link to="/">back home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogHero: file(relativePath: { eq: "blogHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
