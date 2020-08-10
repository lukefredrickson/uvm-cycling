import React from "react"
import Nav from "./nav"
import navStyles from "./nav.module.css"

class StickyNav extends React.Component {
  constructor(props) {
    super(props)
    this.navRef = React.createRef()
    this.state = { navOffsetTop: 0, height: 0 }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this))
    document.addEventListener("scroll", this.trackScrolling)
    this.setState({
      height: window.innerHeight,
      navOffsetTop: this.navRef.current.offsetTop,
    })
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling)
    window.removeEventListener("resize", this.handleResize.bind(this))
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
      this.navRef.current.classList.add(navStyles.topNav)
    } else {
      this.navRef.current.classList.remove(navStyles.topNav)
    }
  }

  render() {
    return (
      <div ref={this.navRef} className={`nav-container ${navStyles.bottomNav}`}>
        <Nav />
      </div>
    )
  }
}

export default StickyNav
