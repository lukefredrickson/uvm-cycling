import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SponsorsStyles from "./sponsors.module.css"
import Img from "gatsby-image"

const SponsorImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <a
          className={SponsorsStyles.link}
          href={props.link}
          rel="noreferrer"
          target="_blank"
        >
          <Img
            className={`sponsor ${SponsorsStyles.image}`}
            alt={props.alt}
            fluid={image.node.childImageSharp.fluid}
          ></Img>
        </a>
      )
    }}
  />
)

export default SponsorImage
