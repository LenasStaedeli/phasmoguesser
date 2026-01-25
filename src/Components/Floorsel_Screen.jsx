import {useNavigate} from "react-router-dom";
export default function Floorsel_Screen({randomPicFloor, randomMap}) {
    const navigate = useNavigate()

    function clickpic(floor){
        if (randomPicFloor === floor){
            navigate("/thirdscreen")
        } else {
            navigate("/Looser")
        }
    }

    return (
        <>
            <div>
            <h1>Floor Selection Screen</h1>
            <button onClick={() => navigate("/")}>Back</button>
            </div>
            {randomMap === "Tanglewood" && (
                <>
                    <div>Basement</div>
                    <img src={`/Floors/${randomMap}/${randomMap}basement.png`} style={{ height: "50%", width: "50%" }} alt="Tanglewood Basement" onClick={() => clickpic("basement")}/>
                    <div>Basement</div>
                    <img src={`/Floors/${randomMap}/${randomMap}first.png`} style={{ height: "50%", width: "50%" }} alt="Tanglewood First" onClick={() => clickpic("first")}/>
                    <div>First Floor</div>
                </>
            )}
            {randomMap === "Edgefield" && (
                <>
                    <img src={`/Floors/${randomMap}/${randomMap}basement.png`} style={{ height: "50%", width: "50%" }} alt="Edgefield Basement" onClick={ () => clickpic("basement")}/>
                    <div>Basement</div>
                    <img src={`/Floors/${randomMap}/${randomMap}first.png`} style={{ height: "50%", width: "50%" }} alt="Edgefield First" onClick={ () => clickpic("first")}/>
                    <div>First Floor</div>
                    <img src={`/Floors/${randomMap}/${randomMap}second.png`} style={{ height: "50%", width: "50%" }} alt="Edgefield Second" onClick={ () => clickpic("second") }/>
                    <div>Second Floor</div>

                </>
            )}
        </>
    )
}