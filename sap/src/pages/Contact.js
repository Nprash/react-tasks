import Billshare from '../components/Billshare';
import { useRef, useState } from 'react';
import './Contact.css';
import FirebaseDemo from '../components/FirebaseDemo';


function Contact() {
    const inputdata = useRef(null); // this is to collect inputfield data
    const [userfield, setUserfield] = useState(null); // this is to assign and store the value of inputfield data

    function submitHandler() {
        const userdata = inputdata.current.value;
        setUserfield(userdata); //we are passing/assign userdata or inputfield data to fetch again saperately
        //console.log(); // we can collect above line data by its actual variable is "userfield"
        // inputdata.preventdefault(); still it is not working , output not stable
    };
    return (
        <div className='contactdiv'>
            <section className="Contact">
                <h2> Welcome to Contact page Component <p>useRef - Hook example</p></h2>
                <div>
                    <fieldset>
                        <legend>useRef with one inputfield & its output  </legend>
                        {/* <input type="text"  placeholder="user name type here....." />
                <input type="text" placeholder="email type here....." /> */}
                        <textarea rows="50" cols="30" ref={inputdata} placeholder="type your query here....."></textarea>
                    </fieldset>
                    <button type="submit" className='submitbtn' onClick={submitHandler}>Submit to Firebase</button>
                    <div>
                        <p className='printbill'>{userfield}</p>
                    </div>
                </div>
                <Billshare />
                <FirebaseDemo/>
            </section>
        </div>
    )
}
export default Contact;
