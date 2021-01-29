import React, { Component } from 'react';

import Header from './header';
import Todo from './Todo';
import todos from './todosdata';
import './styles/App.css'
import Footer from './Footer';
import AddTodo from './AddTodo';


 class App extends Component{
    constructor(){
        super()
        this.state = {
            todosinfo : todos
        }
    }
    //complete button in TodoItem.js
    markComplete = (id) => {
       this.setState({todosinfo: this.state.todosinfo.map(todo =>{
           if(todo.id === id){
               todo.completed = !todo.completed
           }
           return todo
       })})
    }

    //delete button in TodoItem.js
    deleteTodo = id => {
        this.setState({todosinfo: [...this.state.todosinfo.filter(todo => todo.id !== id)]})
    }

    //add to do item button in AddTodo.js
    addTodo = (text) => {
        const newTodo = {
            id:[...this.state.todosinfo.filter(todo => todo.id !== this.state.todosinfo.id)],
            text,
            completed:false
        }
        this.setState({todosinfo:[...this.state.todosinfo,newTodo]})
    }

    render(){
        return(
            <div className="todo">
                <div className="container">
                     <Header />
                     <Todo 
                        todosinfo={this.state.todosinfo} 
                        markComplete={this.markComplete}
                        deleteTodo={this.deleteTodo}
                     />
                    <AddTodo addTodo={this.addTodo} />
                    <Footer />
                </div>              
            </div>
        )
    }
}
export default App

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/