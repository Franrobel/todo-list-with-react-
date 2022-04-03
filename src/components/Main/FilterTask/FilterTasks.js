import React from 'react'

const FilterTasks = () => {
    return (

        <div className='flex flex-col items-center py-4 ' >
            <div >
                <input
                    className='rounded-lg m-2 pl-2'
                    type="text"
                    placeholder="filter your tasks" />
            </div>
            <div className='space-x-3'>
                <label id='label-finished'>
                    <input className='mr-2'
                        type="checkbox"
                        id="Finished"
                        value="Finished" />
                    Finished
                </label>
                <label>
                    <input className='mr-2'
                        type="checkbox"
                        id="Unfinished"
                        value="Unfinished" />
                    Unfinished
                </label>
            </div>
        </div>

    )
}

export default FilterTasks
