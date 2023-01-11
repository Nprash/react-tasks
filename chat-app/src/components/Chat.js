import React from 'react';
import Cam from '../images/cam1.png';
import Add from '../images/adduser.png';
import More from '../images/more2.png';
import Messages from './Messages';
import Input from './Input';


const Chat = () => {
    function moreoptions() {
        alert("Yet to set option to this button");
    }
    return (
        <div className='chat'>
            <div className='chatinfo'>
                <span>Nimmana Prasanth</span>
                <div className='chatIcons'>
                    <img src={Cam}  alt="" />
                    <img src={Add}  alt="" />
                    <img src={More} onClick={moreoptions} alt="" />
                </div>
            </div>
            <Messages />
            <Input />

        </div>
    )
}

export default Chat;





