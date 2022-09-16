/**
 * menu.js
 * Creates a menu function to be used with the navbar component.
 */

/* Begin React import statements */
import React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { X, Home, Smartphone, GitHub, LogIn, Settings } from "react-feather"
import { links } from "./menu-links"
import "./menu.scss"

/* Export the menu as the default function */
export default function Menu(props) {
  /* Lifted state is in layout */
  const { isMenuExpanded, setMenuExpanded } = props
  const { closeMenu } = props
  const { keycloak, intialized } = props
  /* Framer config for list variant */
  const framerList = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }
  /* Framer config for list items */
  const framerListItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  /* Insert overflow hidden when menu is expanded */
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = isMenuExpanded ? "hidden" : "auto"
  }, [isMenuExpanded])

  return (
    <motion.div className="menu">
      <AnimatePresence>
        {isMenuExpanded && (
          <motion.div
            className="menu-modal"
            initial={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(16px)",
            }}
            exit={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.3,
            }}
          >
            <motion.div
              className="menu-card"
              initial={{
                boxShadow: "var(--drop-shadow-none)",
                left: "calc(var(--size-26) * -1)",
              }}
              animate={{
                boxShadow: "var(--drop-shadow-2xl)",
                left: "0px",
              }}
              exit={{
                boxShadow: "var(--drop-shadow-none)",
                left: "calc(var(--size-26) * -1)",
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.3,
              }}
            >
              <div className="menu-close">
                <motion.button
                  aria-label="Close menu button"
                  className="navigation-button"
                  onClick={() => {
                    setMenuExpanded(!isMenuExpanded)
                  }}
                  initial={{
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-text)",
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.1,
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
                  <X />
                </motion.button>
              </div>

              <div className="noscroll">
                <motion.ul
                  className="menu-list"
                  variants={framerList}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <motion.li
                    className="menu-items"
                    onClick={closeMenu}
                    variants={framerListItem}
                  >
                    <motion.button
                      aria-label="Home menu button"
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
                      <Home />
                      <Link to="/">Home</Link>
                    </motion.button>
                  </motion.li>
                  <motion.li
                    className="menu-items"
                    onClick={closeMenu}
                    variants={framerListItem}
                  >
                    <motion.button
                      aria-label="Pokedex menu button"
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
                      <Smartphone />
                      <Link to="/">Pokédex</Link>
                    </motion.button>
                  </motion.li>
                  <li className="menu-spacer" />
                  {links.map((link, index) => {
                    return (
                      <motion.li
                        className="menu-items"
                        key={index}
                        onClick={closeMenu}
                        variants={framerListItem}
                      >
                        <motion.button
                          aria-label="Menu links button"
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
                          {link.icon}
                          <Link to={link.url}>{link.title}</Link>
                        </motion.button>
                      </motion.li>
                    )
                  })}
                  <li className="menu-spacer" />
                  <motion.li
                    className="menu-items"
                    onClick={closeMenu}
                    variants={framerListItem}
                  >
                    {!keycloak.authenticated && (
                      <motion.button
                        aria-label="Log in menu button"
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
                        Log In
                      </motion.button>
                    )}
                    {!!keycloak.authenticated && (
                      <motion.button
                        aria-label="Settings menu button"
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
                        <Settings />
                        <Link to="/admin-console">Admin Console</Link>
                      </motion.button>
                    )}
                  </motion.li>
                  <motion.li
                    className="menu-items"
                    onClick={closeMenu}
                    variants={framerListItem}
                  >
                    <motion.button
                      aria-label="Home menu button"
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
                      <GitHub />
                      <a href="https://github.com/Kanto-Pharmaceuticals/pokedex-documentation-framework">
                        GitHub Repository
                      </a>
                    </motion.button>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
