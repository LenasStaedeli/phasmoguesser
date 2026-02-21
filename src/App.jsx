import './App.css'
import First_Screen from './Components/First_Screen.jsx'
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from "react-router-dom";
import Mapsel_Screen from "./Components/Mapsel_Screen.jsx";
import {useState} from "react";
import Losingscreen from "./Components/Losingscreen.jsx";
import SecondScreen from "./Components/second_Screen.jsx";
import Floorsel_Screen from "./Components/Floorsel_Screen.jsx";
import Thirdscreen from "./Components/thirdscreen.jsx";
import Final_Screen from "./Components/Final_Screen.jsx";


function App() {
    const [randomMap, setRandomMap] = useState("")
    const [randomPic, setRandomPic] = useState(1)
    const [randomPicFloor, setRandomPicFloor] = useState()
    const [points, setPoints] = useState(0)
    const [roundcounter, setRoundcounter] = useState(0)
    const [highscore, setHighscore] = useState(0)
    return (
    <>
        <small
            style={{
                position: "fixed",
                top: "1rem",
                right: "1rem"
            }}
        >
            Round: {roundcounter + 1}/5
        </small>
        <small
            style={{
                position: "fixed",
                top: "2rem",
                left: "1rem"
            }}
        >
            points: {points}
        </small>
        <small
            style={{
                position: "fixed",
                top: "1rem",
                left: "1rem"
            }}
        >
            Highscore: {localStorage.getItem("highscore") ? localStorage.getItem("highscore") : 0}
        </small>
        <HashRouter>
            <Routes>
                <Route path="/" element={<First_Screen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor} points={points} setPoints={setPoints}/>} />
                <Route path="/Mapsel" element={<Mapsel_Screen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} points={points} setPoints={setPoints}/>} />
                <Route path="/Looser" element={<Losingscreen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} points={points} setPoints={setPoints} roundcounter={roundcounter} setRoundcounter={setRoundcounter} highscore={highscore} setHighscore={setHighscore} randomPicFloor={randomPicFloor}/>} />
                <Route path="/Secondscreen" element={<SecondScreen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor}/>} />
                <Route path="/Floorsel" element={<Floorsel_Screen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor} points={points} setPoints={setPoints}/>} />
                <Route path="/thirdscreen" element={<Thirdscreen randomMap={randomMap} randomPic={randomPic} setRandomMap={setRandomMap} setRandomPic={setRandomPic} randomPicFloor={randomPicFloor} setRandomPicFloor={setRandomPicFloor} points={points} setPoints={setPoints} roundcounter={roundcounter} setRoundcounter={setRoundcounter} highscore={highscore} setHighscore={setHighscore} />}/>
                <Route path="/winscreen" element={<Final_Screen  points={points} setPoints={setPoints} setRoundcounter={setRoundcounter}/>}/>
                {/*USE YAGNI IT'S to messy*/ }
            </Routes>
        </HashRouter>
    </>
  )
}

export default App
