import {useNavigate} from "react-router-dom";

export default function Losingscreen() {
    const navigate = useNavigate()
    return (
        <>
            <h1>You lost</h1>
            <button onClick={() => navigate("/")}>back</button>
        </>
    )
}