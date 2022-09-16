/**
 * switch.js
 * Creates a menu function to be used with the navbar component.
 */

import React from "react"
import Switch from "react-switch"

const BasicHooksExample = ({
  id,
  name,
  checked,
  onChange,
  label,
  optionLabels,
  small,
  disabled,
}) => {
  return (
    <div className="example">
      <label>
        <span>{label}</span>
        <Switch
          id={id}
          name={name}
          onChange={onChange}
          checked={checked}
          className="react-switch"
        />
      </label>
    </div>
  )
}

export default BasicHooksExample
