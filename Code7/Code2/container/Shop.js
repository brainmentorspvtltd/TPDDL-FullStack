import React from 'react';
import { Header } from '../components/Header';
import {Switch, Route} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Login } from '../components/Login';
export class Shop extends React.Component{
constructor(){
    super();
    this.state = {isLogin:false, msg:''};
}
updateIsLogin(flag, msg){
    this.setState({isLogin:flag, msg:msg})
}
routeLoad(){
    if(this.state.isLogin){
        return (
            <>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about/:name/:desc" component={About}></Route>
                <Route  path="/contact" component={Contact}></Route>
                
                
                <Route render={()=>{
                    return (
                        <div>
                            <h1>No Page Found , Wrong Link</h1>
                        </div>
                    )
                    }}></Route>
            </Switch>
            
                </>
        )
    }
    else{
        return (
        <><Login updateIsLogin={this.updateIsLogin.bind(this)}/>
        {this.state.msg}
        </>)
    }
}
render(){

    return (
        <div>
            
            {this.state.isLogin?<Header/>:<></>}
            {this.routeLoad()}
           
        </div>
    )
}
}