import React from 'react'
import './SideNav.css'
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Home } from '@mui/icons-material';

function SideNav() {
  
  return (
    <div class="side_nav">
        <div class="icons">
        <HomeIcon />
        <span>Home</span>
        </div>
        <div class="icons" >
        <SlowMotionVideoIcon x/>
        <span>Shorts</span>
        </div>
        <div class="icons">
        <SubscriptionsIcon />
        <span>Substrictions</span>
        </div>
        <div class="icons">
        <VideoLibraryIcon />
        <span>your vedioes</span>
        </div>
        <div class="icons">
        <HistoryIcon />
        <span>History</span>
        </div>
        <div class="icons">
        <YouTubeIcon />
        <span>Library</span>
        </div>
        <div class="icons">
        <WatchLaterIcon />
        <span>Watch later</span>
        </div>
        <div class="icons">
        <KeyboardArrowDownIcon />
        <span>show more</span>
        </div>
        
        
        
        
        
    </div>
  )
}

export default SideNav