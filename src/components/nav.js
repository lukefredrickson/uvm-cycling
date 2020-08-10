import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.css"

const Nav = () => {
  return (
    <nav role="navigation" className={`nav ${navStyles.nav}`}>
      <Link
        className={`nav-link ${navStyles.navLink}`}
        activeClassName={`nav-link--active ${navStyles.navLinkActive}`}
        to="/"
      >
        <h3>Home</h3>
      </Link>
      <Link
        className={`nav-link ${navStyles.navLink}`}
        activeClassName={`nav-link--active ${navStyles.navLinkActive}`}
        to="/page-2"
      >
        <h3>Prospective Riders</h3>
      </Link>
      <Link
        className={`nav-link ${navStyles.navLink}`}
        activeClassName={`nav-link--active ${navStyles.navLinkActive}`}
        to="/page-2"
      >
        <h3>Calendar</h3>
      </Link>
      <Link
        className={`nav-link ${navStyles.navLink}`}
        activeClassName={`nav-link--active ${navStyles.navLinkActive}`}
        to="/page-2"
      >
        <h3>Contact Us</h3>
      </Link>
      <Link
        className={`nav-link ${navStyles.navLink}`}
        activeClassName={`nav-link--active ${navStyles.navLinkActive}`}
        to="/page-2"
      >
        <h3>Blog</h3>
      </Link>
    </nav>
  )
}

export default Nav
