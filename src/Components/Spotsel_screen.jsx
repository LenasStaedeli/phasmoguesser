import React, {useEffect, useRef, useState} from "react";
import data from "../data/spots.json";
import {useNavigate} from "react-router-dom";

export default function Spotsel_screen({
                                        points, setPoints, roundcounter, setRoundcounter, setHighscore, mapselect, setHiddenpic, setMapselect
                                    }) {
    const overlayref = useRef(null)
    const canvasRef = useRef(null)
    const [hidden, setHidden] = useState(true)
    const [hiddenend, setHiddenend] = useState(true)
    const [alreadyclicked, setAlreadyclicked] = useState(0)
    const [text, setText] = useState(``)
    const mapselector = data[mapselect]


    const navigate = useNavigate()

    useEffect(() => {
        const canvas = canvasRef.current
        const rect = overlayref.current.getBoundingClientRect()

        canvas.width = rect.width
        canvas.height = rect.height
    }, [])


    const activatefunction = (e) => {
        if (alreadyclicked > 0) return
        clickcanvas(e)
        handleclick(e)
        setAlreadyclicked(1)
    }

    const clickcanvas = (e) => {

        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()
        const ctx = canvas.getContext("2d")

        const posx = e.clientX - rect.left
        const posy = e.clientY - rect.top

        const solx = (mapselector.x / 500) * rect.width
        const soly = (mapselector.y / 500) * rect.height

        ctx.beginPath()
        ctx.arc(posx, posy, 4, 0, 2 * Math.PI)
        ctx.fillStyle = "green"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(solx, soly, 4, 0, 2 * Math.PI)
        ctx.fillStyle = "red"
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(posx, posy)
        ctx.lineTo(solx, soly)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.stroke()

    }

    const handleclick = (e) => {
        const rect = overlayref.current.getBoundingClientRect()

        const clickx = e.clientX
        const clicky = e.clientY

        const coorx = clickx - rect.left
        const coory = clicky - rect.top

        const x = Math.floor((coorx / rect.width) * 500)
        const y = Math.floor((coory / rect.height) * 500)

        const distance = Math.floor(Math.sqrt((mapselector.x - x) ** 2 + (mapselector.y - y) ** 2))

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
        setText(`Your distance is ${distance} Monkey Paws. You've got ${newPoints}/1000 Points!`)
        roundcount()
    }

    function onclickcontinue() {
        setRoundcounter(roundcounter + 1)
        setHiddenpic(1)
        setHidden(true)
        setMapselect(0.5)
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
                    style={{display: "block", maxWidth: "70vw", maxHeight: "70vh", objectFit: "contain"}}

                />
                <div
                    ref={overlayref}
                    onClick={activatefunction}
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
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none"
                    }}
                />
            </div>
            <p style={{margin: "8px", fontSize: "2rem"}}>{text}</p>
            <button hidden={hidden} disabled={hidden} style={{margin: "4px"}} onClick={onclickcontinue}>continue
            </button>
            <button hidden={hiddenend} disabled={hiddenend} style={{margin: "4px"}} onClick={showresults}>show results
            </button>
        </div>
    );
}






