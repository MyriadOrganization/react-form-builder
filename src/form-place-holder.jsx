import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

const PLACE_HOLDER = "form-place-holder";
const PLACE_HOLDER_HIDDEN = "form-place-holder-hidden";

class PlaceHolder extends React.Component {
  render() {
    const { intl } = this.props;
    const placeHolderClass = PLACE_HOLDER;
    // eslint-disable-next-line no-nested-ternary
    const placeHolder =
      this.props.text === "DROP COMPONENTS HERE"
        ? intl.formatMessage({ id: "drop-zone" })
        : this.props.text;

    return (
      <div className={placeHolderClass}>
        <div className="placeholder_text">{placeHolder}</div>
      </div>
    );
  }
}

export default injectIntl(PlaceHolder);
PlaceHolder.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
};

PlaceHolder.defaultProps = {
  text: "DROP COMPONENTS HERE",
  show: false,
};
