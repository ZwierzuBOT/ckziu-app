import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../sideHome/SideBar";

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
        <SideBar/>
    </div>;
};

export default Home;
