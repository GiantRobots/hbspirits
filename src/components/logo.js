import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "HBSpirits.png" }) {
          childImageSharp {
            fixed(width: 56, height: 66) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{
          width: 55,
          height: 66,
          position: 'relative',
          display: 'inline-block',
          marginBottom: -10,
        }}
        fluid={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
)
export { Logo }
export default Logo
