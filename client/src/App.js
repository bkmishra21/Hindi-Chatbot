import './App.css';
import { useState } from 'react';
import Home from './Components/Home';
import Result from './Components/Result';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
function App() {
 const[value,setValue]=useState("");
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
   <Route exact path="/" element={ <Home values={value} setValues={setValue}/>}/>
   <Route path="/result" element={<Result values={value} setValues={setValue}/>}/>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
