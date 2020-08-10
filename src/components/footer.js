import React from "react"
import FooterStyles from "./footer.module.css"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaStrava } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={`footer ${FooterStyles.footer}`}>
      <FaFacebook />
      <FaInstagram />
      <FaInstagram />
      <FaStrava />
      <FaEnvelope />
      <div>© {new Date().getFullYear()} UVM Cycling</div>
      <div></div>
    </footer>
  )
}

export default Footer
