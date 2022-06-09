import './App.css';
import React, {useState} from 'react';
import HomePageClass from '../src/Components/HomePageClass.js';
import HomePage from '../src/Components/HomePage.js';



function App() {
    const [viewApp, setViewApp] = useState(<HomePageClass/>)

  return (
    <div className="App">
        <button className='c-button' onClick={()=> setViewApp(<HomePageClass/>)} >Class Component</button>
        <button className='f-button' onClick={()=> setViewApp(<HomePage/>)}>Function Component</button>
        {
            viewApp
        }
    </div>
  );
}

export default App;
