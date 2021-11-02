

import React from 'react' ; 
import clock from '../img/clock.svg' ; 
import teamWork from '../img/teamwork.svg' ; 
import diaphragm from '../img/diaphragm.svg' ; 
import money from '../img/money.svg' ; 
import home2 from '../img/home2.png' ; 



const ServiceSection = () =>{

    return( 
        <div>
            <div className="description">
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="icon" />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </div>
                <div className="card">
                    <div className="icon" >
                        <img src={teamWork} alt="icon"  />
                        <h3>Team Work</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="icon" />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={money} alt="icon" />
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis.</p>
                </div>
            </div>

            <div className="img" >
                <img src={home2}alt="home2" />
            </div>
        </div>
    ) ; 
}


export default ServiceSection ; 