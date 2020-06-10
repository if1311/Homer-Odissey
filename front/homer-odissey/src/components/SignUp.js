import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            value: "email"
        }
        this.updateEmailField = this.updateEmailField.bind(this)
    }
    updateEmailField(event) {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input type="email" name="email" onChange={this.updateEmailField} />
            </div>
        )
    }
}
