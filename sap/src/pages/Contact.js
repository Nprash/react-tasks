import './Contact.css';
function Contact(){
    return(
        <div className="Contact">
            <h2> Welcome to Contact page Component</h2>
            <form>
                <fieldset>
                    <legend>enter name</legend>
                        <input type="text" placeholder="type here....." />
                </fieldset>
            </form>
        </div>
    )
} 
export default Contact;