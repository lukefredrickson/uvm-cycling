import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"
import heroStyles from "./hero.module.css"

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
      <div className={`cover-text-container ${heroStyles.coverTextContainer}`}>
        <h1 className={`cover-text ${heroStyles.coverText}`}>UVM Cycling</h1>
        <h3
          className={`cover-text-subtitle ${heroStyles.coverText} ${heroStyles.coverTextSubtitle}`}
        >
          East Coast's Finest
        </h3>
      </div>
    </Img>
  )
}

export default Hero
