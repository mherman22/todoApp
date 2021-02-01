import React, { Component } from 'react';

import Header from './header';
import Todo from './Todo';
import './styles/App.css'
import Footer from './Footer';
import AddTodo from './AddTodo';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import about from './pages/about';
import contact from './pages/contact';
import axios from 'axios';


 class App extends Component{
    constructor(){
        super()
        this.state = {
            todosinfo : []
        }
    }
    //api call
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
         .then(res => this.setState({ todosinfo : res.data }))
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({todosinfo: [...this.state.todosinfo.filter(todo => todo.id !== id)]}))        
    }

    //add to do item button in AddTodo.js
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,
            completed: false
        })
        .then(res => this.setState({todosinfo:[...this.state.todosinfo,res.data]}))
        
    }

    render(){
        return(
            <Router> 
                <div className="todo">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                 <Todo 
                                    todosinfo={this.state.todosinfo} 
                                    markComplete={this.markComplete}
                                    deleteTodo={this.deleteTodo}
                                 />
                                <AddTodo addTodo={this.addTodo} />
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={about} />
                        <Route path="/contact" component={contact} />
                       
                        <Footer />
                    </div>              
                </div>
            </Router>
           
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