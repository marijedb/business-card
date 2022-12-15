import profilePicture from "../images/sample-picture.png"
import mail from "../images/mail.png"

function Info() {
    return(
        <div className="info">
            <img src={profilePicture} />
            <h1 className="info--name">Laura Smith</h1>
            <p className="info--function">Frontend Developer</p>
            <a className="info--website" href="#" >laurasmith.website</a>
            <a className="info--email" href="#"><img className="info--email-img" src={mail} />Email</a>
        </div>
    )
}

export default Info