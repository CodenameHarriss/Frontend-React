import React from 'react'
import TreeD from '../component/TreeD'
import Experiences from '../component/Experiences'
function About() {
    return (
        <div className='container'>
            <div className='text-center'>
                <h2 className='fw-bold mt-2'>About Me</h2>
                <TreeD />
            </div>
            <div className='mt-2'>
                <Experiences />
            </div>
        </div>
    )
}

export default About