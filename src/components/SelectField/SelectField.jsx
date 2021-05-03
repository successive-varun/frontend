import { React } from "react";
import { PureComponent } from "react";

import PropTypes from "prop-types";

export class SelectField extends PureComponent {

    render() {
        // console.log("this.props", this.props);
        const { options, value, onChange, error, defaultText } = this.props;
        return (
            <div >
                {/* heading */}
                <h4 style = {{ marginBottom: "10px", fontSize: "20px" }}>
                    Select the game you play
                </h4>
                {/* select field if no error */}
                { !error && (
                        <select 
                            style = {{padding: "10px", fontSize: "16px"}}
                            value = { value || defaultText } 
                            onChange = { (event) => onChange("sport",event.target.value) }
                        >
                            {/* optin value */}
                            { options.map( (option,index) => {
                            return  <option 
                                        key = { index } 
                                        value = { option.value}> { option.label }
                                    </option>
                            })}
                        </select>
                    )
                }
            </div>
        )
    }
}

//  set up type checking
SelectField.propTypes = {
    error: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
};

export default SelectField;
