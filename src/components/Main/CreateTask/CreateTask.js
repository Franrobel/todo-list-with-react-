import React, { useContext, useEffect } from 'react'
import ListOfTasks from '../ListOfTasks/ListOfTasks'
import { listTaskContext } from '../../../Context/ListTasks-Context'

const CreateTask = () => {

    const [[listTask, setListTask], [task, setTask]] = useContext(listTaskContext)
    function handleChange(event) {
        const { name, value } = event.target
        setTask({
            ...task,
            [name]: value
        })
    }

    function addTask() {
        setListTask(prevList => {
            if (task.title === "") {
                return [...prevList, task]
            } else {
                return [...prevList, task].filter(task => task.title !== "")
            }
        })
    }
    
useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(listTask))
}, [listTask])
    return (
        <>
            <div className="flex justify-center">
                <input
                    className='rounded-lg pl-2 mr-2'
                    type="text"
                    placeholder="create a task"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                />
                <button className="bg-redWine text-aliceblue px-1.5 py-1 text-sm rounded-md" onClick={addTask}>
                    Create
                </button>
            </div>
            <ListOfTasks />
        </>
    )
}

export default CreateTask;