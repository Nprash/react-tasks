
import './Counter.css';
import { useState } from 'react';
import React from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    function increamentHandler(){
        setCounter(counter + 1);
    };
    function decrementHandler(){
        // if(counter <= 0){
        //     {collect}.style.color.setAttributes();
        // }
        setCounter(counter - 1);
    };
    function resetHandler(){
        setCounter(0);
    };
    return (
        <div>
            <div className='counter'>
                <h3>React Counter Application</h3>
                <h1 className='collect'>{counter}</h1>
                <button type="" className="Btn" onClick={decrementHandler}>Decrement</button>
                <button type="" className="Btn" onClick={resetHandler}>Reset</button>
                <button type="" className="Btn" onClick={increamentHandler}>Increament</button>
            </div>
        </div>
    )
}

export default Counter
