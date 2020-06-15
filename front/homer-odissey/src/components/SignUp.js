import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            name: "James",
            lastname: "Bond",
            flash: ""
        }
        this.updateH1Field = this.updateH1Field.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    updateH1Field(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        console.log('A form was submitted: ' + JSON.stringify(this.state, 1, 1));
        event.preventDefault();
        fetch("/auth/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state, 1, 1),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ "flash": res.flash }),
                err => this.setState({ "flash": err.flash })
            )

    }
    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="lastname" name="lastname" value={this.state.lastname} onChange={this.updateH1Field} />
                    <input type="email" name="email" value={this.state.email} onChange={this.updateH1Field} />
                    <input type="password" name="password" value={this.state.password} onChange={this.updateH1Field} />
                    <input type="password" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
