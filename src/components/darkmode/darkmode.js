/**
 * darkmode.js
 * Returns a toggle to switch between dark and light mode using use-dark-mode.
 * References:
 * - https://github.com/donavon/use-dark-mode#parameters
 * - https://www.gatsbyjs.com/plugins/gatsby-plugin-use-dark-mode/
 */

/* Begin React import statements */
import React from "react"
import useDarkMode from "use-dark-mode"
import Toggle from "../toggle"
import "./darkmode.scss"

/* Define const to store/morph/persist darkMode state, & toggle to change it. */
const Darkmode = ({ className, size, sunColor, moonColor }) => {
  const darkMode = useDarkMode(false, {
    onChange: state => {
      const htmlElement = document.documentElement
      const bodyElement = document.body
      if (state) {
        htmlElement.classList.add("dark-mode")
        htmlElement.classList.remove("light-mode")
        bodyElement.classList.remove("dark-mode")
        bodyElement.classList.remove("light-mode")
      } else {
        htmlElement.classList.add("light-mode")
        htmlElement.classList.remove("dark-mode")
        bodyElement.classList.remove("light-mode")
        bodyElement.classList.remove("dark-mode")
      }
    },
  })
  return (
    <div className={`${className}` + " darkmode-toggle"}>
      <Toggle
        optionLabels={["Dark", "Light"]}
        id="darkmode-toggle"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor="darkmode-toggle">Dark Mode</label>
    </div>
  )
}

/* Export Darkmode as the default */
export default Darkmode
