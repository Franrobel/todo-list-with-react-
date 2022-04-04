import React from 'react'

const ListOfTasks = (props) => {

    function removeTask(iItem) {
        props.setListTask((prevList) =>
            prevList.filter((task, i) => i !== iItem));
    }

    return (
        <ul className='ul-list'>
            {props.listTask.map((task, i) =>
                <li key={i} >
                    <input type='checkbox' />
                    <p>{task.title}</p>
                    <button className='button-cratetask' onClick={() => removeTask(i)}>Remove</button>
                </li>)}
        </ul>
    )
}

export default ListOfTasks