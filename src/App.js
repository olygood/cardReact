import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';


function App() {
  return (
  <BrowserRouter>
<div className="App">

  <div className="header">
  <Layout />

   
  </div>

          <div className='main'>
        
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="works" element={<Works />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
      
          </div>
         
        <div className="footer">
         <h3>je suis le footer</h3>         
        </div>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
