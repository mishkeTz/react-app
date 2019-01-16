import React from 'react';

import classes from './Cockpit.css';

import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) // assignedClasses = ['red'] 
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <Aux>
            <h1>Sup?</h1>
            <p className={assignedClasses.join(' ')}>This is awesome.</p>
            <div>
                <button
                    className={btnClass}
                    onClick={props.toggleHandler}>
                    Toggle persons
                </button>
            </div>
        </Aux>
    );  
};

export default cockpit;