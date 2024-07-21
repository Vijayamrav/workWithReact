import logo from './logo.svg';
import './App.css';
import  ButtonComponent from './components/buttons/button.js'
import {CricTable} from './components/tables/table1.js'
import { Example } from './components/tables/table1.js';
import { ButtonClassComponent } from './components/class-componenets/ButtonClass.js';
import { Todos } from './components/class-componenets/Todos.js';
import { ProductListing } from './components/class-componenets/productListing/productListing.js';
import { GenerateCircle } from './components/circleTask/geneCircles.js';
import { CheckState } from './components/checks/check1.js';
import { IplTeams } from './components/conditionalRender/iplteams.js';

import { FunctionHook } from './components/counterClick.js';
import { OnOffBtn } from './components/HooksPractice/OnOffButton.js';
import { UserInput } from './components/HooksPractice/UserInput.js';
import {ParentComponent} from './components/HooksPractice/CombineBoth.js';
import { UseEffectExample } from './components/useEffect/useEffectEx1.js';
import { RecipieTable } from './components/TableCompo.js';
import { HelloWorld } from './components/conceptsInBook/hooks/hook1.js';
import React from 'react';
import { WelcomeMsg } from './components/conceptsInBook/props/props1.js';
import { SecurePassword } from './components/ReactConceptsQuestions/1.js';
import { Checkcontent } from './components/ReactConceptsQuestions/2.js';
import { FarmHouse } from './components/conceptsInBook/props/props2.js';
import { HeadingChildren } from './components/conceptsInBook/props/children.js';
import { UseEffect11 } from './components/useEffect/useEffect2.js';
import { UpdateCounter } from './components/useState/useState1.js';
import { Logging } from './components/useEffect/useEffectexample.js';
import TimerRestartFun from './components/useEffect/useEffect3.js';
import { Country } from './components/countryAPI/Fetching.js';

import { CheckTailwind } from './components/forms/forms1.js';
import { PhoneData } from './components/phoneBookComponent.js';
import { SearchBar } from './components/searchBar.js';



function App() {
    
    return(
     <div>
        
        {/* <PhoneData/> */}
        <SearchBar/>

     </div>
   )
  
}
export default App;
