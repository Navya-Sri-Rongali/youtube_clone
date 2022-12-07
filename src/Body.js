import './Body.css'
import React from 'react'
import Card from './Card.js'
import video1 from './video1.mp4'
import video2 from './video2.mp4'
import video3 from './video3.mp4'
import video4 from './video4.mp4'
import video5 from './video5.mp4'
import video6 from './video6.mp4'
import video7 from './video7.mp4'

function Body() {
    const data=[
        {
            play:video1,
            title:"princess",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video7,
            title:"blackpink",
            profile:"blackpink",
            views:"100M",
            time:"10"
        },
        {
            play:video6,
            title:"BP",
            profile:"BP",
            views:"2M",
            time:"10"
        },
        {
            play:video2,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video3,
            title:"I got the power",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video4,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },

        {
            play:video5,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video1,
            title:"princess",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video7,
            title:"blackpink",
            profile:"blackpink",
            views:"100M",
            time:"10"
        },
        {
            play:video6,
            title:"BP",
            profile:"BP",
            views:"2M",
            time:"10"
        },
        {
            play:video2,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video3,
            title:"I got the power",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video4,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        
        {
            play:video5,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        {
            play:video4,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
        
        {
            play:video5,
            title:"BP",
            profile:"powerful",
            views:"2M",
            time:"10"
        },
    ]
  return (
    <div className="body_content">
        {data.map((arg)=>{
            return(
                <Card play={arg.play} title={arg.title} profile={arg.profile} views={arg.views} time={arg.time}/>
            )
        })
    }
    </div>
  )
}

export default Body