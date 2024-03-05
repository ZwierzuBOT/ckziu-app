import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../../config/firebase";
import SideBar from "../sideHome/SideBar";

import Tasks from "../items/Tasks";
type Props = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: Props) => {
    const navigate = useNavigate();
    const [toDisplay, setToDisplay] = useState<string>("tasks");

    useEffect(() => {
        if (!props.isAuth) {
            navigate("/Login");
        }
    }, [props.isAuth, navigate]);

    return <div className="home">
        <SideBar/>
        <Tasks/>
    </div>;
};

export default Home;
