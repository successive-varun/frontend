import { React } from "react";
import { PureComponent } from "react";

import PropTypes from "prop-types";

export default class ButtonField extends PureComponent {
  render() {

    console.log("this.props", this.props);

    const {
      inputValue,
      disabled,
      onClick,
      style,
    } = this.props;

    return (
      <div className="submitBtnContainer">
        <input 
          value = "SUBMIT"
          style = { style } 
          onClick = { onClick } 
          disabled = { disabled } 
          type = "button" 
          inputValue = { inputValue }
        />
      </div>
    );
  }
}

//  set up type checking
ButtonField.propTypes = {
  inputValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.objectOf.isRequired,
  onClick: PropTypes.func.isRequired,
};
