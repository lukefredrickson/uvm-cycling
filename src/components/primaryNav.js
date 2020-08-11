import React from "react"
import Nav from "./navLinks"
import NavStyles from "./nav.module.css"
import LogoStyles from "./logo.module.css"

class PrimaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.topNavRef = React.createRef()
    this.fixedNavRef = React.createRef()
    this.trackScrolling = this.trackScrolling.bind(this)
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling, false)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling, false)
  }

  trackScrolling = () => {
    if (this.topNavRef && this.fixedNavRef) {
      if (window.pageYOffset > 0) {
        this.fixedNavRef.current.classList.remove(NavStyles.hidden)
        this.topNavRef.current.classList.add(NavStyles.hidden)
      } else {
        this.fixedNavRef.current.classList.add(NavStyles.hidden)
        this.topNavRef.current.classList.remove(NavStyles.hidden)
      }
    }
  }

  render() {
    return (
      <div>
        <div
          ref={this.topNavRef}
          className={`nav-container ${NavStyles.navContainer} ${NavStyles.topNav}`}
        >
          <Nav />
        </div>
        <div
          ref={this.fixedNavRef}
          className={`nav-container ${NavStyles.navContainer} ${NavStyles.stickyNav} ${NavStyles.hidden}`}
        >
          <Nav />
        </div>
      </div>
    )
  }
}

export default PrimaryNav
