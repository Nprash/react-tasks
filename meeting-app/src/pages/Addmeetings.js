import React from 'react'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';




const Addmeetings = () => {
    const [submitStatus, setSubmitStatus] = useState(false);
    const meetingtitle = useRef();
    const meetingimage = useRef();
    const meetingschedule = useRef();
    const meetingdescription = useRef();
    let Navigate = useNavigate();

    // const [modal, setModal] = useState(false);
    // const newmodal = document.querySelector(".modal");


    function createmeetingHandler() {
        setSubmitStatus(true);
        // setModal(true);

        const titlefield = meetingtitle.current.value;
        const imagefield = meetingimage.current.value;
        const schedulefield = meetingschedule.current.value;
        const descriptionfield = meetingdescription.current.value;
        const box = document.querySelector('.checkbox')

        //1st if condition checks all the input field should fill if the 1st condition is passed then 2nd if condition
        //will execute and its subsequent(2nd) else condition also execute;
        //
        //if 1st if condition failed it wont execute 2nd if condition ,it goes to its subsequent else condition which 
        //is last else condition says fil all the input fields
        if(titlefield !== '' && imagefield !== '' && schedulefield !== '' && descriptionfield !== ''){

            if (box.checked === true){
                let formdata = {
                    MeetingTitle: titlefield,
                    MeetingImage: imagefield,
                    MeetingSchedule: schedulefield,
                    Meetingdescription: descriptionfield
                }
                fetch('https://meeting-app-37cd4-default-rtdb.firebaseio.com/meetings.json', {
                    method: "post",
                    body: JSON.stringify(formdata)
                }).then(() => {
                    setSubmitStatus(false);
                    Navigate('/');
                })
                
            } else {
                window.alert('tick the checkbox')
                setSubmitStatus(false);
                // setModal(true);
    
                // above line setModal(!modal) means modal value toggles between true and false, initially it false when I give !modal it alter the value and updates with setModal  
            
            }

        }else{
            window.alert("plz fill all the field");
            setSubmitStatus(false);
        }
        

    };

    return (
        <>
            <div >

                <div className='titlehead'>
                    <h3>Add New Meetings</h3>
                    <p>Elaborate  updates with the new team </p><br />
                </div>

                <div className='addmeetingshere'>
                    <div className='div1'>
                        <label htmlFor="title" required>Enter the meeting Title:</label>
                        <input type='text' ref={meetingtitle} id="title" placeholder='Enter the Title' />
                    </div>
                    <div className='div2'>
                        <label htmlFor="meetimg">Meeting image:</label>
                        <input type='text' ref={meetingimage} id="meetimg" placeholder='Enter the image tag' /><br />
                    </div>
                    <div className='div3'>
                        <label htmlFor="meettime">Meeting Schedule:</label>
                        <input type='datetime-local' id="meettime" ref={meetingschedule} /><br />
                    </div>
                    <div className='div4'>
                        <label htmlFor="meetdetails">Meeting Description:</label>
                        <textarea type='text' id="meetdetails" ref={meetingdescription} rows='3' col='5' placeholder='Enter the Meeting Description' /><br /><br />
                    </div>
                    <div className='div5'>
                        <input type='checkbox' className='checkbox' />
                        <p className='small'>By creating new meeting you are agree with our terms and conditions. </p>
                    </div>
                    <button className='btn1' onClick={createmeetingHandler}>Create Meeting <div className={submitStatus ? 'loader1' : 'd-none'}></div> </button>
                    {/* below say if modal is true(&&) then the code follows or executes */}
                    {/* {modal && (
                        <div className='modal'>
                            <div className='overlay' onClick={createmeetingHandler}>
                                <div className='modal-content'>
                                    <h4>tick the check box</h4>
                                    <p>without checking this checkbox you wont allowed to create a meeting further</p>
                                    <button className='close-modal' onClick={createmeetingHandler}>close</button>
                                </div>
                            </div>
                        </div>
                    )} */}

                </div>

            </div>

        </>


    )

}

export default Addmeetings;
