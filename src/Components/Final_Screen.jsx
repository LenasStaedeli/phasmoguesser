import {useNavigate} from "react-router-dom";

export default function Final_Screen({setRoundcounter, setPoints, points}) {
    const navigate = useNavigate()

    function reset() {
        setRoundcounter(0)
        setPoints(0)
        navigate("/")
    }

    return (
        <>
            <h1>Congratulations! You've scored {points} points</h1>
            <button onClick={reset}>back</button>
        </>
    )
}