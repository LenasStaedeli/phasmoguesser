import React, {useRef, useState} from "react";
import data from "../data/solutions.json";

export default function Thirdscreen({
                                        randomMap, randomPic, setRandomMap, setRandomPic, randomPicFloor,
                                        setRandomPicFloor, points, setPoints
                                    }) {
    const [roundcounter, setRoundcounter] = useState(0)
    const overlayref = useRef(null)

    const handleclick = (e) => {
        const rect = overlayref.current.getBoundingClientRect()

        const clickx = e.clientX
        const clicky = e.clientY

        const coorx = clickx - rect.left
        const coory = clicky - rect.top

        const x = Math.floor(( coorx/rect.width ) * 500)
        const y = Math.floor(( coory/rect.height ) * 500)


        const solution = data[`${randomMap}${randomPic}${randomPicFloor}.jpg`]
        const distance = Math.floor(Math.sqrt((solution.x - x) ** 2 + (solution.y - y) ** 2))
        console.log(distance)

        console.log(data["bild1"])
        evaluate(distance, solution)
    }
    function evaluate(distance, solution){
        let newPoints = 0
        if(distance <= 5){
            newPoints = points + 1000
        }
        else{
            newPoints = points + (1000 - distance * 5)
        }
        alert(`Your distance is ${distance} you've got ${newPoints} Points`)
        roundcount()
    }
    function roundcount(){
        if(roundcounter <= 5){
            setRoundcounter(roundcounter + 1)
        }
    }

    return (
        <div style={{ position: "relative", display: "inline-block", margin:0}}>
            <img src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${randomMap}/${randomMap}${randomPicFloor}.png`}
                 alt={"Edgefield"}
                 style={{ display: "block", maxWidth: "80 vw", maxHeight: "80vh", objectFit: "contain"}}

            />
            <div
                ref={overlayref}
                onClick={handleclick}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    cursor: "crosshair"

                }}
            >
            </div>
            <button hidden={roundcounter > 5 ? true : false}>continue</button>

        </div>
    );
}






