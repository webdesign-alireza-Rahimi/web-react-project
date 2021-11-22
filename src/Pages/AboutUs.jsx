
import React from 'react' ; 

import AboutSection from '../components/AboutSection' ; 
import ServiceSection from '../components/ServiceSection';
import FaqQuestion from '../components/FaqQuestion';
// framer motion
import { motion } from 'framer-motion';
import {animationPage} from "../animation" ; 

const AboutUs = () => {
    return <motion.div exit="exit" variants={animationPage} animate="show" initial="hidden">
       <AboutSection />
       <ServiceSection />
       <FaqQuestion />
    </motion.div> 
}

export default AboutUs ; 
