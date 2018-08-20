import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './PageLogo.style.styl'

PageLogo.propTypes = {
  logo: PropTypes.string
}

function PageLogo(props) {

  const render = function () {
    const {logo} = props

    if(!logo) return null
    return (
      <Fragment>
        <img src={logo}
          alt="investing in public offerings"
          width="72"
          height="50"
        />
        <span className="page-logo__text">investing in public offerings</span>
      </Fragment>
    )
  }

  return (
    <Link className="page-logo" to={`/home`}>
      {render()}
    </Link>
  )

}

export default PageLogo