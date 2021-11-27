
import React , {useState} from "react" ; 
import {motion } from "framer-motion" ; 

const Toggle = ({children , title}) => {
  
    const [toggle , setToggle] = useState(false) ; 

    return (
        <motion.div layout >
            <motion.h4 layout onClick= {()=> (setToggle(!toggle))}>{title}</motion.h4>
            <motion.div className="question">
                {toggle ? children : ''} 
            </motion.div>
            <motion.div className="faq-line"></motion.div>
        </motion.div>
    ) ; 
}

export default Toggle ; 