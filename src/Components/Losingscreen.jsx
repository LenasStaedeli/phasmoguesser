import {useNavigate} from "react-router-dom";

export default function Losingscreen({randomMap, randomPic, setRandomMap, setRandomPic, points, setPoints, roundcounter, setRoundcounter, highscore, setHighscore, randomPicFloor}) {
    const navigate = useNavigate()
    function reset(){
        setRoundcounter(0)
        setPoints(0)
        localStorage.setItem("highscore", highscore > points ? highscore : points)
        navigate("/")
    }
    return (
        <>
            <h1>You lost</h1>
            <h2>The correct Spot would have been on {randomMap} on the {randomPicFloor} floor</h2>
            <h2>You scored {points} points</h2>
            <button onClick={reset}>back</button>
        </>
    )
}