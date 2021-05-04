import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const list = [
  {
    task: 'Organize Garage',
    id: 0,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1,
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: list
    }
  }
  toggleItem = (id) => {
    const newList = this.state.todo.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }else{
        return (item)
      }
    })
    this.setState({
      todo: newList
    })
  }
  addItem =(title) => {
    const newItem ={
      task:title,
      id:this.state.todo.length,
      completed:false
    };
    console.log(newItem)
    this.setState({
      todo:[...this.state.todo, newItem]
    })
  }
  clearCompleted = (evt)=>{
    evt.preventDefault();
    const newList  = this.state.todo.filter(item =>{
      return(item.completed === false);
    });
    this.setState({
      todo:newList
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      
      <div className='app'>
        <div className='todo-list'>
          <h1>Todo List</h1>
          <TodoList clearCompleted = {this.clearCompleted} toggleItem={this.toggleItem} todo={this.state.todo}/>
          <TodoForm addItem = {this.addItem} clearCompleted = {this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
