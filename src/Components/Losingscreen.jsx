import {useNavigate} from "react-router-dom";
import data from "../data/spots.json";


export default function Losingscreen({points, setPoints, setRoundcounter, highscore, mapselect}) {
    const mapselector = data[mapselect]
    const navigate = useNavigate()

    function reset() {
        setRoundcounter(0)
        setPoints(0)
        localStorage.setItem("highscore", highscore > points ? highscore : points)
        navigate("/")
    }

    return (
        <>
            <h1>You lost</h1>
            <h2>The correct Spot would have been on {mapselector.map} on the {mapselector.floor} floor</h2>
            <h2>You scored {points} points</h2>
            <button onClick={reset}>back</button>
        </>
    )
}