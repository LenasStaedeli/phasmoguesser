import {useNavigate} from "react-router-dom";
import data from "../data/spots.json";

export default function Testingground({mapselect, setPoints, points}){
    const navigate = useNavigate()
    const mapselector = data[String(mapselect)]
    const mapname = mapselector.map
    const Mapfloors = data["Mapfloors"]

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
            {Mapfloors[mapname].basement === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}basement.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("basement")}/>
                    <div>Basement</div>
                </>
            )}
            {Mapfloors[mapname].first === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}first.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("first")}/>
                    <div>first floor</div>
                </>
            )}
            {Mapfloors[mapname].second === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}second.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("second")}/>
                    <div>second floor</div>
                </>
            )}
            {Mapfloors[mapname].third === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}third.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("third")}/>
                    <div>third floor</div>
                </>
            )}
            {Mapfloors[mapname].fourth === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}fourth.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("fourth")}/>
                    <div>fourth floor</div>
                </>
            )}
            {Mapfloors[mapname].fifth === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}fifth.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("fifth")}/>
                    <div>fifth floor</div>
                </>
            )}
            {Mapfloors[mapname].sixth === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}sixth.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("sixth")}/>
                    <div>sixth floor</div>
                </>
            )}
            {Mapfloors[mapname].seventh === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}seventh.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("seventh")}/>
                    <div>seventh floor</div>
                </>
            )}
            {Mapfloors[mapname].eighth === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}eighth.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("eighth")}/>
                    <div>eighth floor</div>
                </>
            )}
            {Mapfloors[mapname].ninth === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}ninth.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("ninth")}/>
                    <div>ninth floor</div>
                </>
            )}
            {Mapfloors[mapname].tenth === true && (
                <>
                    <img
                        src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}tenth.png`}
                        style={{height: "50%", width: "50%"}} alt="Tanglewood Basement"
                        onClick={() => clickpic("tenth")}/>
                    <div>tenth floor</div>
                </>
            )}

        </>
    )
}