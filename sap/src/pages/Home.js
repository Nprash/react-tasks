import './Home.css';
import {Link} from 'react-router-dom'
import image1 from '../images/image1.png';

function Home() {
    return (
        <div className="center1">
            <h2> Welcome to Home Page Component</h2>
            <div className="container">
                <div className="subdiv">
                    <h3>Here is the Offer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                </div>
                <img src={image1} alt="img" className="image1"/>
                
                <Link  to='/Newsletter' className="btnn">Know More</Link>
            </div>
            <div className='service-container'>
                <h2>Services we could offer</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                <p>professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of G</p>
                <Link to = "/Services" className="btn2"><h4>Services</h4></Link>

            </div>
        </div>

    )
}

export default Home;