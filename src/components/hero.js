import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"
import heroStyles from "./hero.module.css"
import Logo from "./logo"

const Hero = () => {
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className={`hero-image ${heroStyles.heroImage}`}
      fluid={image.placeholderImage.childImageSharp.fluid}
    >
      <Logo />
    </Img>
  )
}

export default Hero
