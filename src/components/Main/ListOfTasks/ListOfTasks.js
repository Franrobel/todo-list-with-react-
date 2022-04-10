import React, { useContext } from 'react'
import { listTaskContext } from '../../../Context/ListTasks-Context';
import './ListOfTasks.css'

const ListOfTasks = () => {

    const [[listTask, setListTask], [task, setTask], [filter, setFilter]] = useContext(listTaskContext)

    function removeTask(iItem) {
        setListTask((prevList) =>
            prevList.filter((task, i) => i !== iItem));
    }

    function toggleTaskCompleted(event, index) {
        const { name, checked } = event.target
        const updateList = [...listTask].map((task, i) => {

            i === index && (task.completed = !task.completed)
            return task
        })
        setListTask(updateList)
    }

    return (
        <ul className='ul-list'>
            {listTask
                .filter(task => task.title
                    .includes(filter.searchTitle) || task.completed === filter.finished || !task.completed === filter.unFinished)
                .map((task, i) => {
                    if (task.title === "") {
                        return <li className='justify-center text-[#fff] bg-[#841d1d] border border-solid border-[#cc572d]'>You should add a task</li>
                    } else {
                        return <li key={i} className='bg-[#eecdc0] border border-solid border-[#cc572d]'>
                            <input type='checkbox'
                                name='completed'
                                id='completed'
                                checked={task.completed}
                                onChange={(event) => toggleTaskCompleted(event, i)}
                            />
                            <p>{task.title}</p>
                            <button className='button-cratetask' onClick={() => removeTask(i)}>Remove</button>
                        </li>
                    }
                })}
        </ul>
    )
}

export default ListOfTasks