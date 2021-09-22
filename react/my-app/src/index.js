import React from 'react';
import ReactDOM from 'react-dom';

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
    }
    this.setState(prevState => ({
      unlocked: !prevState.unlocked
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.unlocked ? 'ON' : 'Locked'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);