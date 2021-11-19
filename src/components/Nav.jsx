
import React from "react" ; 
import styled from "styled-components" ; 
import { Link } from "react-router-dom";


const Nav = () => {

   return (
       <NavStyle>
           <Link to="/" id="logo">
               <h1>Capture</h1>
           </Link>
           <ul>
               <li>
                   <Link to="/">1. About us</Link>
               </li>
               <li>
                   <Link to="/work">2. Our Work</Link>
               </li>
               <li>
                   <Link to="/contact">3. Contact Us</Link>
               </li>
           </ul>
       </NavStyle>
   ) ; 
}

const  NavStyle = styled.nav`
    
    display : flex ; 
    align-items : center ; 
    justify-content: space-between;
    min-height: 10vh;
    padding: 1rem 10rem;
    margin: auto;
    background : #282828 ; 

    #logo {
        color : white ; 
        font-family: "lobster" , cursive;
        font-size : 1.5rem ; 
        text-decoration : none ; 
        h1 {
            font-weight: lighter;
        }
    }

    ul {
        display : flex ; 
        list-style: none ;
    }

    li {
        list-style : none ; 
        position: relative;
        margin-left : 10rem ; 
    }

    a {
        text-decoration : none ; 
        color : white ; 
    }

` ; 

export default Nav ; 
