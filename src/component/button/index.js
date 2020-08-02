import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class ButtonComponent extends React.Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { buttonText } = this.props;

    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        ButtonComponent
      </button>
    );
  }
}
ButtonComponent.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
export default ButtonComponent;
