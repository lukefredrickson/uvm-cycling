import React from "react"
import NavStyles from "./nav.module.css"
import Nav from "./navLinks"

class HomeNav extends React.Component {
  constructor(props) {
    super(props)
    this.navRef = React.createRef()
    this.state = { navOffsetTop: 0, height: 0 }
    this.trackScrolling = this.trackScrolling.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling, false)
    window.addEventListener("resize", this.handleResize, false)
    this.setState({
      height: window.innerHeight,
      navOffsetTop: this.navRef.current.offsetTop,
    })
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling, false)
    window.removeEventListener("resize", this.handleResize, false)
  }

  trackScrolling = () => {
    if (this.navRef) {
      this.handleStickyNav()
    }
  }

  handleResize = () => {
    if (this.navRef) {
      let newHeight = window.innerHeight
      let heightDif = newHeight - this.state.height
      let newOffsetTop = this.state.navOffsetTop + heightDif
      this.setState({ height: newHeight, navOffsetTop: newOffsetTop })
      this.handleStickyNav()
    }
  }

  handleStickyNav() {
    if (this.navRef) {
      if (window.pageYOffset > this.state.navOffsetTop) {
        this.navRef.current.classList.add(NavStyles.stickyNav)
        this.navRef.current.classList.remove(NavStyles.heroNav)
      } else {
        this.navRef.current.classList.remove(NavStyles.stickyNav)
        this.navRef.current.classList.add(NavStyles.heroNav)
      }
    }
  }

  render() {
    return (
      <div
        ref={this.navRef}
        className={`nav-container ${NavStyles.navContainer} ${NavStyles.heroNav}`}
      >
        <Nav />
      </div>
    )
  }
}

export default HomeNav
