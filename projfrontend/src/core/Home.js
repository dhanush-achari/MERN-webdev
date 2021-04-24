import React from 'react'
import {API} from '../backend'
import './home.css'
import Base from "./Base";

function Home() {
    console.log(API)
    return (
        <Base title = "Home Page">
            <h1 className='text-white'>Hello Home {API}</h1>
        </Base>
    )
}

export default Home