import React from "react"
import Social from "./social"
import Logo from "./Logo"
import FooterStyles from "./footer.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaStrava,
  FaEnvelope,
  FaBicycle,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={`footer ${FooterStyles.footer}`}>
      <div className={FooterStyles.horizontalContainer}>
        <div className={FooterStyles.linksContainer}>
          <Social
            link="https://www.facebook.com/UVMcycling/"
            text="@UVMcycling"
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
          <Social
            link="https://list.uvm.edu/cgi-bin/wa?A0=UVMCYCLING"
            text="UVM Cycling ListServ"
          >
            <FaEnvelope />
          </Social>
        </div>
        <Logo />
      </div>
      <div className={FooterStyles.copyright}>
        © {new Date().getFullYear()} UVM Cycling &nbsp;|&nbsp; Developed
        by&nbsp;
        <a href="https://github.com/lukefredrickson" target="_blank">
          Luke Fredrickson
        </a>
      </div>
    </footer>
  )
}

export default Footer
