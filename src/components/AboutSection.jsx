

import React from 'react' ; 
import home1 from '../img/home1.png' ; 
// import styled from 'styled-components';
import { About ,Description , Image , Hide } from "../styles" ; 
// Framer motion 
import { motion } from "framer-motion" ; 
import {photoAnim, titleAnim } from "../animation" ; 
import { fade } from '../animation';

const AboutSection = () => {


     return(
          <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                       <motion.h2  variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={titleAnim}  >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide><motion.h2  variants={titleAnim} >true.</motion.h2></Hide>
                    <motion.p variants={fade}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia.</motion.p>
                    <motion.button variants={fade}className="contact-us">Contact Us</motion.button>
                </motion.div>
            </Description>
            <Image>
                <motion.img variants={photoAnim} img src={home1} alt="imgae for contact us" />
            </Image>
          </About>
     )
}
 


export default AboutSection; 