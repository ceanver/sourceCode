//UseStaticQuery example, found it better than StaticQuery
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query FirstQuery {
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

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)

  return (
    <div>
      <h4>title:{siteMetadata.title}</h4>
      <h4>author:{siteMetadata.author}</h4>
    </div>
  )
}

export default Header
