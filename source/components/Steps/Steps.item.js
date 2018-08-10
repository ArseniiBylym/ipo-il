import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../_HOC/lang.hoc'

StepsItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  isPassed: PropTypes.bool,
  isCheck: PropTypes.bool,
  lastStepIndex: PropTypes.number,
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function StepsItem(props) {

  const setClassName = () => {
    const {isActive, isPassed, index, lastStepIndex, isCheck} = props

    if (isActive && index === lastStepIndex) return `step__item step__item--passed`
    if (isActive && !isCheck) return `step__item step__item--default`
    if (isActive) return `step__item`
    if (isPassed) return `step__item step__item--passed`
    return `step__item step__item--default`
  }

  const {title, index, dir} = props
  return (
    <li className={setClassName()} dir={dir}>
      <div className="steps__title">{title}</div>
      <div className="steps__number-wrapper">
        <div className="steps__number">{index + 1} step</div>
      </div>
    </li>
  )

}

export default multiLang(StepsItem)