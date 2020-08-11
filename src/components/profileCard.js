import React from "react"
import Avatar from "./avatar"
import ProfileCardStyles from "./profileCard.module.css"
import Fade from "react-reveal/Fade"

const ProfileCard = props => {
  return (
    <Fade>
      <div className={`card ${ProfileCardStyles.card}`}>
        <Avatar filename={props.filename}></Avatar>
        <div
          className={`card-text-container ${ProfileCardStyles.cardTextContainer}`}
        >
          <h3 className={`officer-title ${ProfileCardStyles.officerTitle}`}>
            {props.title}
          </h3>
          <p>{props.name}</p>
          <p>{props.pronouns}</p>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </div>
      </div>
    </Fade>
  )
}

export default ProfileCard
