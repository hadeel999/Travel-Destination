import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
const travelData=require("./data/db.json");

function App() {
  return (
    <>
    <Home data={travelData}/>
    </>
  );
}

export default App;
