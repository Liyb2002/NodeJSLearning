import React from 'react';
import ReactDOM from 'react-dom';
import ImageButton from 'react-image-button';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {unlocked: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.unlocked){
      alert("unlocked!")
    
    this.setState(prevState => ({
      unlocked: false
    }));

    const interval = setInterval(() => {
      this.setState(prevState => ({
        unlocked: true
      }));
    }, 5000);
  

  }


  }

  render() {
    return (
      <ImageButton img='./b1.png' >

      <button onClick={this.handleClick}>
        {this.state.unlocked ? 'ON' : 'Locked'}
      </button>
      </ImageButton>

    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);