import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) // assignedClasses = ['red'] 
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Sup?</h1>
            <p className={assignedClasses.join(' ')}>This is awesome.</p>
            <div>
                <button
                    className={btnClass}
                    onClick={props.toggleHandler}>
                    Toggle persons
                </button>
            </div>
        </div>
    );  
};

export default cockpit;