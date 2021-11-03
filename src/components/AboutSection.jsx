

import React from 'react' ; 
import home1 from '../img/home1.png' ; 
import styled from "styled-components" ; 


const AboutSection = () => {

     return(
          <About>
            <Description>
                <div className="title">
                    <Hide >
                       <h2>We work to make</h2>
                    </Hide>
                    <Hide >
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide ><h2>true.</h2></Hide>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia.</p>
                    <button className="contact-us">Contact Us</button>
                </div>
            </Description>
            <Image>
                <img src={home1} alt="imgae for contact us" />
            </Image>
          </About>
     )
}
 
const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90vh;
    padding: 5rem 10rem;
    color: white;
` ; 


const Description = styled.div`
     flex : 1 ; 
     
     padding-right : 5rem ;
     h2 {
         font-weight: lighter;
     }

` ; 

const Image = styled.div`
     flex : 1 ;
     overflow: hidden;
     img {
         width: 100%;
         height: 80vh;
         object-fit: cover;
     }
` ; 

const Hide = styled.div`
      overflow: hidden;
  ` ; 


export default AboutSection; 