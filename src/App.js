import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return  <Person 
                      onClick={() => this.deletePersonHandler(index)}
                      onChange={(e) => this.onChangeHandler(e, person.id)}
                      name={person.name} 
                      age={person.age} 
                      key={person.id} />
          }) }
        </div>
      );
    }

    const style = {
      backgroundColor: this.state.toggleButtonBackground,
      color: this.state.toggleButtonColor,
      border: '1px solid #eee',
      padding: '10px',
      boxShadow: '0 3px 4px #ddd',
      outline: 'none'
    };

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red'] 
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Sup?</h1>
        <p className={classes.join(' ')}>This is awesome.</p>
        <div>
          <button 
            onClick={this.togglePersonsHandler} 
            style={style}>
              Toggle persons
          </button>
        </div>
        { persons }
      </div>
    );
  }
}

export default App;
