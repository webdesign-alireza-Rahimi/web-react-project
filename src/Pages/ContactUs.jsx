import React from "react" ; 
import { motion } from 'framer-motion';
import {animationPage , titleAnim} from "../animation" ; 
import styled from "styled-components";




const ContactUs = () =>{
    return (
        <ContactStyled variants={animationPage} animate="show" initial="hidden" className="contact-us" style={{background : "#fff"}} >
            <Title>
                <Hide>
                    <motion.h1 variants={titleAnim}>Get in touch</motion.h1>
                </Hide>
            </Title>
            <div>
                <Hide>
                <Social variants={titleAnim}>
                    <Circle></Circle>
                    <motion.h2>Send me message .</motion.h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                    <Circle></Circle>
                    <motion.h2>Send me Email .</motion.h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                    <Circle></Circle>
                    <motion.h2>Twitter intersection .</motion.h2>
                </Social>
                <Social variants={titleAnim}>
                    <Circle></Circle>
                    <motion.h2>Follow us in Instagram .</motion.h2>
                </Social>
                </Hide>
            </div>
        </ContactStyled>
    ) ; 
}



const ContactStyled = styled(motion.div)`
  padding : 5rem 10rem ; 
  color : #353535 ; 
  min-height : 90vh ; 
`; 

const Title = styled(motion.div)`
      margin-bottom: 4rem;
      color : black ; 
` ; 

const Circle = styled.div`
     width : 3rem ; 
     height : 3rem ; 
     border-radius: 50%;
     background : #353535 ; 
` ; 

const Hide = styled.div`
     overflow: hidden;
` ; 

const Social = styled(motion.div)`
   display : flex ; 
   align-items: center; 

   h2 {
       color : #353535 ; 
       margin:2rem ; 
   }

` ; 







export default ContactUs ; 