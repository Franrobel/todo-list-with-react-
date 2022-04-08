import React, { useState, useContext } from 'react'
import { listTaskContext } from '../../../Context/ListTasks-Context'

const FilterTasks = () => {
    const [[listTask, setListTask], [task, setTask], [filter, setFilter]] = useContext(listTaskContext)
   
function handleFilter(event){
    const {name, value} =event.target
    setFilter({ [name]: value,
    finished: false,
    unFinished: false})

    
}
    console.log(filter)

    return (

        <div className='flex flex-col items-center py-4 ' >
            <div >
                <input
                    className='rounded-lg m-2 pl-2'
                    type="text"
                    name='searchTitle'
                    value={filter.searchTitle}
                    placeholder="filter your tasks"
                    onChange={(event)=>handleFilter(event)}
                />
            </div>
            <div className='space-x-3'>
                <label id='label-finished'>
                    <input className='mr-2'
                        type="checkbox"
                        id="completed"
                        name='completed'
                        checked={filter.finished}
                    />
                    Finished
                </label>
                <label>
                    <input className='mr-2'
                        type="checkbox"
                        id="completed"
                        name='completed'
                        checked={filter.unFinished}
                    />
                    Unfinished
                </label>
            </div>
        </div>
    )
}

export default FilterTasks
