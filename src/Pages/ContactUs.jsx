import React from "react" ; 
import { motion } from 'framer-motion';
import {animationPage} from "../animation" ; 



const ContactUs = () =>{
    return (
        <motion.div variants={animationPage} animate="show" initial="hidden" className="contact-us">
            <h1>Contact Us</h1>
        </motion.div>
    ) ; 
}

export default ContactUs ; 