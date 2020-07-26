/*
output when get team list is clicked 
India,China,USA,South Africa,South Africa
*/
import React, { Component } from "react";

export default class Test4 extends Component {
    constructor() {
        super();
        this.state ={ team: ['India','China',"USA"]};
      /* this code won't affet 
        var teamm = this.state.team;
        teamm.push('Sudan');
        this.setState({team:teamm});
      */ 
        this.getData= this.getData.bind(this);
    }

    getData(){
        var data = this.state.team;
        data.push("South Africa");
        this.setState({team:data});
    }

    render() {
        var teamlist = this.state.team;
        
        return <section>
            <button onClick={this.getData}>
                Get team List
            </button>
            <ul>
    <li>{teamlist + ""}</li>
            </ul>
        </section>
    }
}