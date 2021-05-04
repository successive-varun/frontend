import { React } from "react";
import { PureComponent } from "react";

import PropTypes from "prop-types";

export default class RadioBtnGroup extends PureComponent {
  constructor(props) {
    super(props);

    console.log("this.props", this.props);

    const { sport } = this.props;

    // default state
    this.state = {
      radioError: false,
      sport,
    };
  }

  // fetch state from the props
  static fetchDerivedStateFromProps(props, state) {
    if (props.sport !== state.sport) {
      return {
        radioError: false,
        sport: props.sport,
      };
    }
    return null;
  }

  // To handle change radio btn event
  handleChangeRadio = (event) => {

    console.log("this.props", this.props);

    const { changeRadio } = this.props;
    this.setState({
      radioError: false,
    });
    changeRadio(event.target.value);
  }

  // handle check error
  handleCheckError = () => {

    const { sport, cricket, football } = this.props;
    
    this.setState({
      radioError: false,
    });
    
    // check football
    if (sport === 'Football' && !football) {
      this.setState({
        radioError: true,
      });
    }

    // check cricket
    if (sport === "Cricket" && !cricket) {
      this.setState({
        radioError: true,
      });
      return;
    }
  }

  render() {
    // console.log("this.props", this.props);
    const { sport } = this.props;

    const { radioError } = this.state;

    //  FOR FOOTBALL
    if (sport === "Football") {
      return (
        
        <div className = "radioBtnContainer">
          <h4 style = {{ marginBottom: "20px" }}>
            What you Do?
          </h4>
          <label 
            htmlFor = "defender"
            style = {{ fontSize: "20px" }}>
            <input 
              type = "radio" 
              id = "defender" 
              value = "Defender" 
              name = "sport" 
              onBlur = { this.handleCheckError }
              onChange = { this.handleChangeRadio } 
            />
            Defender
          </label>
          
          <br />

          <label 
            htmlFor = "striker"
            style = {{ fontSize: "20px" }}>
            <input 
              type = "radio" 
              id = "striker" 
              value = "Striker" 
              name = "sport" 
              onBlur = { this.handleCheckError } 
              onChange = { this.handleChangeRadio } 
            />
            Striker
          </label>
          { (radioError) ? <p style = {{ color:'blue', fontSize: "14px"  }}>this fiels is requred: cannot be empty</p> : "" }
        </div>
      );
    }

    //  FOR CRICKET
    if (sport === "ricket") {
      return (
        <div className = "RadioBtnContainer" >
          <h4 style = {{ marginBottom: "20px"}}>
            What you Do?
          </h4>
          {/* "wicket-keeper */}
          <label 
            htmlFor = "wicket-keeper"
            style = {{ fontSize: "20px" }}>
            <input 
              type = "radio" 
              id = "wicket-keeper" 
              value = "Wicket Keeper" 
              name = "sport" 
              onBlur = { this.handleCheckError } 
              onChange = { this.handleChangeRadio } 
            />
            Wicket Keeping
          </label>
          
          <br />

          {/* batsman */}
          <label htmlFor="batsman"
            style = {{ fontSize: "20px" }}>
            <input 
              type = "radio" 
              id = "batsman" 
              value = "Batsman" 
              name = "sport" 
              onBlur = { this.handleCheckError }
              onChange = { this.handleChangeRadio } 
            />
            Batsman
          </label>
          
          <br />

          {/* bowler */}
          <label 
            htmlFor = "bowler"
            style = {{ fontSize: "20px" }}>
            <input 
              type = "radio" 
              id = "bowler" 
              value = "Bowler" 
              name = "sport" 
              onBlur = { this.handleCheckError } 
              onChange = { this.handleChangeRadio } 
            />
            Bowling
          </label>
          
          <br />

          {/* all-rounder */}
          <label 
            htmlFor="all-rounder" 
            style = {{ fontSize: "20px" }}>
            <input 
              type = "radio" 
              id = "all-rounder" 
              value = "All Rounder" 
              name = "sport" 
              onChange = { this.handleChangeRadio }
              onBlur = { this.handleCheckError } 
            />
            All Rounder
          </label>
          { (radioError) ? <p style={{ color: 'red', fontSize: "14px" }}>this fiels is requred: cannot be empty</p> : "" }
        </div>
      );
    }
    
    //  new shorter syntax you can use for declaring fragments
    return (
      <>
      </>
    );
  }
}

//  set up type checking
RadioBtnGroup.propTypes = {
  changeRadio: PropTypes.func.isRequired,
  cricket: PropTypes.string.isRequired,
  football: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
};
