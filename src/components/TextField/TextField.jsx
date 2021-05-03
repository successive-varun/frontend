import { React } from "react";
import { PureComponent } from "react";

import PropTypes from "prop-types";

export default class TextField extends PureComponent {
    render() {

        // console.log("this.props", this.props);

        const{ value, error, onChange } = this.props;
        
        return (
            <div>
                {/* heading */}
                <h4 style = {{  marginTop: "50px", marginBottom: "10px", fontSize: "20px" }}>
                    Name:
                </h4>
                {/* input text field if no error */}
                {!error &&  
                    (<input 
                        style = {{ padding: "10px", fontSize: "16px" }}
                        type = "text" 
                        placeholder = "Name"
                        value = { value }
                        onChange = { (event) => onChange("name", event.target.value) }
                        required
                    />)
                }
            </div>
        )
    }
}

//  set up type checking
TextField.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
};

