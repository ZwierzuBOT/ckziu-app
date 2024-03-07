import SideBar from "../sideHome/SideBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/items/schedule.css";

type Props = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Schedule = (props:Props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth) {
            navigate("/Login");
        }
    }, [props.isAuth, navigate]);
    return ( 
        <div className="home">
            <SideBar />
            <div className="schedule">
                <div className="scheduleContainer">
                        <div className="left">
                            <div className="first">
                                11.11.1111
                            </div>
                            <div className="third">
                                33.33.3333
                            </div>

                        </div>

                            <div className="osCzasu"></div>

                        <div className="right">
                            <div className="second">
                                22.22.2222
                            </div>
                            <div className="fourth">
                                44.44.4444
                            </div>

                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Schedule;