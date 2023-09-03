import React from 'react';
import { When } from 'react-if';
import { LoginContext } from './Context';
export default class Login extends React.Component {

    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.context.loginFunction(this.state.username, this.state.password);
    }
    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <When condition={!this.context.loginStatus}>
                    <form onSubmit={this.handleSubmit}>
                        {/* <input type='text' name='username' placeholder='username' onChange={this.handleUsername} />
                    <input type='password' name='password' placeholder='password' onChange={this.handlePassword} />*/}
                        <input type='text' name='username' placeholder='username' onChange={this.handleChange} />
                        <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                        <input type='submit' value='Login' />
                    </form>
                </When>
                <When condition={this.context.loginStatus}>
                    <div><h2>{
                        this.context.user.user.username
                    }</h2></div>
                    <button onClick={this.context.logoutFunction}>Logout</button>
                </When>
            </>
        )
    }
}