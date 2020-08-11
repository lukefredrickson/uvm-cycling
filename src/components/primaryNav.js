import React from "react"
import Nav from "./nav"
import navStyles from "./nav.module.css"
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
      this.handleStickyNav()
    }
  }

  handleStickyNav() {
    if (this.topNavRef && this.fixedNavRef) {
      if (window.pageYOffset > 0) {
        this.fixedNavRef.current.classList.remove(navStyles.hidden)
        this.topNavRef.current.classList.add(navStyles.hidden)
      } else {
        this.fixedNavRef.current.classList.add(navStyles.hidden)
        this.topNavRef.current.classList.remove(navStyles.hidden)
      }
    }
  }

  render() {
    return (
      <div>
        <div
          ref={this.topNavRef}
          className={`nav-container ${navStyles.navContainer} ${navStyles.topNav}`}
        >
          <h1 className={LogoStyles.navText}>UVM Cycling</h1>
          <Nav />
        </div>
        <div
          ref={this.fixedNavRef}
          className={`nav-container ${navStyles.navContainer} ${navStyles.stickyNav} ${navStyles.hidden}`}
        >
          <h1 className={LogoStyles.navText}>UVM Cycling</h1>
          <Nav />
        </div>
      </div>
    )
  }
}

export default PrimaryNav
