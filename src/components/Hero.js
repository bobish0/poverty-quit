import React from 'react';
import Logo2 from '../img/logo2.png';
import '../pages/news.css';
import ParticleBackground from '../pages/particle-js';


function Hero() {
    return (
        <div>
            <ParticleBackground/>
            <div className ='first-page-landing'>
<               img className ='image-logo' src={Logo2}/>

            </div>
        </div>
    )
}

export default Hero



