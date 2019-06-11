import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="me" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/ceanver@pm.me"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Escriba su nombre aquí."
            />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Escriba su email aquí."
            />
          </div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            className={styles.formControl}
            placeholder="Escriba su mensaje aquí."
          />
          <div>
            <input
              type="submit"
              value="Submit Message"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
