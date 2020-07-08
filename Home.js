
import React, { Component } from "react";
import { connect } from "react-redux";

const language = {
    'english': {
        line1: 'Hey guys you have selected',
        line2: 'and its getting from state Kudos!!!!'
    },
    'हिन्दी': {
        line1: 'अरे दोस्तों आपने चुना है',
        line2: 'और इसके redux बधाई से हो रही है !!!!'
    },
    'Española': {
        line1: 'Hola chicos que seleccionaste',
        line2: 'y está recibiendo de felicidades redux !!!!'
    },
}
class Home extends Component {
    
    render() {
        const {
            selectedLanguage,
        } = this.props;
        return <div>
             {language[selectedLanguage].line1} <h3>{selectedLanguage}</h3> {language[selectedLanguage].line2}
        </div>
    }
}

const stateToProps = state => ({
    selectedLanguage: state.setLanguage,
});

export default connect(
    stateToProps
)(Home);
