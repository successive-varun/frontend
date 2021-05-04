import { React } from "react";
import { PureComponent } from "react";

import PropTypes from "prop-types";

export default class RadioBtnGroup  extends PureComponent {

    render() {
        // console.log("this.props", this.props);

        const { options, value, error, onChange } = this.props;

        console.log("value",value);

        return (
            <div>
                {/* heading */}
                <h4  style = {{ marginBottom: "20px", fontSize: "20px" }}>
                    What you Do?
                </h4>
                {/* option if no error */}
                { !error && 
                    (options.map(( option,index ) => {
                            return (
                                <div key = { index }>
                                    <label 
                                        htmlFor = { option.label }
                                        style = {{ fontSize: "16px" }}
                                    >
                                        <input 
                                            type = "radio" 
                                            id = { option.label } 
                                            name = "sport" 
                                            value = { option.value } 
                                            onChange = { (event) => onChange(value, event.target.value) }
                                        />
                                        { option.value }
                                    </label>
                                </div>
                            );
                        })
                    )
                }
            </div>
        )
    }
}

//  set up type checking
RadioBtnGroup.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// export default RadioBtnGroup;    // no need as exporting class default
