import React from "react"
import Social from "./social"
import Logo from "./logo"
import FooterStyles from "./footer.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaStrava,
  FaEnvelope,
  FaBicycle,
  FaGlobe,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={`footer ${FooterStyles.footer}`}>
      <div className={FooterStyles.horizontalContainer}>
        <div className={FooterStyles.linksContainer}>
          <Social
            link="https://thelynx.campuslabs.com/engage/organization/uvm-cycling"
            text="UVM Clubs Page"
          >
            <FaGlobe />
          </Social>
          <Social
            link="https://list.uvm.edu/cgi-bin/wa?A0=UVMCYCLING"
            text="UVM Cycling ListServ"
          >
            <FaEnvelope />
          </Social>
          <Social
            link="https://www.facebook.com/UVMcycling/"
            text="@UVMcycling"
          >
            <FaFacebook />
          </Social>
          <Social
            link="https://www.facebook.com/groups/835039289944035/"
            text="UVM Women's Cycling"
          >
            <FaFacebook />
          </Social>
          <Social
            link="https://www.instagram.com/uvmcycling/"
            text="@uvmcycling"
          >
            <FaInstagram />
          </Social>
          <Social
            link="https://www.instagram.com/uvmwomenscycling/"
            text="@uvmwomenscycling"
          >
            <FaInstagram />
          </Social>
          <Social link="https://twitter.com/UVM_cycling" text="@UVM_cycling">
            <FaTwitter />
          </Social>
          <Social
            link="https://www.strava.com/clubs/uvm-cycling-team-1481"
            text="UVM Cycling Team"
          >
            <FaStrava />
          </Social>
          <Social
            link="https://www.facebook.com/groups/1882276192047346/"
            text="Group Ride-Board"
          >
            <FaBicycle />
          </Social>
        </div>
        <Logo />
      </div>
      <div className={FooterStyles.copyright}>
        © {new Date().getFullYear()} UVM Cycling &nbsp;|&nbsp; Developed
        by&nbsp;
        <a
          href="https://github.com/lukefredrickson"
          rel="noreferrer"
          target="_blank"
        >
          Luke Fredrickson
        </a>
      </div>
    </footer>
  )
}

export default Footer
