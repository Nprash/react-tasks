import React from 'react';
import { useRef, useState } from 'react';
import "./Billshare.css";


function FirebaseDemo() {
    const inputamount = useRef("0");
    const sharedwith = useRef("0");
    const [bill, setBill] = useState("");
    const [status, setStatus] = useState("");

    // function SplitHandler() {
        // let amount = inputamount.current.value;
        // const share = sharedwith.current.value;
        // let final = (amount / share).toFixed(1);
        // // setBill(final)
        // // console.log(amount, share);
        // let students = {
        //     Name: "prasanth",
        //     Bill: final
        // }
        // fetch('https://shared-bill-8a298-default-rtdb.firebaseio.com/bill.json', {
        //     method: 'post',
        //     body: JSON.stringify(students)
        // }).then(() => {
        //     setStatus("submitted to firebase");
        // }, 2000)
    // }


    return (
        <div>
            <h2>Connect your react App with Firebase</h2>
            <fieldset>
                <legend>useRef With Firebase - Data Base</legend>
                <input type="number" ref={inputamount} placeholder="Enter Amount" />
                <input type="number" ref={sharedwith} placeholder="Divided by" />
                {/* <textarea rows="50" cols="30" placeholder="type your query here....."></textarea> */}
            </fieldset>
            <button type="submit" onClick={()=>{
                let amount = inputamount.current.value;
                const share = sharedwith.current.value;
                let final = (amount / share).toFixed(1);
                setBill(final)
                console.log(final);
                let students = {
                    Name: "prasanth",
                    Bill: final
                }
                fetch('https://shared-bill-8a298-default-rtdb.firebaseio.com/bill.json', {
                    method: 'post',
                    body: JSON.stringify(students)
                }).then(() => {
                    setStatus("submitted to firebase");
                }, 2000)
            }} className='submitbtn' >Submit to Firebase</button>
            <div>
                <p className='printbill'>{bill}{status}</p>
            </div>
        </div>
    )
}


export default FirebaseDemo;
