import React, { Component } from 'react'
import './Person.css';
import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
    
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside Component Will Mount')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside Component Did Mount')
      }

    render() 
    {
        console.log('[Person.js] Inside Render')

        return (
            <div className={classes.Person}>
                <p onClick={this.props.onClick}>My age is {this.props.age}</p>
                <p>My name is {this.props.name}</p> 
                <input type="text" onChange={this.props.onChange} value={this.props.name} />  
            </div>
        );  
    }
}

export default Person;