import React from 'react'

const FilterTasks = () => {
    return (

        <div id='filters'>
            <div className="input-filter">
                <input 
                    className="input-cratetask" 
                    type="text" 
                    placeholder="filter your tasks" />
            </div>
            <div className='finished-unfinished'>
                <label id='label-finished'>
                    <input 
                        type="checkbox" 
                        id="Finished" 
                        value="Finished" />
                    Finished
                </label>
                <label>
                    <input 
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
