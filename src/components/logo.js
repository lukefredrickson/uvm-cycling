import React from "react"
import LogoStyles from "./logo.module.css"

const Logo = () => {
  return (
    <div className={`cover-text-container ${LogoStyles.coverTextContainer}`}>
      <h1 className={`cover-text ${LogoStyles.coverText}`}>UVM Cycling</h1>
      <h3
        className={`cover-text-subtitle ${LogoStyles.coverText} ${LogoStyles.coverTextSubtitle}`}
      >
        win the bike
      </h3>
    </div>
  )
}

export default Logo
