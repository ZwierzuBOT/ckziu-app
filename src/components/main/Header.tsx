import { NavLink } from "react-router-dom";

import "../../styles/main/header.css";
import { signOut } from "firebase/auth";
import {auth} from "../../config/firebase";

import ckziuImg from "../../assets/ckziuImg.png";

type Props = {
    color:string;
    setColor:React.Dispatch<React.SetStateAction<string>>;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header = (props:Props) => {
    const logOut =()=>{
        signOut(auth);
        props.setIsAuth(false);
    }
    return ( 
        <div className="header">
            <div className="links">
            <img src={ckziuImg} alt="Ckziu Image" className="imgCkziu"/>
            <NavLink className={`linkH ${props.color}`}  to="/" id="first">Home</NavLink>
            <NavLink className={`linkH ${props.color}`} to="about">About Us</NavLink>
            <NavLink className={`linkH ${props.color}`} to="contact">Contact</NavLink>
            {props.isAuth ? (
                <button className={`linkH ${props.color}`} onClick={logOut}>Log Out</button>
            ):(
                <NavLink className={`linkH ${props.color}`} to="signup">Sign Up</NavLink>
            )
            }
            </div>
        </div>
     );
}

export default Header;