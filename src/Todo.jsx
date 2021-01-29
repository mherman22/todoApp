import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
    render(){
        return this.props.todosinfo.map(todo => (
            <TodoItem 
                key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete} 
                deleteTodo= {this.props.deleteTodo}
            />
        ))
    }
}
//proptypes
Todo.propTypes = {
    todosinfo:PropTypes.array.isRequired
}

export default Todo

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/
