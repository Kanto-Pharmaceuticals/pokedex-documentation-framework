/**
 * menu-links.js
 * Creates a navbar function to be used in the global layout.
 * References:
 * - https://blog.logrocket.com/create-responsive-navbar-react-css/
 */

/* Begin React import statements */
import React from "react"
import {
  Grid,
  Codesandbox,
  Layout,
  Layers,
  Book,
  LifeBuoy,
} from "react-feather"

/* Store link urls and meta as const */
export const links = [
  {
    title: "Design System",
    url: "/design-system",
    icon: <Grid />,
    isExternal: false,
  },
  {
    title: "Components",
    url: "/components",
    icon: <Codesandbox />,
    isExternal: false,
  },
  {
    title: "Patterns",
    url: "/patterns",
    icon: <Layout />,
    isExternal: false,
  },
  {
    title: "Stack / Services",
    url: "/stack-services",
    icon: <Layers />,
    isExternal: false,
  },
  {
    title: "Usage Instructions",
    url: "/usage-instructions",
    icon: <Book />,
    isExternal: false,
  },
  {
    title: "Help / Feedback",
    url: "/help-feedback",
    icon: <LifeBuoy />,
    isExternal: false,
  },
]

/* Export links as the default */
export default links
