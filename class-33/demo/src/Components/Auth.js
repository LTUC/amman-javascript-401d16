import React from "react";
import { When } from "react-if";
import { LoginContext } from "./Context";

export default class Auth extends React.Component {
    static contextType = LoginContext;
    constructor(props) {
        super(props);
    }

    render() {
        const cod1 = this.context.loginStatus;
        const cod2 = this.context.can(this.props.action)
        return (
            <When condition={cod1 && cod2}>
                {this.props.children}
            </When>
        )
    }
}