import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta8.css'

const CTA8 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta8-container2">
          <div className="cta8-content">
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta8-text3">TeleportHQ</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="cta8-text4 thq-body-large">
                  Plataforma AI que converte esboços em códigos HTML/CSS.
                </p>
              </Fragment>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

CTA8.defaultProps = {
  action2: undefined,
  content1: undefined,
}

CTA8.propTypes = {
  action2: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA8
