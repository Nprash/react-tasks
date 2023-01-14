import React from 'react'
import MeetingCard from '../components/MeetingCard'

const MyMeetings = (props) => {
    if (!props.bookmarkedMeetings || !props.bookmarkedMeetings.length) {
        return <div>No bookmarked meetings found</div>
    }

    return (
        <div>
            {
                props.bookmarkedMeetings.map((event)=>{
                    return <MeetingCard key={event.id}  title={event.title} img={event.img} time={event.time} desc={event.desc}  />
                })
                
            }
        </div>
    )
}

export default MyMeetings;
