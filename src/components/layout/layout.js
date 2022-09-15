import * as React from "react"
import Navbar from "../navbar"

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

export default Layout
