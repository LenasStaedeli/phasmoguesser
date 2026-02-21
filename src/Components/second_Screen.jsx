import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import data from "../data/spots.json";

export default function SecondScreen({mapselect}) {
    const [hiddenpic, setHiddenpic] = useState(1)
    const navigate = useNavigate()
    const mapselector = data[mapselect]

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "F" || event.key === "f") {
                navigate("/Floorsel")
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);


    return (
        <>
            <h1 hidden={hiddenpic === 1 ? false : true}>You've passed the first stage!👏</h1>
            <div>
                <img
                    src={`https://lenasstaedeli.github.io/phasmoguesser/Spots/${mapselector.map}/${mapselector.map}${mapselector.id}${mapselector.floor}.jpg`}
                    style={{height: "50%", width: "50%"}}
                    alt="Tanglewood"/>
            </div>
            <p>now press "F" on your keyboard to select the floor of the Map this picture is from</p>
        </>
    )
}