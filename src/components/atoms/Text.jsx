import {setInvalidOptionError} from "../../utils/errors/setInvalidOptionError"
import {assertOptIsInvalid} from "../../utils/assertOptIsInvalid"
import PropTypes from 'prop-types'

const types = new Map()
types.set("semibold", "text--semi-bold")

const colors = new Map()
colors.set("green", "text--green")

const aligns = new Map();
aligns.set("center", 'text--center')

const props = new Map()
props.set('type', types)
props.set('color', colors)
props.set('align', aligns)

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export default function Text({children, type, color, align}) {  
  const args = Object.entries(arguments[0])
  let styles = ""

  args.forEach(([prop, value]) => {
    if (prop !== 'children') {
      const style = props.get(prop)
      // prop is the given option by the user
      // availableOptions is the hashMap of available attributes
      assertOptIsInvalid(value, style, () => setInvalidOptionError(value))
      styles += `${style.get(value)} `
    }
  })
  
  return (
    <p className={`${styles}`}>{children}</p>
  )
}

Text.proptypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
}