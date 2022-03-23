import React from 'react';
import './NewGoal.css'

function NewGoal(props) {
    const eventHandler = (e) => {
        e.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'welcome'
        };
            props.onAddEvent(newGoal);
   };
    return (
        <form className="new-goal"  onSubmit={eventHandler}>
            <input className='input' type="text" />
            <button type='submit'>Add Goal</button>
        </form>
    );
}

export default NewGoal;