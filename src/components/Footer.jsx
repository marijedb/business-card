import twitterIcon from "../images/twitter-icon.png"
import facebookIcon from "../images/facebook-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import githubIcon from "../images/github-icon.png"

function Footer(){
    return(
        <div className="footer">
            <a href="#"><img src={twitterIcon} alt="Twitter icon" /></a>
            <a href="#"><img src={facebookIcon} alt="Facebook icon" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram Icon" /></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn Icon" /></a>
            <a href="#"><img src={githubIcon} alt="Github Icon" /></a>
        </div>
    )
}

export default Footer