import React from "react"
import PropTypes from "prop-types"
import "./toggle.scss"

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
  label,
  labelOn,
  labelOff,
  IconOn,
  IconOff,
}) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return

    e.preventDefault()
    onChange(!checked)
  }

  return (
    <div className="toggle-wrapper">
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
              className={
                disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
              tabIndex={-1}
            />
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

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"],
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default ToggleSwitch
