import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        {}
    </div>;
};

export default Home;
