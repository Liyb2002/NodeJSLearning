import React from 'react';
import ReactDOM from 'react-dom';
import b1 from './img/b1.png';
import processing from './img/processing.gif';




class Toggle extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {unlocked: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  getImageShow(){
    return(this.state.unlocked ? b1:processing)
  }

  handleClick() {
    if(this.state.unlocked){
      console.log("trading")
    
    this.setState(prevState => ({
      unlocked: false
    }));

    const interval = setInterval(() => {
      this.setState(prevState => ({
        unlocked: true
      }));
    }, 8000);
  

  }


  }

  render() {
    const imgShow = this.getImageShow()
    return (
      <div>
        <img src={imgShow} style={{width: 250, height: 120, position: 'absolute'}}
        alt="b1" onClick={this.handleClick}></img>

      </div>

    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);