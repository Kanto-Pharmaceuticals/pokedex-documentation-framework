/**
 * navbar.js
 * Creates a navbar function to be used in the global layout.
 * References:
 * - https://blog.logrocket.com/create-responsive-navbar-react-css/
 */

/* Begin React import statements */
import React from "react"
import { Link } from "gatsby"
import { Menu, LogIn, LogOut, Search } from "react-feather"
import { motion } from "framer-motion"
import Fullmark from "../../images/fullmark.inline.svg"
import Wordmark from "../../images/wordmark.inline.svg"
import "./navbar.scss"

/* Export the navbar as the default function */
export default function Navbar(props) {
  const { isMenuExpanded, setMenuExpanded } = props
  const { keycloak, intialized } = props

  return (
    <nav className="navigation">
      <div className="navigation-left">
        <motion.button
          aria-label="Hamburger menu button"
          className="navigation-button"
          onClick={() => {
            setMenuExpanded(!isMenuExpanded)
          }}
          initial={{
            backgroundColor: "var(--color-white)",
            color: "var(--color-text)",
          }}
          whileHover={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
          whileTap={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.1,
            },
          }}
        >
          <Menu />
          <span>Menu</span>
        </motion.button>
      </div>
      <div className="navigation-center">
        <Link
          aria-label="Pokédex Documentation home link button"
          to="/"
          className="brand-name"
        >
          <Wordmark className="brand-logo navigation-wordmark" />
          <Fullmark className="brand-logo navigation-fullmark" />
        </Link>
        <motion.button
          aria-label="Search button"
          className="navigation-button"
          initial={{
            backgroundColor: "var(--color-white)",
            color: "var(--color-text)",
          }}
          whileHover={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
          whileTap={{
            backgroundColor: "var(--color-text)",
            color: "var(--color-white)",
            transition: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.1,
            },
          }}
        >
          <Search />
        </motion.button>
      </div>
      <div className="navigation-right">
        {!keycloak.authenticated && (
          <motion.button
            aria-label="Log in button"
            className="navigation-button"
            onClick={() => keycloak.login()}
            initial={{
              backgroundColor: "var(--color-white)",
              color: "var(--color-text)",
            }}
            whileHover={{
              backgroundColor: "var(--color-text)",
              color: "var(--color-white)",
              transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.2,
              },
            }}
            whileTap={{
              backgroundColor: "var(--color-text)",
              color: "var(--color-white)",
              transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.1,
              },
            }}
          >
            <LogIn />
            <span>Log In</span>
          </motion.button>
        )}
        {!!keycloak.authenticated && (
          <motion.button
            aria-label="Log out button"
            className="navigation-button"
            onClick={() => keycloak.logout()}
            initial={{
              backgroundColor: "var(--color-white)",
              color: "var(--color-text)",
            }}
            whileHover={{
              backgroundColor: "var(--color-text)",
              color: "var(--color-white)",
              transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.2,
              },
            }}
            whileTap={{
              backgroundColor: "var(--color-text)",
              color: "var(--color-white)",
              transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.1,
              },
            }}
          >
            <LogOut />
            <span>Log Out</span>
          </motion.button>
        )}
      </div>
    </nav>
  )
}
