import { React, PureComponent } from "react";
import PropTypes from "prop-types";

export default class TextField extends PureComponent {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      errorType: "",
    };
  }

  // handel the check for errorType (if any found, update errorType)
  handleCheckError = () => {
    const { playerName } = this.props;
    // field is touched, but no value input
    if (playerName.length === 0) {
      this.setState({
        errorType: "isTouched",
      });
      return;
    }
    // field is touched, but no value input or less than 3 chars
    if (playerName.length && playerName.length < 3) {
      this.setState({
        errorType: "charError",
      });
      return;
    }
    this.setState({
      errorType: "",
    });
  }

  // handle the input field change
  handleInputChange = (event) => {
    const { textField } = this.props;
    textField(event.target.value);
  }


  render() {
    const { playerName } = this.props;
    const { errorType } = this.state;
    return (
      <div className = "TextField">
        <h4 style = {{ marginBottom: "10px"}}>
          Name
        </h4>
        <input 
          style = {{ fontSize: "16px" }}
          className={ errorType } 
          value = { playerName } placeholder = "Player Name" 
          onChange = { this.handleInputChange } 
          onBlur = { this.handleCheckError } 
        />
        {/* no input value error */}
        { errorType === "isTouched"  &&  <p style = {{ color: "coral", fontSize: "14px" }}> Player Name is a required Field </p> }
        {/* less than 3 charaters value error */}
        { errorType === "charError"  &&  <p style = {{ color: "red", fontSize: "14px" }}> Should be atleast 3 characters </p> }
      </div>
    );
  }
}

//   set up type checking
TextField.propTypes = {
  textField: PropTypes.func.isRequired,
  playerName: PropTypes.string.isRequired,
};
