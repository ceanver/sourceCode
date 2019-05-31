import React, { useState } from "react" //useState hook
import { Link } from "gatsby"
import styles from "../css/navbar.module.css" //import css
import { FaAlignRight } from "react-icons/fa" //import font-awesome icon
import links from "../topo/links" //import links
import socialIcons from "../topo/socialIcons" //import social icons
import logo from "../vtk/logo.svg" //import logo image
const Navbar = () => {
  const [isOpen, setNav] = useState(false) //useState hook for toggling
  const toggleNav = () => {
    setNav(isOpen => !isOpen) //function for passing old value in state
  }
  return (
    <nav className={styles.navbar} /* element nav.module */>
      <div className={styles.center} /* element .nav-center */>
        <div className={styles.header} /* element .nav-header */>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        <ul
          className={
            isOpen ? `${styles.links} ${styles.showNav}` : `${styles.links}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.socialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
