// import logo from './logo.svg';
import './App.css';
import  ButtonComponent from './components/buttons/button.js'
import {CricTable} from './components/tables/table1.js'
import { Example } from './components/tables/table1.js';
import { UnorderedList } from './components/lists/list1.js';
import { RenderTeams } from './components/conditionalrender/rendering1.js';
import Button from '@mui/material/Button';
import {Images} from './components/Images.js';



function App() {
   return(
     <div>
     <Images
       src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
       className='camellion'
       alt='camellion'
       
       />
        <Images
       src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
       className='camellion'
       alt='camellion'
       
       />
     </div>
   )
  
}



export default App;
