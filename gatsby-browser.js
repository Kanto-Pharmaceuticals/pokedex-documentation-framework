/**
 * gatsby-browser.js
 * Lets you respond to client side Gatsby-specific events within the browser,
 * and wrap your page components in additional global components.
 */

/* Begin React import statements */
import React from "react"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "./src/components/keycloak"

/* Begin CSS import statements, ordering is important. */
import "./src/normalize.css" // normalize all browsers
import "./src/palette.css" // palette colours
import "./src/typography.css" // custom @font-face definitions
import "./src/style.css" // global styles and utility
import "prismjs/themes/prism.css" // prismjs syntax highlighting

/* Loading element, to signal the client they have landed. */
const Loading = () => (
  <div className="init">
    <p>Initializing server side rendering...</p>
  </div>
)

/* Wraps root element in an keycloak instance for site-wide authentication. */
export const wrapRootElement = ({ element }) => {
  return (
    <ReactKeycloakProvider authClient={keycloak} LoadingComponent={<Loading />}>
      {element}
    </ReactKeycloakProvider>
  )
}
