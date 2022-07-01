import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FoodCreate from './Components/FoodCreate/FoodCreate';
import FoodDetail from './Components/FoodDetail/FoodDetail';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/home/:id" element={<FoodDetail/>}/>
        <Route path="/home/create" element={<FoodCreate/>}/>

      </Routes>
    </div>
  );
}

export default App;
