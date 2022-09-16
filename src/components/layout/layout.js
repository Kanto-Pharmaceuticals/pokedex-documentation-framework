/**
 * layout.js
 * Defines the layout wrapper for all pages.
 */

/* Begin React import statements */
import * as React from "react"
import { useState } from "react"
import { useKeycloak } from "@react-keycloak/web"
import Navbar from "../navbar"
import Menu from "../menu"

/* Define Layout as a const, keep compact and minimal. */
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const { keycloak, initialized } = useKeycloak()
  const [isMenuExpanded, setMenuExpanded] = useState(false)
  const closeMenu = () => {
    isMenuExpanded && setMenuExpanded(false)
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navbar
        isMenuExpanded={isMenuExpanded}
        setMenuExpanded={setMenuExpanded}
        keycloak={keycloak}
        initialized={initialized}
      />
      <Menu
        isMenuExpanded={isMenuExpanded}
        setMenuExpanded={setMenuExpanded}
        closeMenu={closeMenu}
        keycloak={keycloak}
        initialized={initialized}
      />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Kanto Pharmaceuticals</footer>
    </div>
  )
}

/* Export the Layout as the default. */
export default Layout
