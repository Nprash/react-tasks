import React from 'react';
import Cam from '../images/cam1.png';
import Add from '../images/adduser.png';
import More from '../images/more2.png';
import Messages from './Messages';
import Input from './Input';


const Chat = () => {
    // function moreoptions.map((e)=>{
    //     e.current.target.alert("Yet to set option to this button");
    // }) 
        function moreoptions(){
            alert("there is no options set yet ")
        }
    
    return (
        <div className='chat'>
            <div className='chatinfo'>
                <span>Nimmana Prasanth</span>
                <div className='chatIcons' >
                    <img src={Cam} className="image3"  alt="" />
                    <img src={Add} className="image3" alt="" />
                    <img src={More} className="image3" alt="" onClick={moreoptions}/>
                </div>
            </div>
            <Messages />
            <Input />

        </div>
    )
}

export default Chat;





