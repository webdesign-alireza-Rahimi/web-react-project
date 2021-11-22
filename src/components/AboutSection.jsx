

import React from 'react' ; 
import home1 from '../img/home1.png' ; 
// import styled from 'styled-components';
import { About ,Description , Image , Hide } from "../styles" ; 
// Framer motion 
import { motion } from "framer-motion" ; 


const AboutSection = () => {

    const titleAnim = {
         hidden : { opacity : 0} , 
         show : {opacity : 1 , transition : {duration : 1}} , 
    } ;

    const container = {
        hidden : {x : 100 } , 
        show : {x : 0 , transition : {duration : 0.75 , staggerChildren : 1 , when: "afterChildren"}  } 
    }


     return(
          <About>
            <Description>
                <motion.div exit="exit" variants={container} animate="show" initial="hidden" className="title">
                    <Hide>
                       <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide><motion.h2 variants={titleAnim} >true.</motion.h2></Hide>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia.</p>
                    <button className="contact-us">Contact Us</button>
                </motion.div>
            </Description>
            <Image>
                <img src={home1} alt="imgae for contact us" />
            </Image>
          </About>
     )
}
 


export default AboutSection; 