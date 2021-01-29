import React, { Component } from 'react';
import PropTypes from 'prop-types'


class TodoItem extends Component{
    render(){
        const {id,text } = this.props.todo;
        return(
            <div className="todo-list" style={{textDecoration:this.props.todo.completed ? 'line-through' : 'none'}}>
                <p>
                    {/* delete button */}
                    <button className='btn1' onClick={this.props.deleteTodo.bind(this,id)}>delete</button> 
                    {'         '}

                    {/* complete button */}
                    <button className='btn1' onClick={this.props.markComplete.bind(this,id)}>complete</button >


                    {/* display this.props.todo.text */}
                    {text}
                </p>
            </div>
        )
    }
}
//proptypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/
