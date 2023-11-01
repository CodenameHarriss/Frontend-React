import React from 'react'
import TreeD from '../component/TreeD'

function About() {
    return (
        <div className='container'>
            <div className='text-center'>
                <h2 className='mt-2'>About Me</h2>
                <TreeD />
            </div>
            <div className='card p-5 bg-black text-white'>
                <div className='card-body'>
                    <h3 className='fw-bold text-primary'>Earth</h3>
                    <span className='fs-5 mt-2 fw-semibold'>"Planet Earth" redirects here. For other uses, see Earth (disambiguation) and Planet Earth (disambiguation).</span>
                    <p className='mt-4 fw-medium'>Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within one hemisphere, Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.</p>
                </div>
            </div>
        </div>
    )
}

export default About