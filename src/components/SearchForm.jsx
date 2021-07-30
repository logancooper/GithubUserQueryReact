import React from "react";

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
        }
    }

    render (){
        return(
            <>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={(event) => {
                                this._updateField('username', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </>
        );
    }

    _updateField = (field, val) => {
        this.setState({
            [field]: val
        }, () => {
            //console.log(`${field} is now ${val}`);
        });
    }

    _submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.username);
    }
}


export default SearchForm;