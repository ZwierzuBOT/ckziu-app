
import { NavLink } from "react-router-dom";
import "../../styles/sidebar/sideHome.css";
const sideBar = () => {
    return ( 
        <div className="sidebar">
            <NavLink className="sideItem" to="/tasks">Tasks</NavLink>
            <NavLink className="sideItem" to="/results">Results</NavLink>
            <NavLink className="sideItem" to="/schedule">Schedule</NavLink>
            <NavLink className="sideItem" to="/lorem">Lorem</NavLink>
            <NavLink className="sideItem" to="/lorem">Lorem</NavLink>
            <NavLink className="sideItem" to="/lorem">Lorem</NavLink>
            <NavLink className="sideItem" to="/lorem">Lorem</NavLink>
        </div>
     );
}
 
export default sideBar;