import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import avatarStyles from "./avatar.module.css"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
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
        <Img
          className={`avatar ${avatarStyles.avatar}`}
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
        ></Img>
      )
    }}
  />
)

export default Image
