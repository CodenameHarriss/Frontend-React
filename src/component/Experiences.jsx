import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../data/data'

function Experiences() {
    return (
        <div className='bg-black rounded py-3'>
            <div>
                <h3 className='fw-bold text-white text-center'>Experiences</h3>
            </div>
            <VerticalTimeline>
                {experiences.map((items, index) =>
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={items.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h4 className="vertical-timeline-element-title">{items.title}</h4>
                        <h5 className="vertical-timeline-element-subtitle">{items.company_name}</h5>
                    </VerticalTimelineElement>
                )}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(236, 57, 18)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(236, 57, 18)' }}
                    date="July 2020 - April 2021"
                    iconStyle={{ background: 'rgb(236, 57, 18)', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Card title</h4>
                    <h5 className="vertical-timeline-element-subtitle">This content is a little bit longer.</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="July 2021 - April 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Card title</h4>
                    <h5 className="vertical-timeline-element-subtitle">This content is a little bit longer.</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(236, 57, 18)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(236, 57, 18)' }}
                    date="September 2022 - Current"
                    iconStyle={{ background: 'rgb(236, 57, 18)', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Card title</h4>
                    <h5 className="vertical-timeline-element-subtitle">This content is a little bit longer.</h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experiences