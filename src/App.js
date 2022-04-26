import React from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { P , Div} from './GlobalStyle';
import Admin from './pages/Admin';

function App() {
  return (
    <Router >
      <Routes>
        <Route  path = "/"  element = { <Admin view1 = "swot"/> } /> 
        <Route  path = "/home"  element = { <Admin view1 = "kridit"/> } /> 
        <Route  path = "/next"  element = { <Admin view1 = "ishgaTushgan"/> } /> 
        <Route  path = "/true"  element = { <Admin view1 = "ishgaTushmagan"/>} /> 
        <Route  path = "*" element = {<Div textC = "center"> <P textA = "center" mr = "50px 0" size = "--size48" bold = "bold" >Bunday sahifa yo'q</P></Div>} />
      </Routes>  
    </Router>
  );
}

export default App;
