import { React } from "react";
import { PureComponent } from "react";

// Import other components
import {
  TextField,
  SelectField,
  RadioBtnGroup,
  SubmitButtonField,
} from "../../components";

export default class InputFieldDemo extends PureComponent {
  constructor() {
    super();

    // default state
    this.state = {
      playerName: "",
      sport: "",
      football: "",
      cricket: "",
    };
  }

  // player names text field
  handleTextField = (inputValue) => {

    this.setState({
      playerName: inputValue,
    });
  }

  // handle radio button field to select the sport
  handleRadioField = (inputValue) => {

    const { sport } = this.state;

    if (sport === "Cricket") {
      this.setState({
        football: "",
        cricket: inputValue,
      });
    } else {
      this.setState({
        football: inputValue,
        cricket: "",
      });
    }
  }

  // to select the sports field
  handleSelectField = (inputValue) => {

    if (inputValue === 'Select') {
      this.setState({
        sport: "",
        football: "",
        cricket: "",
      });
      return;
    }

    this.setState({
      sport: inputValue,
      football: "",
      cricket: "",
    });
  }

  // handle the button click
  handleSubmitButtonClick = () => {
    
    console.log(this.state);
  }

  render() {

    // console.log("this.state", this.state);

    const {
      playerName,
      sport,
      football,
      cricket,
    } = this.state;

    // console.log("isError", isError);

    // check for missing player name or sport or cricket and football
    const isError = ( !playerName || !sport || (!cricket && !football) );

    console.log("isError", isError);
    console.log("this.state", this.state);

    return (
      <div className = "InputFieldsContainer">
        {/* TextField  */}
        <TextField 
          textField = { this.handleTextField } 
          playerName = { playerName } 
          style = {{ padding: "20px" }}
        />
        {/* SelectField  */}
        <SelectField 
          selectField = { this.handleSelectField } 
          sport = { sport } />
        {/* group of RadioBtns */}
        <RadioBtnGroup
          changeRadio = { this.handleRadioField }
          sport = { sport }
          football = { football }
          cricket = { cricket }
        />
        {/* form Submit button */}
        <SubmitButtonField
          value = "Submit"
          style = {{ marginTop: "20px", padding: "10px 20px" }}
          onClick = { this.handleSubmitButtonClick }
          // disble submit btn if error
          disabled = { isError }
        />
      </div>
    );
  }
}
