

import React from 'react' ; 
import home1 from '../img/home1.png' ; 


const AboutSection = () => {

     return(
          <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                       <h1>We work to make</h1>
                    </div>
                    <div className="hide">
                        <h1>your <span>dreams</span></h1>
                    </div>
                    <div className="hide">come true.</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia.</p>
                    <button className="contact-us">Contact Us</button>
                </div>
            </div>
            <div className="image">
                <img src={home1} alt="imgae for contact us" />
            </div>
          </div>
     )
}


export default AboutSection; 