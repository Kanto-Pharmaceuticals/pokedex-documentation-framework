/**
 * layout.js
 * Defines the layout wrapper for all pages.
 */

/* Begin React import statements */
import * as React from "react"
import Navbar from "../navbar"

/* Define Layout as a const, keep compact and minimal. */
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navbar />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Kanto Pharmaceuticals</footer>
    </div>
  )
}

/* Export the Layout as the default. */
export default Layout
