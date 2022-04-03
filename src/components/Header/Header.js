import React from 'react'

const Header = () => {
    return (
        <div id='header'>
            <div className='header-container'>
                <div className="d-flex flex-nowrap ">
                    <img id='img-todo'className="order-1 p-2 " src="https://openclipart.org/image/800px/16976" width={"40px"} />
                    <h5 id='title-todo' className="order-2 p-2">todo-list</h5>
                </div>
                {/* <button type="button" className="btn btn-warning">boton</button> */}
                <p id='p-title'>Create your tasks</p>
            </div>
        </div>
    )
}

export default Header
