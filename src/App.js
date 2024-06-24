// import logo from './logo.svg';
import './App.css';
// import  ButtonComponent from './components/buttons/button.js'
// import {CricTable} from './components/tables/table1.js'
// import { Example } from './components/tables/table1.js';
import { ButtonClassComponent } from './components/class-componenets/ButtonClass.js';
import { Todos } from './components/class-componenets/Todos.js';
import { ProductListing } from './components/class-componenets/productListing/productListing.js';
import { BGenerateCircle } from './components/circleTask/geneCircles.js';


function App() {
  const user={
    name:"luffy",
    age:16,
    position:'king of the pirates',
    picture:"https://w7.pngwing.com/pngs/666/56/png-transparent-monkey-d-luffy-manga-one-piece-anime-manga-comics-hand-piracy.png"
  }

    return(
     <div>
  {/* //        <img src={user.picture} alt="luffy" style={{height:100 ,width:100}}/>
         
  //        <h1>{user.name}</h1>
  //        <h2>{user.age}</h2>
  //        <h2>{user.position}</h2> */}
        
      
      

      
         {/* <Todos/> */}
         <BGenerateCircle/>
         
     </div>
     

   )
  
}



export default App;
