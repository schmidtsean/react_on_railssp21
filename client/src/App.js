import { Component } from 'react'
import Todoform from './components/todos/TodoForm';
import axios from 'axios';
class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // make a api call to our rails end to get all todos
    //set the todos on to state
  }

  addTodo = (todo) => {
    //make an api call to add in our rails server and our db
    axios.post('/api/todos', { todo })
      .then( res => {
        const { todos } = this.state
        this.setState({ todos: [ ...todos, res.data ]})
      })
      .catch( err => console.log(err))
    // add the new todo to the front end
    
  }

  updateTodo = (id, updatedTodo) => {
    //upadate in our back end and db with api call
    //upadate the todo in the front end
  }

  delteTodo = (id) => {
    //make api call to delete in the back end and db
    //delete the todo in the frontend
  }

  render() {
    return(
      <>
        <h1>Todo List</h1>
        <Todoform addTodo={this.addTodo} />
      </>
    )
  }
}

export default App;
