import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer3.css'

const Footer3 = (props) => {
  return (
    <footer className="footer3-footer4 thq-section-padding">
      <div className="footer3-max-width thq-section-max-width">
        <div className="footer3-content">
          <div className="footer3-logo">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer3-image1"
            />
          </div>
          <div className="footer3-links"></div>
          <div className="footer3-social-links">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-small"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </div>
        </div>
        <div className="footer3-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer3-row">
            <div className="footer3-footer-links">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
              <span>
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer3-text2 thq-body-small">
                      Privacy Policy
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer3-text1 thq-body-small">
                      Terms and Conditions
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer3-text3 thq-body-small">
                      Cookies Policy
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer3.defaultProps = {
  termsLink: undefined,
  privacyLink: undefined,
  logoAlt: 'Company Logo',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  cookiesLink: undefined,
}

Footer3.propTypes = {
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  cookiesLink: PropTypes.element,
}

export default Footer3
