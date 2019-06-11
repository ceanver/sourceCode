//StaticQuery example
import React from "react"
import { StaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  query SecondQuery {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={anyName => {
        return (
          <div>
            <h5>title:{anyName.site.siteMetadata.title}</h5>
            <h5>author:{anyName.site.siteMetadata.author}</h5>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
