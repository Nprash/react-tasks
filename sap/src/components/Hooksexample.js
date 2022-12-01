import React, {useState} from 'react';
import './Hooks.css';

function Hooksexample() {
    const [counter, setCounter] = useState(0);
    
    function hikeHandler(){
        let random = Math.floor(Math.random() *100);
        setCounter(random)
        // setCounter(counter+1);
        // console.log(counter);
    };
    return (
        <div>
            <div className='H-container'>
                <h2><span>this is Hooks Component</span> <br />Basic Counter:- <span>{counter} </span></h2>
                <button type="" className='btns' onClick={hikeHandler}>Increament</button>
            </div>
        </div>
    )
}

export default Hooksexample;
