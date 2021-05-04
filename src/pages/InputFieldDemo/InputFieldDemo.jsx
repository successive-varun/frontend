import { React } from "react";
import { PureComponent } from "react";

// Import other components
import  {
    TextField, 
    SelectField, 
    RadioBtnGroup  
}  from "../../components";

export default class InputFieldDemo extends PureComponent {
    constructor(props) {

        // console.log("props", props);
        
        super(props);

        
        // state
        this.state = {
          name: "",
          sport: "",
          cricket: "",
          football: "",
        };
      }

    //to handle input change
    handleInputChange = (field, value) => {

        // football
       if (value === "Football" || field === "Football"){
        this.setState({
            [field]: value,
            cricket: "",
        });
        } 
        // cricket 
        else if (value === "Cricket" || field === "Cricket"){
            this.setState({
                [field]: value,
                football: "",
            });
        }
       
        else {
            this.setState({
                [field]: value,
                cricket: "",
                football: "",
            });
        }
    }
    render() {
        
        console.log(this.state);

        const { name, sport } = this.state;
        return (
            <div className = "textFieldContainer">
                <TextField 
                    style = {{ padding: "20px" }}
                    error = { "" } 
                    value = { name } 
                    onChange = { this.handleInputChange } 
                />
                
                <SelectField 
                    error = { "" } 
                    value = { sport } 
                    onChange = { this.handleInputChange }
                    defaultText = { "Select" }
                    // another way of providing options
                    options = {[
                        // select
                        { "label": "select", "value": "" },
                        // football
                        { "label": "football", "value": "football" },
                        // cricket
                        { "label": "cricket", "value": "cricket" }
                    ]} 
                /> 

                {/* CRICKET */}
               { sport === "cricket" && (<RadioBtnGroup 
                    error = { "" } 
                    value = { sport } 
                    onChange = { this.handleInputChange }
                    options = {[
                        // wicket keeper
                        { "label": "wicket", "value": "Wicket Keeper" },
                        // batsman
                        { "label": "batsman", "value": "Batsman" },
                        // bowler
                        { "label": "bowler", "value": "Bowler" },
                        // all rouder
                        { "label": "allRounder", "value": "All Rounder" }
                    ]} 
                />) }
                {/* FOOTBALL */}
                { sport === "football" && (
                    <RadioBtnGroup 
                        value = { sport } 
                        error = { "" } 
                        onChange = { this.handleInputChange }
                        options = {[
                            { "label": "defender", "value": "Defender" },
                            { "label": "striker", "value": "Striker" },
                        ]} 
                    />) 
                }
            </div>
        )
    }
}
