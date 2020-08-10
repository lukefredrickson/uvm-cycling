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
        filename="luke.jpg"
        title="Cyclocross Coordinator"
        name="Luke Fredrickson"
        pronouns="he/him"
        email="Luke.Fredrickson@uvm.edu"
      />
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
        filename="luke.jpg"
        title="Cyclocross Coordinator"
        name="Luke Fredrickson"
        pronouns="he/him"
        email="Luke.Fredrickson@uvm.edu"
      />
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
        filename="luke.jpg"
        title="Cyclocross Coordinator"
        name="Luke Fredrickson"
        pronouns="he/him"
        email="Luke.Fredrickson@uvm.edu"
      />
    </div>
  )
}

export default ProfileContainer
