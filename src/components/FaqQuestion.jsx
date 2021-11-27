

import React from 'react' ; 
import styled from "styled-components" ; 
import {About} from "../styles" ; 
import Toggle from "./Toggle" ; 
import {AnimateSharedLayout} from "framer-motion" ; 
import { scrollReveal } from '../animation';
import { useScroll } from '../useScroll';


const FaqQuestion = () => {

    const [element , controls] = useScroll() ; 

 
    return(
        <Faq ref={element} variants={scrollReveal} animate={controls} initial="hidden" >
            <h2>Any Question? <span>FAQ</span></h2>
            <AnimateSharedLayout>
             <Toggle title="How do i start">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
              
            </Toggle>
            <Toggle title="What Product do you offer ?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
               
            </Toggle>
            <Toggle title="Differnt Payment Methode">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
        
            </Toggle>
            <Toggle title="Daily schedule">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    ) ; 
}


const Faq = styled(About)`
     
    display : block ; 

    h2 {
        font-size : 3rem ; 
        font-weight: lighter;
    }

    span {
        display : block ; 
        color: #23d997;
    }

    h4 {
        padding : 2rem 1rem 2rem 0 ; 
        font-size:1.7rem ; 
    }

    .answer {
        padding : 0 0 2rem 0 ;

        p {
            padding: 1rem 0 1rem 0;
        }
    }
    .question {
        padding : 2rem 0 2rem 0 ; 
    }
  
    .faq-line {
        width : 100% ; 
        background : #cccc; 
        height: 0.2rem;
    }   
` ;


export default FaqQuestion ; 




