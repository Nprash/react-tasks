import React from 'react';
import './FirebaseConnect.css'
import {useNavigate} from 'react-router-dom'
import { useState, useRef } from 'react';

const FirebaseConnect = () => {
    const navigate = useNavigate(); // to navigate from current component to specified component so we initialized here
    const enterinput = useRef("");
    const enteremail = useRef("");
    const mobileno = useRef("");
    const dobfield = useRef("");
    // const [entername, setEntername] = useState(null)
    const [loadstatus, setLoadstatus] = useState(false) // initially loading circle is false

    function hitHandler() {
        setLoadstatus(true); // this will trigger when user clicks button circle will happen

        const datafield = enterinput.current.value;
        const emailfield = enteremail.current.value;
        const numberfiled = mobileno.current.value;
        const dob = dobfield.current.value;
        // setEntername(datafield);
        let fielddata = {
            Name: datafield,
            Email:emailfield,
            MobileNumber: numberfiled,
            DateofBirth: dob
        }
        fetch("https://name-collection-default-rtdb.firebaseio.com/studentname.json", {
            method: "POST",
            body: JSON.stringify(fielddata)
        }).then(() => {
            // setLetstatus("Successfully submitted to Firebase");
            navigate('/'); // it will navigate to the specified component
        })
    };

    return (
        <div>
            <div className='collect'>
                <fieldset>
                    <legend>User Details</legend>
                    <input type="text" ref={enterinput} placeholder='type your name ..' /><br></br>
                    <input type='email' ref ={enteremail} placeholder='type your email..' /><br></br>
                    <input type='number' ref ={mobileno} placeholder='enter your mobile number..' /><br></br>
                    <legend>Enter Date of Birth</legend>
                    <input type='datetime-local' ref={dobfield} placeholder='enter date of birth' />
                    <button className='submitbtn' onClick={hitHandler}>Submit to Firebase <div className={loadstatus ? "btn-loading" :'d-none'}></div> </button>
                </fieldset>
            </div>
            {/* <p>{letstatus}</p> */}
        </div>
    )
}

export default FirebaseConnect;
