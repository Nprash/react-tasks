import React from 'react';
// import { useState } from 'react';
import './MeetingCard.css';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

const MeetingCard = (props) => {
    // let [loading, setLoading] = useState(false)
    // let date=new Date();
    // let time1 = props.time;
    // const dt =document.getElementById('datedate');
    // dt.innerHTML = time1.getDate() + "-" + (time1.getMonth() + 1) + "-" + time1.getFullYear();

    return (
        <div className='meeting-card'>
            <div className='meetingcard'>
                <img className='meeting-img' src={"https://source.unsplash.com/1600x800/?" + props.img} alt='meetimg' />
                <div className='flex'>
                    <p>{props.time}</p>
                    <BookmarksOutlinedIcon onClick={props.handleBookmarkClick} style={{cursor:"pointer"}} fontSize={"1.9rem"}/>
{/* this bookmark will render at home.js with function call of handleBookmarkClick 
bcz we sent a props with this function to call/render at home.js 
again it will render at mymeetings.js by sending props with use state variable this will
happene when user click at bookmark icon here at home.js */}
                </div>
                <div className='ptag'>
                    <h5>{props.title}</h5>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default MeetingCard;
