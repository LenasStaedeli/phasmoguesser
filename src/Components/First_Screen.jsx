import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function First_Screen({
                                         randomMap, randomPic, setRandomMap, setRandomPic, randomPicFloor, setRandomPicFloor
                                     }) {
    const [hiddenpic, setHiddenpic] = useState(1)
    const navigate = useNavigate()
    const maps = [
        "Tanglewood",
        "Edgefield"
    ]

    function rolemapselect() {
        setRandomMap(maps[Math.floor(Math.random() * maps.length)])
        setRandomPic(Math.floor(Math.random() * 4) + 1)
        setHiddenpic(0)
    }

    if (randomMap === "Tanglewood") {
        if (randomPic > 1) {
            setRandomPicFloor("first")
        } else (
            setRandomPicFloor("basement")
        )
    } else if (randomMap === "Edgefield") {
        //Basement Implementieren!!
        if (randomPic >= 1 && randomPic <= 2) {
            setRandomPicFloor("first")
        } else if (randomPic >= 3 && randomPic <= 4) {
            setRandomPicFloor("second")
        }
    }


useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.key === "m" || event.key === "M") {
            navigate("/Mapsel")
        }
    };

    // EventListener hinzufügen
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup beim Verlassen/Unmounten der Komponente
    return () => {
        window.removeEventListener("keydown", handleKeyPress);
    };
}, []);


return (
    <>
        <h1 hidden={hiddenpic === 1 ? false : true}>Welcome to Phasmo Guesser</h1>
        <h2 hidden={hiddenpic === 1 ? false : true}>Click "map role" to get your spot</h2>
        <div>
            <img src={`https://lenasstaedeli.github.io/phasmoguesser/Spots/${randomMap}/${randomMap}${randomPic}${randomPicFloor}.jpg`}
                 style={{height: "50%", width: "50%"}}
                 alt="Tanglewood"
                 hidden={hiddenpic}/>
        </div>
        <button onClick={() =>
            rolemapselect()
        }
                disabled={hiddenpic === 1 ? false : true}>
            map role
        </button>
        <p>Press "M" on your keyboard to select the Map this picture is from</p>
        <small>currently only available for keyboard based devices</small>
    </>
)
/*const maps = [
        "Bleasdale",
        "Camp Woodwind",
        "Edgefield",
        "Grafton Farmhouse",
        "High School",
        "Maple lodge",
        "Nell's Diner",
        "Point Hope",
        "Prison",
        "Ridgeview",
        "Sunny Meadows",
        "Tanglewood",
        "Willow Street"

    ]
 */
}