import React from "react"
import DividerStyles from "../components/dividers.module.css"

const AngleDividerBottom = props => {
  return (
    <div className={`${DividerStyles.angleDividerBottom}`}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          style={{ fill: props.fill }}
        ></path>
      </svg>
    </div>
  )
}

export default AngleDividerBottom
