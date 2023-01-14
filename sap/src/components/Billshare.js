import React from 'react';
import { useRef, useState } from 'react';
import "./Billshare.css";


function Billshare() {
    const inputamount = useRef("0");
    const sharedwith = useRef("0");
    const [bill, setBill] = useState(0);

    function SplitHandler() {
        const amount = inputamount.current.value;
        const share = sharedwith.current.value;
        let final = (amount / share).toFixed(2);
        setBill(final)
        console.log(amount, share);
    }

    return (
        <div>
            <fieldset>
                <legend>useRef </legend>
                <input type="text" ref={inputamount} placeholder="Enter Amount" />
                <input type="text" ref={sharedwith} placeholder="Divided by" />
                {/* <textarea rows="50" cols="30" placeholder="type your query here....."></textarea> */}
            </fieldset>
            <button type="submit" onClick={SplitHandler} className='submitbtn' >Submit to Firebase</button>
            <div>
                <p className='printbill'>{bill}</p>
            </div>
        </div>
    )
}


export default Billshare;
