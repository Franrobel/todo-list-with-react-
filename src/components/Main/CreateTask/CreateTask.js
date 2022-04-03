import React from 'react'
import './CreateTask.css'

const CreateTask = (props) => {
    console.log("props Task", props.task)
    console.log("props ListTask", props.listTask)
    function handleChange(event) {
        const { name, value } = event.target
        props.setTask({
            ...props.task,
            [name]: value
        })
    }
    function addTask(task) {
        console.log("addTask", task)
        props.setListTask(prevList => [...prevList, props.task])
    }
    return (
        <>
            <div className="flex justify-center">
                <input
                    className='rounded-lg pl-2 mr-2'
                    type="text"
                    placeholder="create a task"
                    name="title"
                    value={props.task.title}
                    onChange={handleChange}
                />
                <button className="bg-redWine text-aliceblue px-1.5 py-1 text-sm rounded-md" onClick={addTask}>
                    Create
                </button>
            </div>
            <ul className='ul-list'>
                {props.listTask.map((task, i) => <li key={i}>
                    <input type='checkbox' />
                    <p>{task.title}</p>
                    <button className='button-cratetask' type='button'>Remove</button>
                </li>)}
            </ul>
        </>


    )
}

export default CreateTask
