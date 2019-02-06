import React from 'react';
export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    doLogin(){
            var userid = this.refs.userid.value;
            var pwd = this.refs.pwd.value;
            if(userid == pwd){
                localStorage.isLogin= true;
                   this.props.updateIsLogin(true,''); 
            }
            else{
                this.props.updateIsLogin(false, 'Invalid Userid or Password'); 
            }
    }
    render(){
        return (
            <div>
                <input placeholder="Type Userid Here" ref="userid" type="text"/>
                <br/>
                <input placeholder="Type Password Here" ref="pwd" type="password"/>
                <br/>
                <button onClick={this.doLogin.bind(this)}>Login</button>

            </div>
        )
    }
}