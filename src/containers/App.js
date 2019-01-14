import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    age: 18,
    showPersons: false,
    toggleButtonBackground: 'white',
    toggleButtonColor: 'lightblue',
    persons: [
      {
        id: 0,
        name: "Person 1",
        age: 18
      },
      {
        id: 1,
        name: "Person 2",
        age: 20
      },
      {
        id: 2,
        name: "Person 3",
        age: 25
      }
    ]
  }

  constructor(props) {
    super(props);

    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside Component Will Mount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextState, nextProps)
  
    return true;
  }

  componentWillUpdate(nextState, nextProps) {
    console.log('[UPDATE App.js] Inside componenetWillUpdate', nextState, nextProps)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componenetDidUpdate')
  }

  componentDidMount() {
    console.log('[App.js] Inside Component Did Mount')
  }

  togglePersonsHandler = () => {

    const toggleButtonBackground = this.state.toggleButtonBackground === 'white' ? 'lightblue' : 'white';
    const toggleButtonColor = this.state.toggleButtonColor === 'lightblue' ? 'white' : 'lightblue';

    this.setState({
      showPersons: !this.state.showPersons,
      toggleButtonBackground: toggleButtonBackground,
      toggleButtonColor: toggleButtonColor
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [ ...this.state.persons ];
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }

  onChangeHandler = (e, id) => {

    // find the person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // store that person in new const
    const person = {
      ...this.state.persons[personIndex]
    };

    // change the name of that person (on copy)
    person.name = e.target.value;

    // copy persons
    const persons = [
      ...this.state.persons
    ];

    // update that changed person
    persons[personIndex] = person;

    // update state with new persons array
    this.setState({
      persons: persons
    })
  }

  render() {

    console.log("[App.js] Inside Render")

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  deleteHandler={this.deletePersonHandler}
                  changeHandler={this.onChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggleHandler={this.togglePersonsHandler} />
        { persons }
      </div>
    );
  }
}

export default App;
