import "../../styles/authStyles/login.css";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import {auth, googleProvider} from "../../config/firebase";
type Props = {
    isAuth:boolean;
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>;
    color:string;
    setColor:React.Dispatch<React.SetStateAction<string>>;
}

const Login = (props:Props) => {
    useEffect(()=>{
       props.setColor("purple");
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password).then(()=>{
                props.setIsAuth(true);
                navigate("/");
            })
        }catch(err){
            console.log(err)
        }
        

    }


    const handleGoogleLogin = async () => {
        try {
            const userCredentials = await signInWithPopup(auth, googleProvider);
            const user = userCredentials.user;
    
           
              
                const name = user.displayName;
    
               
                await updateProfile(user, {
                    displayName: name
                });
    
            props.setIsAuth(true);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    

    
    return ( 
        <div className="signup">
            <div className="cardL">
                <h1 className="napis">Login</h1>
                <div className="inputsForm">
                    <label htmlFor="email" className="labsL">Email:</label>
                    <input type="email" id="email" className="inputsL" placeholder="..." onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password" className="labsL">Password:</label>
                    <input type="password" id="password" className="inputsL" placeholder="..." onChange={(e)=>setPassword(e.target.value)}/>
                    <h1>{`Don't have and account? `}<NavLink to="/SignUp" className="kkk">Sign Up</NavLink></h1>
                </div>
                <div className="buttons">
                <button className="googleL" onClick={handleGoogleLogin}><FontAwesomeIcon icon={faGoogle} className="gIconL"/> Continue With Google</button>
                    <button className="confirm" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
     );
}

export default Login;