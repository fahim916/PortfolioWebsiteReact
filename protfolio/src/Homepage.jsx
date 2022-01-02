import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Homepage/NavBar'
import Intro from './Homepage/Intro'
export default function homepage() {
    return (
        <div className="homepage bg-black">
            <div className="sections">
                <NavBar/>
                <Intro/>
            </div>
        </div>
    )
}
