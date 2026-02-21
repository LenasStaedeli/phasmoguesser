import React, {useRef, useState} from "react";
import data from "../data/spots.json";
import {useNavigate} from "react-router-dom";

export default function Thirdscreen({
                                        points, setPoints, roundcounter, setRoundcounter, setHighscore, mapselect
                                    }) {
    const overlayref = useRef(null)
    const [hidden, setHidden] = useState(true)
    const [hiddenend, setHiddenend] = useState(true)
    const [alreadyclicked, setAlreadyclicked] = useState(0)
    const [text, setText] = useState(``)
    const mapselector = data[mapselect]


    const navigate = useNavigate()
    const handleclick = (e) => {
        if (alreadyclicked > 0) return
        const rect = overlayref.current.getBoundingClientRect()

        const clickx = e.clientX
        const clicky = e.clientY

        const coorx = clickx - rect.left
        const coory = clicky - rect.top

        const x = Math.floor((coorx / rect.width) * 500)
        const y = Math.floor((coory / rect.height) * 500)

        const distance = Math.floor(Math.sqrt((mapselector.x - x) ** 2 + (mapselector.y - y) ** 2))

        setAlreadyclicked(1)

        evaluate(distance)
    }

    function evaluate(distance) {
        let newPoints = 0
        if (distance <= 5) {
            newPoints = 1000
        } else {
            newPoints = (1000 - distance * 5)
        }
        setPoints(points + newPoints)
        setText(`Your distance is ${distance} you've got ${newPoints} Points!`)
        roundcount()
    }

    function onclickcontinue() {
        setRoundcounter(roundcounter + 1)
        setHidden(true)
        navigate("/")
    }

    function roundcount() {
        if (roundcounter < 4) {
            setHidden(false)
        } else {
            setHiddenend(false)
        }
    }

    function showresults() {
        navigate("/winscreen")
        if (points > localStorage.getItem("highscore")) {
            localStorage.setItem("highscore", points)
        }
        setHighscore(localStorage.getItem("highscore"))
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{position: "relative", display: "inline-block", margin: 0}}>
                <img
                    src={`https://lenasstaedeli.github.io/phasmoguesser/Floors/${mapselector.map}/${mapselector.map}${mapselector.floor}.png`}
                    alt={"Edgefield"}
                    style={{display: "block", maxWidth: "80 vw", maxHeight: "80vh", objectFit: "contain"}}

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
            <p style={{margin: "8px", fontSize: "2rem"}}>{text}</p>
            <button hidden={hidden} disabled={hidden} style={{margin: "4px"}} onClick={onclickcontinue}>continue
            </button>
            <button hidden={hiddenend} disabled={hiddenend} style={{margin: "4px"}} onClick={showresults}>show results
            </button>
        </div>
    );
}






