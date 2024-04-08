import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */
export default function Link({children, href}) {
  return (
    <a className='link' href={href}>{children}</a>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired
}
