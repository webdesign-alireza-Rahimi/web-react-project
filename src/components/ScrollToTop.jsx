import React , {useEffect} from "react" ; 
import {useLocation} from "react-router-dom" ; 



const ScrollToTop = () => {
      const { pathname} = useLocation() ; 
      useEffect(() => {
            window.scroll({top : 0 , left : 0}) ; 
      } , [pathname]) ; 

      console.log(pathname) ; 

  return null ; 
} ; 


export default ScrollToTop ; 


