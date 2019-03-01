import React from 'react';
export class Login extends React.Component{
constructor(){
    super();
}
login(){
    var userid = this.refs.userid.value;
    var pwd = this.refs.pwd.value;
    var json = JSON.stringify({"userid":userid,"pwd":pwd});
    console.log("Inside Login ",this.refs);
    var pr = fetch('http://localhost:1234/login',{headers:{'Accept': 'application/json',
    'Content-Type': 'application/json'},method:'POST',body:json});
    pr.then(response=>{
        response.json().then(data=>{
            console.log("Response JSON is ",data);
            localStorage.token = data.token;
        }).catch(err=>{
            console.log('Error in JSON ',err);
        }).catch(e=>{
            console.log('Server Error ',e);
        })
    })

}
render(){
    return (
        <div>
            <input type="text" placeholder='Type Userid' ref='userid'/>
            <input type="password" placeholder='Type Password' ref='pwd'/>
            <button onClick={this.login.bind(this)}>Login</button>
        </div>
    )
}
}