import React from 'react'
import logo1 from '../images/user1.jpg'
import logo2 from '../images/user2.jpg'
import logo3 from '../images/user3.jpg'
import logo4 from '../images/user4.jpg'
import logo5 from '../images/user5.jpg'
import logo6 from '../images/user6.jpg'
import logo7 from '../images/user7.jpg'
import logo8 from '../images/user8.jpg'
import './CompStyle.scss';



const Chats = () => {
    return (
        <div className='chats'>
            <div className='userchat'>
                <img src={logo1} alt="" />
                <div className='userchatinfo'>
                    <span>Lucy</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo2} alt="" />
                <div className='userchatinfo'>
                    <span>misly</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo3} alt="" />
                <div className='userchatinfo'>
                    <span>dwery</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo4} alt="" />
                <div className='userchatinfo'>
                    <span>swane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo5} alt="" />
                <div className='userchatinfo'>
                    <span>jijenku</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo6} alt="" />
                <div className='userchatinfo'>
                    <span>Lihi</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo7} alt="" />
                <div className='userchatinfo'>
                    <span>pete</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo8} alt="" />
                <div className='userchatinfo'>
                    <span>john</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo8} alt="" />
                <div className='userchatinfo'>
                    <span>john</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo8} alt="" />
                <div className='userchatinfo'>
                    <span>john</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className='userchat'>
                <img src={logo8} alt="" />
                <div className='userchatinfo'>
                    <span>john</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats;
