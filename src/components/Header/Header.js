import React from 'react'

const Header = () => {

    return (
        <div className='flex flex-col items-center py-2 header-container shadow-lg'>
            <img src="https://openclipart.org/image/800px/16976" width={"40px"} alt='logo of app'/>
            <h1 className='text-2xl'>To do list</h1>
            <p >Create your tasks</p>
        </div>
    )
}

export default Header
