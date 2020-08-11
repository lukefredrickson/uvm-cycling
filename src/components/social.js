import React from "react"
import SocialStyles from "./social.module.css"

const Social = props => {
  return (
    <a href={props.link} target="_blank" className={SocialStyles.link}>
      {props.children}
      <p>{props.text}</p>
    </a>
  )
}

export default Social
