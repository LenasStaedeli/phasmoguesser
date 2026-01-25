import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
export default function SecondScreen({randomMap, randomPic, setRandomMap, setRandomPic, randomPicFloor, setRandomPicFloor}) {
        const [hiddenpic, setHiddenpic] = useState(1)
        const navigate = useNavigate()
        const maps = [
            "Tanglewood",
            "Edgefield"
        ]



        useEffect(() => {
            const handleKeyPress = (event) => {
                if (event.key === "F" || event.key === "f") {
                    navigate("/Floorsel")
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
                <h1 hidden={hiddenpic === 1 ? false : true}>You've passed the first stage!👏</h1>
                <div>
                    <img src={`${import.meta.env.BASE_URL}Spots/${randomMap}/${randomMap}${randomPic}${randomPicFloor}.jpg`} style={{height: "50%", width: "50%"}}
                         alt="Tanglewood"/>
                </div>
                <p>now press "F" on your keyboard to select the floor of the Map this picture is from</p>
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
                disabled = {hiddenpic === 1 ? false : true}
            ]
         */
}