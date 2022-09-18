/**
 * index.js
 * The homepage for the Pokédex documentation.
 */

/* Begin React import statements */
import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

/* Define as a react function (rfc) */
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <h4>Getting start with the Pokédex</h4>
      <p>
        Kanto Pharmaceuticals (a non-commercial{" "}
        <a href="https://github.com/Kanto-Pharmaceuticals">
          GitHub organization
        </a>
        ) is developing a modernized Pokédex using a typical MERN stack to
        catalogue and provide data on all the species of Pokémon featured in the
        video game, anime and manga series.
      </p>
      <h5>Installation</h5>
      <p>
        The Pokédex project is split into two submodules,{" "}
        <code>`pokedex-*`</code> and <code>`pokedex-documentation-*`</code>,
        which represent the full stack React app and a Gatsby React app for
        documentation of it respectively.{" "}
      </p>
    </Layout>
  )
}
export default BlogIndex

/* Head export to define metadata for the page */
export const Head = () => <Seo title="Getting start with the Pokédex" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
