import React from "react"
import navStyles from "./nav.module.css"
import Nav from "./nav"

class StickyNav extends React.Component {
  constructor(props) {
    super(props)
    this.navRef = React.createRef()
    this.state = { navOffsetTop: 0, height: 0 }
    this.trackScrolling = this.trackScrolling.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling, false)
    window.addEventListener("resize", this.handleResize, this)
    this.setState({
      height: window.innerHeight,
      navOffsetTop: this.navRef.current.offsetTop,
    })
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling, false)
    window.removeEventListener("resize", this.handleResize, this)
  }

  trackScrolling = () => {
    this.handleStickyNav()
  }

  handleResize() {
    let newHeight = window.innerHeight
    let heightDif = newHeight - this.state.height
    let newOffsetTop = this.state.navOffsetTop + heightDif
    this.setState({ height: newHeight, navOffsetTop: newOffsetTop })
    this.handleStickyNav()
  }

  handleStickyNav() {
    if (this.navRef && window.pageYOffset > this.state.navOffsetTop) {
      this.navRef.current.classList.add(navStyles.stickyNav)
      this.navRef.current.classList.remove(navStyles.heroNav)
    } else {
      this.navRef.current.classList.remove(navStyles.stickyNav)
      this.navRef.current.classList.add(navStyles.heroNav)
    }
  }

  render() {
    return (
      <div
        ref={this.navRef}
        className={`nav-container ${navStyles.navContainer} ${navStyles.heroNav}`}
      >
        <Nav />
      </div>
    )
  }
}

export default StickyNav
