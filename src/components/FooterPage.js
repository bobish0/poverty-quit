import React, {Component} from 'react';
import './FooterPage.css';
import Logo3 from '../img/logo3.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faSnapchatSquare } from "@fortawesome/free-brands-svg-icons"
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"

const FacebookIcon = <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="hover-effect"/>
const InstagramIcon = <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="hover-effect"/>
const LinkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="hover-effect"/>
const SnapchatIcon = <FontAwesomeIcon icon={faSnapchatSquare}size="2x"className="hover-effect"/>
const YoutubeIcon = <FontAwesomeIcon icon={faYoutubeSquare}size="2x"className="hover-effect"/>

class FooterPage extends Component {

    render()  {
        return (

            <div className='footer-style'>


            <img className='footer-image' src={Logo3}/>
         

             <div className='social-media-icons'>
                <p><a target='_blank' href={'https://www.facebook.com/'}>{FacebookIcon}</a></p>
                <p><a target='_blank' href={'https://www.instagram.com/'}>{InstagramIcon}</a></p>
                <p><a target='_blank' href={'https://www.linkedin.com/feed/'}>{LinkedinIcon}</a></p>
                <p><a target='_blank' href={'https://www.snapchat.com/'}>{SnapchatIcon}</a></p>
                <p><a target='_blank' href={'https://www.youtube.com/'}>{YoutubeIcon}</a></p>
              
            </div>



            </div>
        )
    }
}

export default FooterPage;