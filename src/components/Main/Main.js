import React from 'react'
import CreateTask from './CreateTask/CreateTask'
import FilterTasks from './FilterTask/FilterTasks'
import { useState } from 'react'

const Main = () => {
    const [ listTask, setListTask ] = useState([])
    const [ task, setTask ] = useState({
        title: "", 
        completed: false
    })
  return (
    <>
        <FilterTasks />
        <CreateTask 
            task={task} 
            setTask={setTask}
            listTask={listTask}
            setListTask={setListTask}/>
       
    </>
  )
}

export default Main