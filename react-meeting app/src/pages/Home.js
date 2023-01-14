import React from 'react'
import { useEffect, useState } from 'react';
import MeetingCard from '../components/MeetingCard';
import './Home.css';


const Home = () => {
    const [meetings, setMeetings] = useState([]);
    let [loading, setLoading] = useState(true)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //for date an d time purpose toLocalDateString method

    //bookmarked card will be sent/render here at MyMeeting.js component with this use State variable 
    const [bookmarkedMeetings, setBookmarkedMeetings] = useState([]);

    useEffect(() => {
        fetch("https://meeting-app-37cd4-default-rtdb.firebaseio.com/meetings.json").then((response) => response.json()).then((data) => {
            const meetingsarray = [];
            for (let key in data) {
                meetingsarray.push(data[key]);
                setMeetings(meetingsarray);
            }
            // console.log(meetingsarray);
            setLoading(false);

        });

    }, [])
    // let time;

    const handleBookmarkClick = (meeting) => {
        setBookmarkedMeetings([...bookmarkedMeetings, meeting]);
        
    }

    return (
        <>
            <div className='homepage'><h3>Scheduled Meetings</h3></div>

            <div className={loading ? 'loading' : 'd-none'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='meetingcontainer'>
                {
                    // here we will map the meetings hooks in which contains array of objects came from firebase
                    // and will return the meetingCards component by passing the values from hereee to meetingCrd component with props again will render here only
                    // means we will pass the value to component and get back here to render

                    meetings.sort((a, b) => {
                        let dateA = new Date(a.MeetingSchedule).getTime();//extracting time from usergiven time at the time of scheduling the meeting in addmeeting component
                        let dateB = new Date(b.MeetingSchedule).getTime();
                        // console.log(dateA)
                        // compare and sort the dates
                        if (dateA < dateB)
                            return -1;
                        // here we need to sort the time based on given scheduled meeting time, suppose in one day we 3 meetings then 
                        //it compares meeting times among the meetings happened in one day,,,, so above if compare times 
                        //result is based on numberlne -1 means goes left in actual comes first from left to right  <-----------
                        //suppose else if satisfied comes right side on the number line which is positive means comes second after negative or subsequently
                        else if (dateA > dateB)
                            return 1;
                        else
                            return 0;
                    }).filter((event) => {
                        let today = new Date();
                        return (new Date(event.MeetingSchedule) > today)
                    }).map((event, index) => {
                        let date = new Date(event.MeetingSchedule)
                        let fdate = date.toLocaleDateString("en", options)
                        let ftime = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }); // this is for time formatting brought from mdn sourse
                        let formattedmeetingtime = (ftime + " " + fdate)
                        // console.log(meetingtimeanddate)
                        return <MeetingCard key={index} handleBookmarkClick={() => handleBookmarkClick(event)} title={event.MeetingTitle} img={event.MeetingImage} time={formattedmeetingtime} desc={event.Meetingdescription} />
                    })// this Meetingcard i want render again at MyMeeting.js component as a bookmarked card,
                    //again this title, img, time,desc will be sent/called at MyMeeting.js as props
                }

                {/* handleBookmarkClick= {()=>handleBookmarkClick(e)} here RHSide we pass a function inside a function in which declared at line30
                as usal we pass e/evenet as paarameter inside this RHS   */}

            </div>
        </>
    )
}

export default Home;
