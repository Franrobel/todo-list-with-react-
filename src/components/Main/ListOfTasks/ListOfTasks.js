import React, { useContext } from 'react'
import { listTaskContext } from '../../../Context/ListTasks-Context';

const ListOfTasks = () => {

    const [[listTask, setListTask]] = useContext(listTaskContext)

    function removeTask(iItem) {
        setListTask((prevList) =>
            prevList.filter((task, i) => i !== iItem));
    }

    return (
        <ul className='ul-list'>
            {listTask.map((task, i) =>
                <li key={i} >
                    <input type='checkbox' />
                    <p>{task.title}</p>
                    <button className='button-cratetask' onClick={() => removeTask(i)}>Remove</button>
                </li>)}
        </ul>
    )
}

export default ListOfTasks