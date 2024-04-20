import "./index.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJar, faExpand, faUtensils} from "@fortawesome/free-solid-svg-icons";

export default function BottomNavigation(){
    const navigate = useNavigate();
    return(
    <footer className="flex" id="bottom--navigation">
        <FontAwesomeIcon className="faJar" onClick={() => { navigate("/"); }} size="2x" icon={faJar}/>
        <FontAwesomeIcon className="faExpand" onClick={() => { navigate("scan"); }} size="2x" icon={faExpand}/>
        <FontAwesomeIcon className="faUtensils" onClick={() => { navigate("recipes"); }} size="2x" icon={faUtensils}/>
    </footer>       
    )

}