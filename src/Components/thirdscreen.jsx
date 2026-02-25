import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import data from "../data/spots.json";

export default function Thirdscreen({mapselect}) {
    const navigate = useNavigate()
    const mapselector = data[mapselect]

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "S" || event.key === "s") {
                navigate("/spotsel")
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);


    return (
        <>
            <h1>You've passed the second stage and earned +200 Points!👏</h1>
            <div>
                <img
                    src={`https://lenasstaedeli.github.io/phasmoguesser/Spots/${mapselector.map}/${mapselector.map}${mapselector.id}${mapselector.floor}.jpg`}
                    style={{height: "50%", width: "50%"}}
                    alt="Tanglewood"/>
            </div>
            <p>now press "S" on your keyboard to select the exact spot the picture is from</p>
        </>
    )
}