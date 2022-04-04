import React from 'react'
import './CreateTask.css'
import ListOfTasks from '../ListOfTasks/ListOfTasks'

const CreateTask = (props) => {

    function handleChange(event) {
        const { name, value } = event.target
        props.setTask({
            ...props.task,
            [name]: value
        })
    }

    function addTask() {
        props.setListTask(prevList =>
            [...prevList, props.task].filter(task => task.title !== "")
        )
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
            <ListOfTasks
                listTask={props.listTask}
                setListTask={props.setListTask}
            />
        </>
    )
}

export default CreateTask
