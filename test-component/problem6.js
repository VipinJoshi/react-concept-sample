/*
WHat happen when form will submitted the form page will refresh and value in text 
box will be lost so use event.preventDefault()
*/
import React, { Component } from "react";

export default class Test6 extends Component {
    constructor() {
        super();
        this.handleEvent = this.handleEvent.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = { value:"" };
    }

    handleEvent(e) {
        this.setState({ value: e.target.value });

    }
    formSubmit(event) {
     //   event.preventDefault();

        alert("name: " + this.state.value);
    }
    render() {
        return (
        <form onSubmit={this.formSubmit}>
            <label>
                Name: <input type="text" value={this.state.value} onChange={this.handleEvent} />
            </label>
            <input type="submit" value="submit"></input>
        </form>)
    }
}