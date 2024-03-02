import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../../config/firebase";
type Props = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: Props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth) {
            navigate("/Login");
        }
    }, [props.isAuth, navigate]);

    return <div className="home">
        {auth.currentUser?.displayName}
    </div>;
};

export default Home;
