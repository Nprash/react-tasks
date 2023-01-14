import React from 'react';
import user5 from '../images/user5.jpg';
import user6 from '../images/user6.jpg';

const Message = () => {
    return (
        <div className='message friend'>
            <div className='messageinfo'>
                <img src= {user5} alt="" />
                <span>just now</span>
            </div>
            <div className='messagecontent'>
                <p>hii there</p>
                <img src={user6} alt='' />
            </div>
            
        </div>
    )
}

export default Message;
