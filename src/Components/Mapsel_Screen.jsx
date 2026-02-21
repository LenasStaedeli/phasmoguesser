import {useNavigate} from "react-router-dom";

export default function Mapsel_Screen({randomMap, randomPic, setPoints, points}) {
    const navigate = useNavigate()
    function clickpic(map){
        if (randomMap === map){
            setPoints(points + 300)
            navigate("/Secondscreen")
        }
        else{
            navigate("/Looser")
        }
    }
    return (
        <>
            <div>
                <h1>Map Selection Screen</h1>
                <button onClick={() => navigate("/")}>Back</button>
            </div>
            <div style={{margin: "3px", textAlign: "center"}}>
                <img
                    src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/tanglewood.jpg`}
                    style={{width: "30%", height: "30%", margin: "10px"}}
                    alt="Tanglewood"
                    onClick={() => clickpic("Tanglewood")}
                />
                <div>6 Tanglewood Drive</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/edgefield.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Edgefield")}

                />
                <div>42 Edgefield Road</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/ridgeview.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Ridgeview")}

                />
                <div>10 Ridgeview Court</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/nellsdiner.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Nells Diner")}

                />
                <div>Nell's Diner</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/grafton.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Grafton Farmhouse")}

                />
                <div>Grafton Farmhouse</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/willow.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Willow Street")}

                />
                <div>13 Willow Street</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/pointhope.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Point Hope")}

                />
                <div>Point Hope</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/highschool.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("High School")}

                />
                <div>Brownstone High School</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/bleasdale.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Bleasdale")}

                />
                <div>Bleasdale Farmhouse</div>


                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/sunnymed.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Sunny Meadows")}

                />
                <div>Sunny Meadows</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/prison.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Prison")}

                />
                <div>Prison</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/maplelodge.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Maple lodge")}

                />
                <div>Maple Lodge Campsite</div>

                <img src={`https://lenasstaedeli.github.io/phasmoguesser/Mapselpics/campwoodwin.jpg`}
                     style={{width: "30%", height: "30%", margin: "10px"}}
                     alt="Tanglewood"
                     onClick={() => clickpic("Camp Woodwind")}

                />
                <div>Camp Woodwind</div>
            </div>
        </>

    )
}