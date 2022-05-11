import './App.css';
import Home from './components/home/Home';
const travelData=require("./data/db.json");
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home data={travelData}/>}/>
      <Route path='/city/:id' element= {<TourDetails data={travelData}/>}/>
    </Routes>
    
    </>
  );
}

export default App;
