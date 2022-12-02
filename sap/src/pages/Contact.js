import './Contact.css';
import { useRef, useState } from 'react';

function Contact() {
    const inputdata = useRef(null); // this is to collect inputfield data
    const [userfield, setUserfield] = useState(null); // this is to assign and store the value of inputfield data
    function submitHandler() {
        const userdata = inputdata.current.value;
        setUserfield(userdata); //we are passing/assign userdata or inputfield data to fetch again saperately
        console.log(userdata); // we can collect above line data by its actual variable is "userfield"
    };
    return (
        <div className="Contact">
            <h2> Welcome to Contact page Component</h2>
            <form>
                <fieldset>
                    <legend>Enter Name</legend>
                    <input type="text"  placeholder="type here....." />
                </fieldset>
                <fieldset>
                    <legend>Enter Emain</legend>
                    <input type="text"  placeholder="type here....." />
                </fieldset>
                <fieldset>
                    <legend>Enter Your Query</legend>
                    <textarea rows="4" cols="60" ref={inputdata} placeholder="type here....."></textarea>
                </fieldset>
                <button type="submit" className='submitbtn' onClick={submitHandler}>Submit to Firebase</button>
            </form>
            <div>
                <p>{userfield}</p>
            </div>
        </div>
    )
}
export default Contact;