import React from "react" ; 

import styled from "styled-components";
import athlete from "../img/athlete-small.png" ; 
import goodTimes from "../img/goodtimes-small.png" ; 
import theracer from "../img/theracer-small.png" ; 

import { Link } from "react-router-dom";

const OurWork = () => {

    return (
        <Work>
        <Movei>
            <h1 className="title">The Athlete</h1>
            <div className="under-line"></div>
            <Link to="/work/the-athlete">
            <img src={athlete} alt="athlete" />
            </Link>
        </Movei>
        <Movei>
            <h1 className="title">The Theracer</h1>
            <div className="under-line"></div>
            <Link to="/work/the-racer"> 
            <img src={theracer} alt="athlete" />
            </Link>
        </Movei>
        <Movei>
            <h1 className="title">Good Times</h1>
            <div className="under-line"></div>
            <Link to="/work/good-times">
            <img src={goodTimes} alt="athlete" />
            </Link>
        </Movei>
        </Work>
    ) ; 
}

const Work = styled.div`
   padding: 5rem 10rem ;
   min-height: 100vh;
   margin: auto;
   overflow: hidden;
` ; 

const Movei = styled.div`
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
         background : #cccccc ; 
         height: 0.5rem;
         margin-bottom: 3rem;
     }
` ; 


export default OurWork ; 
