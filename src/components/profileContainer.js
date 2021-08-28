import React from "react"
import ProfileCard from "../components/profileCard"
import ProfileContainerStyles from "../components/profileContainer.module.css"

const ProfileContainer = () => {
  return (
    <div className={`profile-cards ${ProfileContainerStyles.cards}`}>
      <ProfileCard
        filename="robert.png"
        title="President"
        name="Robert Watt"
        pronouns="he/him"
        email="Robert.Watt@uvm.edu"
      />
      <ProfileCard
        filename="andrew.png"
        title="Vice President"
        name="Andrew Buckley"
        pronouns="he/him"
        email="Andrew.Buckley@uvm.edu"
      />
      <ProfileCard
        filename="sammy.jpg"
        title="Coach"
        name="Sammy Hedlund"
        pronouns="he/him"
        email="hedlund.sammy@gmail.com"
      />
      <ProfileCard
        filename="nolan.jpg"
        title="Sponsorship Coordinator"
        name="Nolan Rogers"
        pronouns="he/him"
        email="Nolan.Rogers@uvm.edu"
      />
      <ProfileCard
        filename="ruth.jpg"
        title="Women's Co-Head"
        name="Ruth Spooner"
        pronouns="she/her"
        email="Ruth.Spooner@uvm.edu"
      />
      <ProfileCard
        filename="avatar.png"
        title="Women's Co-Head"
        name="Kylie Willis"
        pronouns="she/her"
        email="Kylin.Willis@uvm.edu"
      />
      <ProfileCard
        filename="sofie.jpg"
        title="Mountain Season Co-Head"
        name="Sofie Pedemonti"
        pronouns="she/her"
        email="Sofie.Pedemonti@uvm.edu"
      />
      <ProfileCard
        filename="clayton.jpg"
        title="Mountain Season Co-Head"
        name="Clayton Schroeder"
        pronouns="he/him"
        email="Clayton.Schroeder@uvm.edu"
      />
      <ProfileCard
        filename="avatar.png"
        title="Cyclocross Season Head"
        name="Patrick Frank"
        pronouns="he/him"
        email="Patrick.Frank@uvm.edu"
      />
      <ProfileCard
        filename="avatar.png"
        title="Road Season Head"
        name="Jacob Steinfeld"
        pronouns="he/him"
        email="Jacob.Steinfeld@uvm.edu"
      />
    </div>
  )
}

export default ProfileContainer
