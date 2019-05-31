import React from "react"
import Layout from "../mesh/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../mesh/Banner"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Dynamic recompilation">
          <Link to="/" className="btn-white">
            Back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
