import {useNavigate} from "react-router-dom";
import data from "../data/spots.json";

export default function Floorsel_Screen({setPoints, points, mapselect}) {
    const navigate = useNavigate()
    const mapselector = data[mapselect]


    function clickpic(floor) {
        if (mapselector.floor === floor) {
            setPoints(points + 200)
            navigate("/thirdscreen")
        } else {
            navigate("/Looser")
        }
    }

    return (
        <>
            <div>
                <h1>Floor Selection Screen</h1>
                <button onClick={() => navigate("/Secondscreen")}>Back</button>
            </div>
            {mapselector.map === "Tanglewood" && (
                <>
                    <div>Basement</div>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}basement.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("basement")}/>
                    <div>Basement</div>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}first.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood First" onClick={() => clickpic("first")}/>
                    <div>First Floor</div>
                </>
            )}
            {mapselector.map === "Edgefield" && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}basement.png`}
                        style={{height: "50%", width: "50%"}} alt="Edgefield Basement"
                        onClick={() => clickpic("basement")}/>
                    <div>Basement</div>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}first.png`}
                        style={{height: "50%", width: "50%"}} alt="Edgefield First" onClick={() => clickpic("first")}/>
                    <div>First Floor</div>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}second.png`}
                        style={{height: "50%", width: "50%"}} alt="Edgefield Second"
                        onClick={() => clickpic("second")}/>
                    <div>Second Floor</div>

                </>
            )}
        </>
    )
}