import {assertOptIsInvalid} from '../../utils/assertOptIsInvalid'
import {setInvalidOptionError} from '../../utils/errors/setInvalidOptionError'
import PropTypes from 'prop-types'

const sizes = new Map()
sizes.set("", "")
sizes.set("medium", "img--medium")

/* eslint-disable react/prop-types */
export default function ImgRounded({size="", src, alt}) {
  assertOptIsInvalid(size, sizes, () => setInvalidOptionError(size))

  return (
    <img className={`img ${sizes.get(size)} rounded`} src={src} alt={alt} />
  )
}

ImgRounded.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}