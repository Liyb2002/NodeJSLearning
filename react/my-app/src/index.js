import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Greetings(props){
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return <h1>Welcome back!</h1>
  }
  else{
    return <h1>Please log in</h1>
  }
}

class LoginControl extends React.Component{
  constructor(props){
    super(props)
    this.state={isLoggedIn : false}
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogin(){
    this.setState({isLoggedIn : false})
  }

  handleLogout(){
    this.setState({isLoggedIn : true})
  }

  render(){
    const toggle = this.state.isLoggedIn
    let button
    if(toggle){
      button = <button onClick= {this. handleLogin}>login</button>
    }
    else{
      button = <button onClick ={this.handleLogout}>logout</button>

    }

    return (
      <div>
        {button}
        <Greetings isLoggedIn = {toggle}></Greetings>
      </div>
    );
    }

}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
