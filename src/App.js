import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About/About';
import Approach from './Components/Approach/Approach/Approach';
import Team from './Components/Team/Team/Team';
import Contact from './Components/Contact/Contact';

function App() {
  return (
   <Router>
     <Switch>
       <Route path ="/about">
        <About></About>
       </Route>
       <Route path ="/approach">
         <Approach></Approach>
       </Route>
       <Route path ="/team">
         <Team></Team>
       </Route>
       <Route path ="/contact">
         <Contact></Contact>
       </Route>
       <Route exact path ="/">
        <About></About>
       </Route>
     </Switch>
   </Router>      
  );
}

export default App;
