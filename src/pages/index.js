import React from "react"
import { Link } from "gatsby"
import Layout from "../mesh/Layout"
import Hero from "../mesh/Hero"
import Banner from "../mesh/Banner"
import About from "../mesh/Home/About"
import Skills from "../mesh/Home/Skills"

export default () => (
  <Layout>
    <Hero>
      <Banner title="Cecil Vega" info="Data, engineering and learning in Chile">
        <Link to="/projects" className="btn-white">
          Explore Projects
        </Link>
      </Banner>
    </Hero>
    <About />
    <Skills />
  </Layout>
)
