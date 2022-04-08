import React, { useContext } from 'react'
import { listTaskContext } from '../../../Context/ListTasks-Context';
import './ListOfTasks.css'

const ListOfTasks = () => {

    const [[listTask, setListTask], [filter, setFilter] ] = useContext(listTaskContext)

    function removeTask(iItem) {
        setListTask((prevList) =>
            prevList.filter((task, i) => i !== iItem));
    }
   
    return (
        <ul className='ul-list'>
            {listTask.map((task, i) => {
                if (task.title === "") {
                    return <li className='justify-center text-[#fff] bg-[#841d1d] border border-solid border-[#cc572d]'>You should add a task</li>
                } else {
                    return <li key={i} className='bg-[#eecdc0] border border-solid border-[#cc572d]'>
                        <input type='checkbox' />
                        <p>{task.title}</p>
                        <button className='button-cratetask' onClick={() => removeTask(i)}>Remove</button>
                    </li>
                }
            })}
        </ul>
    )
}

export default ListOfTasks