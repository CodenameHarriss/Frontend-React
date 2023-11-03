import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Experiences() {
    return (
        <div className='bg-black rounded py-3'>
            <div>
                <h3 className='fw-bold text-white text-center'>Experiences</h3>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="July 2019 - April 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Study</h3>
                    <h4 className="vertical-timeline-element-subtitle">Songkhla Rajabhat University</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(236, 57, 18)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(236, 57, 18)' }}
                    date="September 2023 - Current"
                    iconStyle={{ background: 'rgb(236, 57, 18)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Work</h3>
                    <h4 className="vertical-timeline-element-subtitle">BAN SUZUKI</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experiences