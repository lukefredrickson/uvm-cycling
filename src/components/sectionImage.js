import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionImageStyles from "./sectionImage.module.css"

const SectionImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
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
        <div
          className={`${SectionImageStyles.container} ${
            props.left
              ? SectionImageStyles.containerLeft
              : SectionImageStyles.containerRight
          }`}
        >
          <Img
            className={`image ${SectionImageStyles.image}`}
            alt={props.alt}
            fluid={image.node.childImageSharp.fluid}
          />
          <div className={`${SectionImageStyles.textContainer}`}>
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
        </div>
      )
    }}
  />
)

export default SectionImage
