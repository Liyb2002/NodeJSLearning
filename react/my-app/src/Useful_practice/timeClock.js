import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'aaa';
const element = <h1>Hello, {name}</h1>;

function tick (){
  const element =(
    <div>hello
      <h1>It is {new Date().toLocaleTimeString()}</h1>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
