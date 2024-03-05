import "../../styles/authStyles/signup.css";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


type Props = {
    isAuth:boolean;
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>;
    color:string;
    setColor:React.Dispatch<React.SetStateAction<string>>;
}

const SignUp = (props:Props) => {
    useEffect(()=>{
        props.setColor("blue");
    })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async () => {
        try{
            const userCredentils = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(userCredentils.user, {displayName: name}).then(() =>{
                navigate("/login")
            })
        }catch(err){
            console.log(err)
        }
        

    }


    const handleGoogleLogin = async () => {
        try {
          const userCredentials = await signInWithPopup(auth, googleProvider);

          await updateProfile(userCredentials.user, {
              displayName:userCredentials.user.displayName,
          }).then(()=>{
              props.setIsAuth(true);
              props.setColor("purple");
              navigate("/");

          })
        } catch (err) {
          console.log("wrong password");
        }
      };
    

    return ( 
        <div className="signup">
            <div className="card">
                <h1 className="napis">Sign Up</h1>
                <div className="inputsForm">
                    <label htmlFor="name" className="labs">Name:</label>
                    <input type="text" id="name" className="inputs" placeholder="..." onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="email" className="labs">Email:</label>
                    <input type="email" id="email" className="inputs" placeholder="..." onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password" className="labs">Password:</label>
                    <input type="password" id="password" className="inputs" placeholder="..." onChange={(e)=>setPassword(e.target.value)}/>
                    <h1>{`Arleady have an account? `}<NavLink to="/Login" className="kkkL">Login</NavLink></h1>
                </div>
                <div className="buttons">
                    <button className="google"><FontAwesomeIcon icon={faGoogle} className="gIcon" onClick={handleGoogleLogin}/> Sign Up With Google</button>
                    <button className="confirm" onClick={handleSubmit}>SignUp</button>
                </div>
            </div>
        </div>
     );
}

export default SignUp;