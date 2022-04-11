import React, { useContext } from 'react'
import { listTaskContext } from '../../../Context/ListTasks-Context'

const FilterTasks = () => {
    const [[listTask, setListTask], [task, setTask], [filter, setFilter]] = useContext(listTaskContext)

    function handleFilter(e) {
        const { name, value, checked, type } = e.target

        setFilter({
            [name]: type === "checkbox" ? checked : value
        })
    }
    return (
        <div className='flex flex-col items-center py-4 ' >
            <div >
                <input
                    className='rounded-lg m-2 pl-2'
                    type="text"
                    name='searchTitle'
                    value={filter.searchTitle}
                    placeholder="filter your tasks"
                    onChange={(e) => handleFilter(e)}
                />
            </div>
            <div className='space-x-3'>
                <label id='label-finished'>
                    <input className='mr-2'
                        type="checkbox"
                        id="finished"
                        name='finished'
                        checked={filter.finished}
                        onChange={(e) => handleFilter(e)}
                    />
                    Finished
                </label>
                <label>
                    <input className='mr-2'
                        type="checkbox"
                        id="unFinished"
                        name='unFinished'
                        checked={filter.unFinished}
                        onChange={(e) => handleFilter(e)}
                    />
                    Unfinished
                </label>
            </div>
        </div>
    )
}

export default FilterTasks