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
    const [points, setPoints] = useState(0)
    const [roundcounter, setRoundcounter] = useState(0)
    const [highscore, setHighscore] = useState(0)
    const [mapselect, setMapselect] = useState(1)
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
                <Route path="/" element={<First_Screen mapselect={mapselect} setMapselect={setMapselect}/>} />
                <Route path="/Mapsel" element={<Mapsel_Screen points={points} setPoints={setPoints} mapselect={mapselect}/>} />
                <Route path="/Looser" element={<Losingscreen mapselect={mapselect} points={points} setPoints={setPoints} setRoundcounter={setRoundcounter} setHighscore={setHighscore}/>} />
                <Route path="/Secondscreen" element={<SecondScreen mapselect={mapselect} />} />
                <Route path="/Floorsel" element={<Floorsel_Screen mapselect={mapselect} points={points} setPoints={setPoints}/>} />
                <Route path="/thirdscreen" element={<Thirdscreen mapselect={mapselect} points={points} setPoints={setPoints} roundcounter={roundcounter} setRoundcounter={setRoundcounter} setHighscore={setHighscore} />}/>
                <Route path="/winscreen" element={<Final_Screen  points={points} setPoints={setPoints} setRoundcounter={setRoundcounter}/>}/>
            </Routes>
        </HashRouter>
    </>
  )
}

export default App
