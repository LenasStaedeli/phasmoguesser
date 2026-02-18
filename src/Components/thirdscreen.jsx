import React, {useRef} from "react";
import data from "../data/solutions.json";

export default function Thirdscreen({
                                        randomMap, randomPic, setRandomMap, setRandomPic, randomPicFloor, setRandomPicFloor
                                    }) {
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
        alert(`${distance}`)
        console.log(distance)

        console.log(data["bild1"])
    }

    return (
        <div style={{ position: "relative", display: "inline-block"}}>
            <img src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${randomMap}/${randomMap}${randomPicFloor}.png`}
                 alt={"Edgefield"}
                 style={{ display: "block", maxWidth: "700px"}}
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

        </div>
    );
}






