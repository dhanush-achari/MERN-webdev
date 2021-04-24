import React from 'react'
import Navbar from './Navbar'

function Base({title="My Title",
description="Description",
className = "bg-dark text-white p-4",
children}) {
    return (
        <div>
            <Navbar/>

             <div className="container-fluid">
                <div className="jumbotron text-center">
                    <div className="display-4 text-white">
                        {title}
                    </div>
                    <p className="lead text-white">{description}</p>
                    <hr className="my-4"/>
                    <button className="btn bg-success btn-lg">Click me!</button>
                </div>
                <div className={className}>{children}</div>
                <footer className="footer bg-dark mt-auto py-3">
                    <div className="container-fluid  bg-success text-white text-center">
                           <div className="text-white">Ask Questions</div>
                           <button className="btn btn-lg bg-primary">Contact Us!</button>
                    </div>
                    <div className="container text-white">
                        <div classname='text-muted'>Best course</div>
                    </div>
                </footer>
            </div>
            
        </div>
    )
}

export default Base
