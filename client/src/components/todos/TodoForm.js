import { Component } from 'react'

class TodoForm extends Component {
  state = { title: "", complete: false }
  handleChange = (e) => {
      const {name, value} = e.target
      this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ title: "", complete: false })
  }

  render() {
    const {title} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
       <input
        type="text"
        name="title"
        value={title}
        onChange={ this.handleChange }

        required
        placeholder="Title"
       />
       <button type="Submit">Submit</button>
      </form>
    )
  }
}

export default TodoForm;