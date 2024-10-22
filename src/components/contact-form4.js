import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form4.css'

const ContactForm4 = (props) => {
  return (
    <div className="contact-form4-contact9 thq-section-padding">
      <div className="thq-section-max-width thq-flex-row contact-form4-max-width">
        <div className="contact-form4-content1 thq-flex-column">
          <div className="contact-form4-section-title thq-card">
            <div className="contact-form4-content2">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact-form4-text17 thq-heading-2">
                      Contact us
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form4-text18 thq-body-small">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form4-input1">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-4-name"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-input2">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-4-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-container">
              <label
                htmlFor="contact-form-4-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-4-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form4-checkbox1">
              <input
                type="checkbox"
                id="contact-form-4-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-4-check"
                className="contact-form4-text15 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form4-button thq-button-filled"
            >
              <span>
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form4-text16 thq-body-small">
                      Submit
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm4.defaultProps = {
  action: undefined,
  heading1: undefined,
  content1: undefined,
}

ContactForm4.propTypes = {
  action: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default ContactForm4
