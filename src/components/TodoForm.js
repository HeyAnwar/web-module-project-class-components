import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
        }
    }
    onChange = evt => {
        this.setState({
            input: evt.target.value
        })
    }
    onSubmit = (evt) => {
        evt.preventDefault()
        this.props.addItem(this.state.input)
        console.log(evt)
    }

    render() {
        return (
            <form>
                <input
                    name='item'
                    type='text'
                    onChange={this.onChange}
                />
                <button onClick = {this.onSubmit}>
                    Add to List
                </button>
                <button onClick = {this.props.clearCompleted}>
                    Clear Completed
                </button>
            </form>
        )
    }
}

export default TodoForm