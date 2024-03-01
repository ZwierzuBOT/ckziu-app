import { NavLink } from "react-router-dom";

import "../../styles/main/header.css";

type Props = {
    color:string;
    setColor:React.Dispatch<React.SetStateAction<string>>;
}


const Header = (props:Props) => {
    
    return ( 
        <div className="header">
            <div className="links">
            <NavLink className={`linkH ${props.color}`}  to="/" id="first">Home</NavLink>
            <NavLink className={`linkH ${props.color}`} to="about">About Us</NavLink>
            <NavLink className={`linkH ${props.color}`} to="contact">Contact</NavLink>
            </div>
        </div>
     );
}

export default Header;