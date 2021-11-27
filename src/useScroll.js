import React from "react" ; 
import {useAnimation} from "framer-motion" ; 
import { useInView } from "react-intersection-observer";


export const useScroll = () => {
    const [element , view] = useInView({threshold : 0.7}) ; 
    const controls = useAnimation() ; 

     view ? controls.start("show") : controls.start("hidden") ; 
 
     return [element , controls] ; 
} ; 

