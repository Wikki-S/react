import './App.css';
// import { useState } from 'react';
import GoalList from './component/GoalList';
import NewGoal from './newgoal/NewGoal';
import {useState} from 'react';

function App() {
  // const [counter, setCounter] = useState(0);
  const [courseList, setCourseList] = 
    useState([
      {id:'cg1', text:'Finish course'},
      {id:'cg2', text:'Finish course'},
      {id:'cg3', text:'Finish course'}
    ])

    const addEventHandler = (newGoal)  => {
        setCourseList((prevCourseList => prevCourseList.concat(newGoal)));
    }

  return (
    <div className='goal'>
    <h1>Course</h1>
    <NewGoal onAddEvent = {addEventHandler}/>
     <GoalList goals={courseList}/>
     


    {/* //   <button onClick={()=> setCounter((preButton) => preButton - 1)} >-</button>
    //     <div className='counter'>{counter}</div>
    //     <button onClick={() => setCounter((nextButton) => nextButton + 1)}>+</button>
    //     <button onClick={()=>setCounter((resetButton) => resetButton = 0 )}>Reset</button> */}
    </div>
  );
}

export default App;
