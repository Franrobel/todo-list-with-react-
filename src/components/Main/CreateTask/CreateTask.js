import React from 'react'
import './CreateTask.css'
import { useState } from 'react'

const CreateTask = (props) => {
console.log("props Task", props.task)
console.log("props ListTask", props.listTask)
function handleChange(event){
    const { name, value } = event.target
   props.setTask({
       ...props.task, 
       [name]: value
   })
}
function addTask(task){
    console.log("addTask", task)
    props.setListTask(prevList => [...prevList, props.task])
}
    return (
        <div>
            <div className="input-button">
                <input
                    className="input-cratetask"
                    type="text"
                    placeholder="create a task"
                    name="title"
                    value={props.task.title}
                    onChange={handleChange}
                />
                <button className="button-cratetask" onClick={addTask}>
                    Create
                </button>
            </div>
            <ul className='ul-list'>
            {props.listTask.map((task, i) =>  <li key={i}>
                        <input type='checkbox'/>
                        <p>{task.title}</p>
                        <button className='button-cratetask' type='button'>Remove</button>
                    </li>)}
            </ul>
            {/* <div className="input-button">
                <input
                    className="input-cratetask"
                    type="text"
                    placeholder="write a task"
                    name="task"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask} className="button-cratetask" type="button">
                    Create
                </button>
            </div>
            <ul >{tasks.map(task => <li>{task}</li>)}</ul> */}
        </div>
        


    )
}

export default CreateTask
