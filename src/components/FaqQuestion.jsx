

import React from 'react' ; 
import styled from "styled-components" ; 
import {About} from "../styles" ; 

const FaqQuestion = () => {


    return(
        <Faq>
            <h2>Any Question? <span>FAQ</span></h2>

            <div className="question">
                <h4>How do i start ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Product do you offer ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Differnt Payment Methode</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti iusto assumenda incidunt aperiam voluptatum?</p>
                </div>
                <div className="faq-line"></div>
            </div>

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




