import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import selfie from "../../vtk/cecil.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={selfie} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Data Scientist</h4>
          <p>
            Hi, my name is Cecil. I'm a former Chemical Engineer, but now a
            aspiring to become a data scientist. During my last few years of
            engineering school, I started reading about and statistics and
            implementing machine learning algorithms and decided I wanted to
            make machine learning a part of my career.
          </p>
          <p>
            Following my graduation, I promptly travelled to the UK, perfecting
            my English skills whilst writing a research paper related to latent
            heat storage in house heating applications. Since my return I have
            been someone who spends most of their time coding and currently
            learning with the Georgia Tech’s data analytics program. When I'm
            not working on that, I'm generally working on something related to
            python, react or training aerial straps.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
