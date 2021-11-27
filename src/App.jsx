
import React from 'react' ; 
import AboutUs from './Pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav" ; 
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import {Route , Switch} from "react-router-dom" ; 
import MovieDetail from "./Pages/MovieDetail" ; 

import {AnimatePresence} from "framer-motion" ; 
import {useLocation} from "react-router-dom" ; 

function App() {
  const location = useLocation() ; 
  
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
    <Route path="/" exact>
    <AboutUs />
    </Route>
    <Route path="/work" exact> 
    <OurWork />
    </Route>
    <Route path="/work/">
      <MovieDetail />
    </Route>
    <Route path="/contact" >
    <ContactUs />    
    </Route>
    </Switch>
    </AnimatePresence>
    </div>
  );
}

export default App;
