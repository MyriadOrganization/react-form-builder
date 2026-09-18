/**
  * <FormValidator />
  */

import React from 'react';
import IntlMessages from './language-provider/IntlMessages';
import Icon from './Icons/Icon';

export default class FormValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
  }

  componentDidMount() {
    this.subscription = this.props.emitter.addListener('formValidation', (errors) => {
      this.setState({ errors });
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  dismissModal(e) {
    e.preventDefault();
    this.setState({ errors: [] });
  }

  render() {
    const errors = this.state.errors.map((error, index) => <li key={`error_${index}`} className="validation-error__item">{error}</li>);

    return (
      <div>
        { this.state.errors.length > 0 &&
          <div className="alert alert-danger validation-error">
            <div className="clearfix validation-error__header">
              <span className="float-left"><Icon icon="warning" /></span>
              <span className="validation-error__title"><IntlMessages id="message.validation-title" /></span>
            </div>
            <div className="clearfix validation-error__list">
              <ul className="float-left">
                {errors}
              </ul>
            </div>
            <div className="clearfix validation-error__actions">
              <a className="float-right btn btn-default btn-sm btn-danger" onClick={this.dismissModal.bind(this)}><IntlMessages id="dismiss" /></a>
            </div>
          </div>
        }
      </div>
    );
  }
}
