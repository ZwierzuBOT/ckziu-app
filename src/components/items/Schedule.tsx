import React, { useEffect, useState } from 'react';
import SideBar from "../sideHome/SideBar";
import { useNavigate } from "react-router-dom";
import "../../styles/items/schedule.css";

type Props = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Schedule = (props:Props) => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");

    const [etap, setEtap] = useState(1);
    const [mies, setMies] = useState("11.11.1111")
    const [des, setDes] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. Curabitur sed nunc sed justo commodo suscipit non eu ante. Duis placerat lectus a lobortis pulvinar. Ut sit amet mi at libero ultricies molestie id at erat. Ut non enim eu lacus sollicitudin imperdiet sed eu metus")

    useEffect(() => {
        if (!props.isAuth) {
            navigate("/Login");
        }
    }, [props.isAuth, navigate]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === "1"){
            setValue("0%")
            setEtap(1)
            setMies("11.11.1111")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. Curabitur sed nunc sed justo commodo suscipit non eu ante. Duis placerat lectus a lobortis pulvinar. Ut sit amet mi at libero ultricies molestie id at erat. Ut non enim eu lacus sollicitudin imper")
        }else if(e.target.value === "2"){
            setValue("5%")
            setEtap(2)
            setMies("22.22.2222")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. ")
        }else if(e.target.value === "3"){
            setValue("10%")
            setEtap(3)
            setMies("33.33.3333")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. ")
        }else if(e.target.value === "4"){
            setValue("15%")
            setEtap(4)
            setMies("44.44.4444")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. ")
        }else if(e.target.value === "5"){
            setValue("20%")
            setEtap(5)
            setMies("55.55.5555")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. ")
        }else if(e.target.value === "6"){
            setValue("25%")
            setEtap(6)
            setMies("66.66.6666")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. Curabitur sed nunc sed justo commodo suscipit non eu ante. Duis placerat lectus a lobortis pulvinar. Ut sit amet mi at libero ultricies molestie id at erat. Ut non enim eu lacus sollicitudin imper")
        }else if(e.target.value === "7"){
            setValue("30%")
            setEtap(7)
            setMies("77.77.7777")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. Curabitur sed nunc sed justo commodo suscipit non eu ante. Duis placerat lectus a lobortis pulvinar. Ut sit amet mi at libero ultricies molestie id at erat. Ut non enim eu lacus sollicitudin imper")
        }else if(e.target.value === "8"){
            setValue("35%")
            setEtap(8)
            setMies("88.88.8888")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. Curabitur sed nunc sed justo commodo suscipit non eu ante. ")
        }else if(e.target.value === "9"){
            setValue("40%")
            setEtap(9)
            setMies("99.99.9999")
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ligula ante, vitae lacinia est malesuada eu. Praesent interdum lorem volutpat cursus interdum. Nam a rutrum nulla, eget viverra elit. Etiam quis vestibulum tellus. Curabitur sed nunc sed justo commodo suscipit non eu ante. Duis placerat lectus a lobortis pulvinar. Ut sit amet mi at libero ultricies molestie id at erat. Ut non enim eu lacus sollicitudin imper")
        }else if(e.target.value === "10"){
            setValue("45%")
            setEtap(10)
            setMies("100.00.0000");
            setDes("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
        }
    };
    
   
    


    return (
        <div className="home">
            <SideBar />
            <div className="schedule">
               <div className="inputRange">
                <label htmlFor="nichcemisienic" className='labelRange'>Select Date!</label>
                <input type="range" min="1" max="10" name='nichcemisienic' onChange={(e)=>handleChange(e)} className='innerInputRange' defaultValue="1"/>
               </div>
               <div className="terminy">
                    <div className="rangeElement" style={{left:value}}>
                        <h1 className='etapRange'>{`Stage ${etap}`}</h1>
                        <h3 className='dateRange'>{`Date: ${mies}`}</h3>
                        <p className='desRange'>{des}</p>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Schedule;
