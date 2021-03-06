import React from "react"
import Title from "../Title"
import styles from "../../css/skills.module.css"
import skills from "../../doc/skills"

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Title title="my" subtitle="skills" />
      <div className={styles.center}>
        {skills.map((item, index) => {
          return (
            <article key={index} className={styles.skill}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
