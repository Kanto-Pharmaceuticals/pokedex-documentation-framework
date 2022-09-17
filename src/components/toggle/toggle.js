/**
 * toggle.js
 * Creates a toggle switch that can be used in other components, prop types are
 * documented inline with code.
 */

/* Begin React import statements */
import React from "react"
import PropTypes from "prop-types"
import "./toggle.scss"

const ToggleSwitch = ({
  id, // (REQUIRED)
  name,
  checked, // does not contain it's own internal state (REQUIRED)
  onChange, // does not contain it's own interal function (REQUIRED)
  optionLabels, // redundant, left in for posterity
  small,
  disabled, // to disable to the toggleswitch
  label, // the label outside of the toggle
  labelOn, // the label inside on the left
  labelOff, // the label inside on the right
  IconOn, // pass component as props
  IconOff, // pass component as props
  DisableOutline, // disable the outline around the switch
}) => {
  /* Ability to toggle using keypress */
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return

    e.preventDefault()
    onChange(!checked)
  }
  /* Stores the conditional style to disable the switch outline */
  const styles = {
    switch: {
      boxShadow: DisableOutline && "none",
    },
  }

  return (
    <div className="toggle-wrapper">
      {/* Outside Label */}
      {label && <label htmlFor={id}>{label}</label>}
      <div className={"toggle-switch" + (small ? " small-switch" : "")}>
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id ? (
          <label
            className="toggle-switch-label"
            tabIndex={disabled ? -1 : 1}
            onKeyDown={e => handleKeyPress(e)}
            htmlFor={id}
          >
            {/* Inside label to the left */}
            <span
              className={
                labelOn
                  ? "toggle-switch-before"
                  : "toggle-switch-before toggle-switch-labels-hide"
              }
            >
              {IconOn && <IconOn />}
              {labelOn ? `${labelOn}` : "On"}
            </span>
            <span
              className={
                disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex={-1}
            />
            <span
              style={styles.switch}
              className={
                disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
              tabIndex={-1}
            />
            {/* Inside label to the right */}
            <span
              className={
                labelOff
                  ? "toggle-switch-after"
                  : "toggle-switch-after toggle-switch-labels-hide"
              }
            >
              {IconOff && <IconOff />}
              {labelOff ? `${labelOff}` : "Off"}
            </span>
          </label>
        ) : null}
      </div>
    </div>
  )
}

/* Set optionLabels for rendering */
ToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"],
}

/* Set the prop types for the component */
ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
}

/* Export the ToggleSwitch as the default */
export default ToggleSwitch
