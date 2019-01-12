import React, { Component } from 'react'
import './Person.css';

class Person extends Component {

    render() 
    {
        return (
            <div className="Person">
                <p onClick={this.props.onClick}>My age is {this.props.age}</p>
                <p>My name is {this.props.name}</p> 
                <input type="text" onChange={this.props.onChange} value={this.props.name} />  
            </div>
        );  
    }
}

export default Person;