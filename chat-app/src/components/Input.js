import React from 'react'
import Smile from '../images/smile.png'
import Attach from '../images/attachment.png'
import Like from '../images/like.png'
import Mic from '../images/microphone.png'

const Input = () => {
    return (
        <div className='input'>
            <div className='icon-1'>
                <img src={Smile} alt="" />
                <input type="file" style={{display:"none"}} id='fileattach' name="" value="" />
                <label htmlFor="fileattach">
                    <img src={Attach} alt="" />
                </label>
            </div>
            <input type="text" placeholder='type your message' name="" value="" />
            <div className='icon-2'>
                <img src={Like} alt="" />
                <img src={Mic} alt="" />
            </div>
        </div>
    )
}

export default Input;
