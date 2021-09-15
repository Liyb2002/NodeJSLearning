import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todoList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState(prevState => ({
      todoList: [...prevState.todoList, this.state.value]
    }))
    event.preventDefault();
  }

  render() {
    return (
      <div> 
        <li>{this.state.todoList}</li>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <button onClick = {this.handleSubmit}> Add toDo</button>

      </div>
 
    );
  }
}

ReactDOM.render(
  <ToDoList></ToDoList>,
  document.getElementById('root')
)
