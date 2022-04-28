import React from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { P , Div} from './GlobalStyle';
import Admin from './pages/Admin';

function App() {
  return (
    <Router >
      <Routes>
        <Route  path = "/"  element = { <Admin /> } /> 
        <Route  path = "/home"  element = { <Admin /> } /> 
        <Route  path = "/next"  element = { <Admin /> } /> 
        <Route  path = "/true"  element = { <Admin />} /> 
        <Route  path = "*" element = {<Div textC = "center"> <P textA = "center" mr = "50px 0" size = "--size48" bold = "bold" >Bunday sahifa yo'q</P></Div>} />
      </Routes>  
    </Router>
  );
}

export default App;
