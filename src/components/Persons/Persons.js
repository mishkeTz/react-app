import React, { Component } from 'react'
import Person from './Person/Person'; 

class Persons extends Component {

  constructor(props) {
    super(props);

    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside Component Will Mount')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside Component Did Mount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextState, nextProps) {
    console.log('[UPDATE Persons.js] Inside componenetWillUpdate', nextState, nextProps)
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componenetDidUpdate')
  }

  render() {

    console.log('[Persons.js] Inside Render');

    return (
        this.props.persons.map((person, index) => {
            return  <Person 
                      onClick={() => this.props.deleteHandler(index)}
                      onChange={(e) => this.props.changeHandler(e, person.id)}
                      name={person.name} 
                      age={person.age} 
                      key={person.id} />
          })
    )
  }
}

export default Persons;