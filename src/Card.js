import React from 'react'
import './Card.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Card({play,title,profile,views,time}) {
  return (
    <div className='card_body'>
        <video height="180px" width="300px" controls>
            <source src={play} type="video/mp4"></source>
        </video>
        <div className='section1'>
            <AccountCircleIcon/>
            <p className='title_name'>{title}</p>
            <MoreVertIcon/>
        </div>
        <div className='section2'>
            <p>{views}views .</p>
            <p>{time}days ago</p>
        </div>
    </div>
  )
}

export default Card