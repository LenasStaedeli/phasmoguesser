import './App.css'
import First_Screen from './Components/First_Screen.jsx'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Mapsel_Screen from "./Components/Mapsel_Screen.jsx";
import {useState} from "react";
import Losingscreen from "./Components/Losingscreen.jsx";
import SecondScreen from "./Components/second_Screen.jsx";
import Floorsel_Screen from "./Components/Floorsel_Screen.jsx";
import ThirdScreen from "./Components/thirdscreen.jsx";


function App() {
    const [randomMap, setRandomMap] = useState("")
    const [randomPic, setRandomPic] = useState(1)
    const [randomPicFloor, setRandomPicFloor] = useState()
    return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<First_Screen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor}/>} />
                <Route path="/Mapsel" element={<Mapsel_Screen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic}/>} />
                <Route path="/Looser" element={<Losingscreen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic}/>} />
                <Route path="/Secondscreen" element={<SecondScreen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor}/>} />
                <Route path="/Floorsel" element={<Floorsel_Screen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor}/>} />
                <Route path="/thirdscreen" element={<ThirdScreen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor}/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
