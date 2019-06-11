import React from "react"
import Layout from "../incl/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../incl/Banner"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Dynamic recompilation">
          <AniLink fade to="/" className="btn-white">
            Back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
