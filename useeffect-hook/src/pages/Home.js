
import React, { useState, useEffect } from 'react'
// import FirebaseConnect from '../Components/FirebaseConnect';
import Collectnames from '../Components/Collectnames';
import "./Home.css";
const Home = () => {
    let [usersValue, usersUpdate] = useState([]);
    let [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://name-collection-default-rtdb.firebaseio.com/studentname.json").then((res) => res.json())
            .then((data) => {
                const usernames = [];
                for (let key in data) {
                    usernames.push(data[key]);
                }
                // console.table(usernames);
                usersUpdate(usernames);
                setLoading(false);
            })

    }, [])



    return (
        <div>
            { }
            <div class={loading? 'loader' : 'd-none'}>

            </div>
            <h2 >This is Home Page Student Details Will Fetch from Firebase </h2>
            <div className='username'>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Date of Birth</th>
                    </tr>
                    { // firebase data collected in usersvalue hook and stored in collectnames components again rander below
                        usersValue.map((q) => {
                            return <Collectnames SNo ={q.data} Name={q.Name} Email={q.Email} MobileNumber={q.MobileNumber} dateofbirth = {q.DateofBirth}/>
                        })
                    }
                </table>

            </div>
        </div>
    )
}

export default Home;
