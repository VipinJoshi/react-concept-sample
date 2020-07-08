
import React, { Component } from "react";
import { connect } from "react-redux";

import { setSelectedLanguage } from "./redux/actions";

  
class Header extends Component {


    onLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        this.selectedLanguage(selectedLanguage);
    }
    selectedLanguage(selected) {
        this.props.setLanguage(selected);
    }

    render() {
        const {
            selectedLanguage,
        } = this.props;
        return <li className="nav-item dropdown">
            <select
                name="language"
                value={selectedLanguage}
                required
                className="nav-select"
                onChange={this.onLanguageChange}
            >
                <option value="english">English</option>
                <option value="हिन्दी">हिन्दी</option>
                <option value="Española">Española</option>
            </select>
        </li>
    }
}

const stateToProps = state => ({
    selectedLanguage: state.setLanguage,
});

const dispatchToProps = dispatch => ({
    setLanguage: data => {
        dispatch(setSelectedLanguage(data));
    },
});


export default connect(
    stateToProps,
    dispatchToProps
)(Header);
