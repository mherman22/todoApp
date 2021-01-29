import React, { Component } from 'react';


class AddTodo extends Component{
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }

    onChange = e => this.setState({[e.target.name]:e.target.value})

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({text:''})

    }

    render (){
        return(
            <form onSubmit={this.onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="add your plan for the day..." 
                    className="input" 
                    value={this.state.text}
                    onChange={this.onChange} 
                />
                <input 
                    type="submit" 
                    value="Add Todo" 
                    className="btn-style" 
                />
            </form>
        )
    }
}
export default AddTodo

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/