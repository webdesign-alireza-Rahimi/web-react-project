import React from "react" ; 

import styled from "styled-components";
import athlete from "../img/athlete-small.png" ; 
import goodTimes from "../img/goodtimes-small.png" ; 
import theracer from "../img/theracer-small.png" ; 

import { Link } from "react-router-dom";

// framer motion
import { motion } from 'framer-motion';
import {animationPage ,sliderContainer ,sliderAnim  , fade , photoAnim , lineAnim} from "../animation" ; 
import {useInView} from "react-intersection-observer" ; 
import { useAnimation } from "framer-motion";
import {useScroll} from "../useScroll" ; 



const OurWork = () => {

    const [element , controls] = useScroll() ; 
    const [element2 , controls2] = useScroll() ; 
    

    return (
        <Work exit="exit" style={{background : "#fff"}} variants={animationPage} animate="show" initial="hidden">
            <motion.div variants={sliderContainer} >
            <Frame1 variants={sliderAnim}></Frame1>
            <Frame2 variants={sliderAnim}></Frame2>
            <Frame3 variants={sliderAnim}></Frame3>
            <Frame4 variants={sliderAnim}></Frame4>
            </motion.div>
        <Movei>
            <motion.h1 variants={fade}  className="title">The Athlete</motion.h1>
            <motion.div  variants={lineAnim} className="under-line"></motion.div>
            <Link to="/work/the-athlete">
                <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                </Hide>
            </Link>
        </Movei>
        <Movei  ref={element} variants={fade} initial="hidden" animate={controls}>
            <h1 className="title">The Theracer</h1>
            <motion.div variants={lineAnim} className="under-line"></motion.div>
            <Link to="/work/the-racer"> 
            <img src={theracer} alt="athlete" />
            </Link>
        </Movei>
        <Movei  ref={element2} variants={fade} initial="hidden" animate={controls2}>
            <h1 className="title">Good Times</h1>
            <motion.div variants={lineAnim} className="under-line"></motion.div>
            <Link to="/work/good-times">
            <img src={goodTimes} alt="athlete" />
            </Link>
        </Movei>
        </Work>
    ) ; 
}

const Work = styled(motion.div)`
   padding: 5rem 10rem ;
   min-height: 100vh;
   margin: auto;
   overflow: hidden;
`; 

const Movei = styled(motion.div)`
     padding-bottom: 10rem;
     img{
         width : 100% ;
         height : 70vh ;
         object-fit: cover;
     }
     h1 {
        padding:1rem 0;
     }

     .under-line {
         width: 100%;
         background : #573838; 
         height: 0.5rem;
         margin-bottom: 3rem;
     }
`; 

const Hide = styled.div`
       overflow : hidden ; 
` ; 


const Frame1 = styled(motion.div)`
   position : fixed ; 
   width : 100% ; 
   height : 100vh ; 
   top : 10% ; 
   left : 0 ; 
   background: #814d4d;
   z-index : 2 ; 
` ;

const Frame2 = styled(Frame1)`
    background : #b68686 ; 
` ; 

const Frame3 = styled(Frame1)`
    background : #8e60b4 ; 
` ; 

const Frame4 = styled(Frame1)`
    background : #3a9728 ; 
` ;


export default OurWork ; 
