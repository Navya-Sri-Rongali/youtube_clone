import './Header.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Avatar} from '@mui/material';

function Header() {
  return (
    <div class="header">
        <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" class="youtube"/>
        <div class='middle'>
        <input placeholder="search" type="text" className='bar'></input>
        <SearchIcon className='Search'/>
        <MicIcon className='Mic'/>
        </div>
        <div class="last_icons">
            <VideoCameraBackIcon ClassName="icons"/>
            <NotificationsActiveIcon ClassName="icons"/>
            <Avatar/>
            </div>

    </div>
    
  )
}

export default Header