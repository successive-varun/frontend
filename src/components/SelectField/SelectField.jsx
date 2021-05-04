import { React } from "react";
import { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SelectField extends PureComponent {
  constructor(props) {
    super(props);
    // default statte
    this.state = {
      isError: false,
    };
  }

  handleChangeSelect = (event) => {
    const { selectField } = this.props;
    // const value = event.tager.value;
    selectField(event.target.value);
    if (event.target.value === "Select") {
      this.setState({
        isError: true,
      });
      return;
    }
    this.setState({
      isError: false,
    });
  }

  render() {
    const { isError } = this.state;
    const { sport } = this.props;
    return (
      <div className = "selectFld">
        <h4 style = {{ marginBottom: "10px" }}> 
          Select the game you play 
        </h4>

        <select 
          style = {{padding: "10px", fontSize: "16px"}}
          value = { (sport) ? sport : "Select" } 
          onChange = { this.handleChangeSelect }
        >
          <option value = "Select"> Select </option> 
          {/* option 1 */}
          <option value = "Football"> Football </option>
          {/* option 2 */}
          <option value = "Cricket"> Cricket </option> 
        </select>
        { (isError) ? <p style = {{ color: "red" }}> requrired field: cannot be empty </p> : "" }
      </div>
    );
  }
}

// setup type checking
SelectField.propTypes = {
  selectField: PropTypes.func.isRequired,
  sport: PropTypes.string.isRequired,
};
