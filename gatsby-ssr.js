/**
 * gatsby-ssr.js
 * Lets you alter the content of static HTML files as they are being
 * Server-Side Rendered (SSR) by Gatsby and Node.js.
 */

/* Begin React import statements */
import React from "react"
import { ReactKeycloakProvider } from "@react-keycloak/web"

/* Wraps root element in an empty keycloak instance for SSR */
export const wrapRootElement = ({ element }) => {
  return (
    <ReactKeycloakProvider
      authClient={{}} //an empty object instead of the keycloak instance for the static HTML pages
      initOptions={{
        onLoad: "login-required",
      }}
    >
      {element}
    </ReactKeycloakProvider>
  )
}

/* Set HTML Attributes here */
const HtmlAttributes = {
  lang: "en",
}

/* Set head elements here */
const HeadComponents = [
  <link rel="preconnect" href="https://keycloak.mattycakes.ca" />,
]

/* Wraps the above around body on page render. */
export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents(HeadComponents)
  setHtmlAttributes(HtmlAttributes)
}
