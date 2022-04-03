import React from 'react'
import './CreateTask.css'

const CreateTask = (props) => {
    const [noTask, setNoTask] = React.useState("You didn't add a task")
    function handleChange(event) {
        const { name, value } = event.target
        props.setTask({
            ...props.task,
            [name]: value
        })
    }

    function addTask() {
        console.log(props.listTask)
        props.setListTask(prevList => 
            [...prevList, props.task].filter(task=> task.title !== "")
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
            <ul className='ul-list'>
                {props.listTask.map((task, i) => 
                    // if (task.title === "") {
                    //     return <li>{noTask}</li>
                    // } else {
                    //     return 
                        <li key={i}>
                            <input type='checkbox' />
                            <p>{task.title}</p>
                            <button className='button-cratetask' type='button'>Remove</button>
                        </li>
                    
                )
                }
            </ul>
        </>


    )
}

export default CreateTask
