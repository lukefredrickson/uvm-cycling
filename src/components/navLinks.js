import React from "react"
import { Link } from "gatsby"
import NavStyles from "./nav.module.css"

const Nav = () => {
  return (
    <>
      <div className={`${NavStyles.navLogoContainer}`}>
        <Link className={`${NavStyles.navLogoLink}`} to="/">
          <h1 className={`${NavStyles.navLogo}`}>UVM Cycling</h1>
        </Link>
      </div>
      <nav role="navigation" className={`nav ${NavStyles.nav}`}>
        <Link
          className={`nav-link ${NavStyles.navLink}`}
          activeClassName={`nav-link--active ${NavStyles.navLinkActive}`}
          to="/"
        >
          <h4>Home</h4>
        </Link>
        <Link
          className={`nav-link ${NavStyles.navLink}`}
          activeClassName={`nav-link--active ${NavStyles.navLinkActive}`}
          to="/prospective-riders"
        >
          <h4>Prospective Riders</h4>
        </Link>
        {/*
        <Link
          className={`nav-link ${NavStyles.navLink}`}
          activeClassName={`nav-link--active ${NavStyles.navLinkActive}`}
          to="/calendar"
        >
          <h4>Calendar</h4>
        </Link>
        <Link
          className={`nav-link ${NavStyles.navLink}`}
          activeClassName={`nav-link--active ${NavStyles.navLinkActive}`}
          to="/blog"
        >
          <h4>Blog</h4>
        </Link>
        <Link
          className={`nav-link ${NavStyles.navLink}`}
          activeClassName={`nav-link--active ${NavStyles.navLinkActive}`}
          to="/contact"
        >
          <h4>Contact Us</h4>
        </Link>
        */}
      </nav>
    </>
  )
}

export default Nav
