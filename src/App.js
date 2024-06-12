import logo from './logo.svg';
import './App.css';
import  ButtonComponent from './components/buttons/button.js'
import {CricTable} from './components/tables/table1.js'
import { Example } from './components/tables/table1.js';

function App() {
   return(
     <div>
     <ButtonComponent/>
     <CricTable/>
     <br></br>
     <CricTable/>
     <Example></Example>
     </div>
   )
  
}



export default App;
