

import React from 'react' ; 
import clock from '../img/clock.svg' ; 
import teamWork from '../img/teamwork.svg' ; 
import diaphragm from '../img/diaphragm.svg' ; 
import money from '../img/money.svg' ; 
import home2 from '../img/home2.png' ; 


import { About , Description , Image } from '../styles';
import styled from 'styled-components';


const ServiceSection = () =>{

    return( 
        <Services >
            <Description>
                <Cards>
                <Card>
                    <div className="icon">
                        <img src={clock} alt="icon" />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </Card>
                <Card>
                    <div className="icon" >
                        <img src={teamWork} alt="icon"  />
                        <h3>Team Work</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={diaphragm} alt="icon" />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={money} alt="icon" />
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </Card>
                </Cards>
            </Description>

            <Image >
                <img src={home2}alt="home2" />
            </Image>
        </Services>
    ) ; 
}


const Services = styled(About)`
     h2 {
         padding-bottom: 5rem;
     }
     p{
         width : 70% ; 
         padding : 2rem 0 4rem 0 ;  
     }
`;

const Cards = styled.div`
      display : flex ; 
      flex-wrap: wrap ; 
`;

const Card = styled.div`
   flex-basis: 20rem ; 
   .icon {
       display : flex ; 
       align-items: center ; 
   }

   h3 {
       margin-left : 1rem ; 
       background:white ; 
       color : black ; 
       padding :1rem ;
   }

`;

export default ServiceSection ; 
