import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import data from "../data/spots.json";


export default function First_Screen({
                                         mapselect, setMapselect
                                     }) {
    const [hiddenpic, setHiddenpic] = useState(1)
    const navigate = useNavigate()
    const mapselector = data[mapselect]


    function rolemapselect() {
        setMapselect(Math.floor(Math.random() * 9) + 1)
        setHiddenpic(0)

    }


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "m" || event.key === "M") {
                navigate("/Mapsel")
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);


    return (
        <>            <h1 hidden={hiddenpic === 1 ? false : true}>Welcome to Phasmo Guesser</h1>
            <h2 hidden={hiddenpic === 1 ? false : true}>Click "map role" to get your spot</h2>
            <div>
                <img
                    src={`https://lenasstaedeli.github.io/phasmoguesser/Spots/${mapselector.map}/${mapselector.map}${mapselector.id}${mapselector.floor}.${mapselector === 0.5 ? `png` : `jpg`}`}
                    style={{height: "50%", width: "50%"}}
                    alt="Tanglewood"
                    hidden={hiddenpic}/>
            </div>
            <button onClick={() =>
                rolemapselect()
            }
                    disabled={hiddenpic === 1 ? false : true}
            >
                map role
            </button>
            <p>Press "M" on your keyboard to select the Map this picture is from</p>
            <small>currently only available for keyboard based devices</small>
        </>
    )
}