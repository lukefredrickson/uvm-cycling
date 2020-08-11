import React from "react"
import ProfileCard from "../components/profileCard"
import ProfileContainerStyles from "../components/profileContainer.module.css"

const ProfileContainer = () => {
  return (
    <div className={`profile-cards ${ProfileContainerStyles.cards}`}>
      <ProfileCard
        filename="sara.jpg"
        title="President"
        name="Sara Spencer"
        pronouns="she/her"
        email="Sara.Spencer@uvm.edu"
      />
      <ProfileCard
        filename="robert.jpg"
        title="Vice President"
        name="Robert Watt"
        pronouns="he/him"
        email="Robert.Watt@uvm.edu"
      />
      <ProfileCard
        filename="sammy.jpg"
        title="Coach"
        name="Sammy Hedlund"
        pronouns="he/him"
        email="hedlund.sammy@gmail.com"
      />
      <ProfileCard
        filename="emily.jpg"
        title="Women's Team Head"
        name="Emily Adams"
        pronouns="she/her"
        email="Emily.Adams@uvm.edu"
      />
      <ProfileCard
        filename="sofie.jpg"
        title="Women's Team Head"
        name="Sofie Pedemonti"
        pronouns="she/her"
        email="Sofie.Pedemonti@uvm.edu"
      />
      <ProfileCard
        filename="nolan.jpg"
        title="Sponsorship Coordinator"
        name="Nolan Rogers"
        pronouns="he/him"
        email="Nolan.Rogers@uvm.edu"
      />
      <ProfileCard
        filename="clayton.jpg"
        title="MTB Home Race Coordinator"
        name="Clayton Schroeder"
        pronouns="he/him"
        email="Clayton.Schroeder@uvm.edu"
      />
      <ProfileCard
        filename="carl.jpg"
        title="Mountain Season Head"
        name="Carl Betz"
        pronouns="he/him"
        email="Carl.Betz@uvm.edu"
      />
      <ProfileCard
        filename="luke.jpg"
        title="Cyclocross Season Head"
        name="Luke Fredrickson"
        pronouns="he/him"
        email="Luke.Fredrickson@uvm.edu"
      />
      <ProfileCard
        filename="nick.jpg"
        title="Road Season Head"
        name="Nick Koleszar"
        pronouns="he/him"
        email="Nicholas.Koleszar@uvm.edu"
      />
    </div>
  )
}

export default ProfileContainer
